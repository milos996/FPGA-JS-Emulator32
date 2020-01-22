
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`

export default class AluSRegXMRegYXX extends Instruction {
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

		result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]],
			memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2]
		)

		switch (this.type) {
			case INSTRUCTION_TYPES.MUL_S:
				//TODO: int cast and L number -->> context.h  = (int)((res & 0xffffffff00000000L) >> 32)
				context.h  = (result & 0xffffffff00000000) >> 32
				break
			case INSTRUCTION_TYPES.DIV_S:
				context.h  =
				  context[REGISTER_VALUE_NAME_MAPPER[this.destination]] %
				  memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2]
				break
		}

		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = result

		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		Instruction.markOverflow(
			old_a,
			memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2],
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context
		)

		context.pc  += 6
	}
}
