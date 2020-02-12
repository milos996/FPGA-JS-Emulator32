import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination) => `${type} ${sdestination}, 0x%04x`

export default class AluSRegXX extends Instruction {
	constructor (memory, address, source, destination, type, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(INSTRUCTIONS_TYPES_NAMES[type], this.sdestination))
		this.type = type
	}

	exec ({ context }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]

		let result = 0

		result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]],
			this.argument
		)

		switch (this.type) {
			case INSTRUCTION_TYPES.MUL_S:
				//TODO: int cast and L for hex number -->> context.h  = (int)((result & 0xffffffff00000000L) >> 32)
				context.h  = (result & 0xffffffff00000000) >> 32
				break
		  case INSTRUCTION_TYPES.DIV_S:
				//TODO: int type cast -->> context.h  =  (int)(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % this.argument)
				context.h  = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % this.argument
				break
		}

		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = result
		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		Instruction.markOverflow(old_a, this.argument, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		context.pc  += 4
	}
}
