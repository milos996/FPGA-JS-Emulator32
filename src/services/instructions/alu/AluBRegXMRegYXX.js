
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`

export default class AluBRegXMRegYXX extends Instruction {
	constructor (memory, address, source, destination, type) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(
			ASSEMBLER_INSTRUCTION_EXPRESSION(
				INSTRUCTIONS_TYPES_NAMES[type],
			  this.sdestination,
		  	this.ssource
			)
		)

		this.type = type
	}


	exec ({ context, memory }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		let result = 0

		const fixedAddress = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument)

		/**
		 * TODO: short cast
		 *
		 * const operand = (fixedAddress & 1 == 0) ?
		 * 			(short)((context.memory[fixedAddr / 2] >> 8) & 0xFF) :
		 * 			(short)((context.memory[fixedAddr / 2] & 255) & 0xFF)
		 */
		const operand = (fixedAddress & 1 == 0) ?
			(memory[fixedAddress / 2] >> 8) & 0xFF :
			(memory[fixedAddress / 2] & 255) & 0xFF


		/**
		 * TODO: cast byte
		 *
		 * result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](
		 * (byte) context[REGISTER_VALUE_NAME_MAPPER[this.destination]],
		 * operand
		*/

		result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](
      context[REGISTER_VALUE_NAME_MAPPER[this.destination]],
			operand
		)

		switch (type) {
			case INSTRUCTION_TYPES.MUL_B:
				//TODO byte cast and L number -->> context.h  = (byte)((res & 0xffffffff00000000L) >> 32)
				context.h  = (res & 0xffffffff00000000) >> 32
				break
			case INSTRUCTION_TYPES.DIV_B:
				// TODO: cast to byte -->> context.h  = (byte)(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % operand)
				context.h = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % operand
				break
		}


		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = result

		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		Instruction.markOverflow(old_a, operand, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)

		context.pc  += 6
	}
}
