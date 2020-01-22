import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination) => `${type} ${sdestination}, 0x%02x`

export default class AluBRegXX extends Instruction {
	constructor (memory, address, source, destination, type) {
		super(memory, address, source, destination)
		super.setArgument8()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(INSTRUCTIONS_TYPES_NAMES[type], this.sdestination))
		this.type = type
	}

	exec ({ context }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]

		// TODO: First parameter cast to byte (byte)
		let result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]],
			this.argument
		)

		switch (type) {
			case MUL_B:	result =
				// context.h  = (byte)((result & 0xffffffff00000000L) >> 32)
				context.h  = (result & 0xffffffff00000000) >> 32
				break
			case DIV_B:
				// context.h  = (byte)(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % this.argument)
				context.h  = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % this.argument
				break
		}

		context[REGISTER_VALUE_NAME_MAPPER[this.destination]] = result
		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		Instruction.markOverflow(old_a, this.argument, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		context.pc += 4
	}
}
