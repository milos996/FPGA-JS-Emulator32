import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `st.w [0x%08x], ${sdestination}`

export default class StWMXXReg extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context }) {
		Instruction.setMemContent(
			context,
			Instruction.fix(this.argument) / 2,
			context[REGISTER_VALUE_NAME_MAPPER[this.source]],
			Instruction.fix(this.argument)
		)

		context.pc  += 6
	}
}
