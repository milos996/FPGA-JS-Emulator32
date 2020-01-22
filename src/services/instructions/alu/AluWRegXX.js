import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination) => `${type} ${sdestination}, 0x%08x`

export default class AluWRegXX extends Instruction {
	constructor (memory, address, source, destination, type) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(INSTRUCTIONS_TYPES_NAMES[type], this.sdestination))
		this.type = type
	}

	exec ({ context, memory }) {
		// TOOD: int type -->> int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]

		// TODO: long type -->> long result = 0
		let result = 0

		result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]],
			this.argument
		)

		switch (this.type) {
			case MUL_W:
				//TODO: int cast and L type of numbber -->> context.h  = (int)((result & 0xffffffff00000000L) >> 32)
				context.h  = (result & 0xffffffff00000000) >> 32
				break
			case DIV_W:
				context.h  = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % this.argument
				break
		}

		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = result
		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		Instruction.markOverflow(old_a, this.argument, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		context.pc += 6
	}
}
