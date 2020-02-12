import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, ${ssource}`

export default class AluWRegXRegY extends Instruction {
	constructor (memory, address, source, destination, type, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(
			ASSEMBLER_INSTRUCTION_EXPRESSION(
				INSTRUCTIONS_TYPES_NAMES[type],
				this.sdestination,
				this.ssource
			))

		this.type = type
	}


	exec ({ context }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]

		// TODO: type `long` -->> long result = 0
		let result = 0

		result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](context[REGISTER_VALUE_NAME_MAPPER[this.destination]], context[REGISTER_VALUE_NAME_MAPPER[this.source]])

		switch (this.type) {
			case INSTRUCTION_TYPES.MUL_W:
				//TODO: short type cast -->> context.h  = (short)((result & 0xffff0000) >> 16)
				context.h  = (result & 0xffff0000) >> 16
				break
		  case INSTRUCTION_TYPES.DIV_W:
				//TODO: short type cast -->> context.h  = (short)(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % context[REGISTER_VALUE_NAME_MAPPER[this.source]] )
				context.h  = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % context[REGISTER_VALUE_NAME_MAPPER[this.source]]
				break
		}

		// TODO: int cast -->> context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (int)result
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]] = result
		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		Instruction.markOverflow(old_a, context[REGISTER_VALUE_NAME_MAPPER[this.source]] , context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		context.pc  += 2
	}
}
