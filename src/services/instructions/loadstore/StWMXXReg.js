import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `st.w %s, ${sdestination}`

export default class StWMXXReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination), symbolTable)
	}

	exec ({ context }) {
		Instruction.setMemContent(
			context,
			Instruction.fix(this.argument) / 2,
			context[REGISTER_VALUE_NAME_MAPPER[this.source]],
			Instruction.fix(this.argument)
		)

		context.pc  += 6

		return {
			address: Instruction.fix(this.argument),
			content: context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		}
	}
}
