
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `st.w [${sdestination}], ${ssource}`

export default class StWMRegXRegY extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context }) {
		Instruction.setMemContent(
			context,
			Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2,
			context[REGISTER_VALUE_NAME_MAPPER[this.source]],
			Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] )
		)

		context.pc += 2
	}
}
