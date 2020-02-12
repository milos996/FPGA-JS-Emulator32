import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `st.w [${sdestination} + 0x%08x], ${ssource}`

export default class StWMRegXXXRegY extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context }) {
		Instruction.setMemContent(
			context,
			(Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]   +  this.argument)) / 2,
			context[REGISTER_VALUE_NAME_MAPPER[this.source]],
			Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]   +  this.argument)
		)

		context.pc  += 6
	}
}
