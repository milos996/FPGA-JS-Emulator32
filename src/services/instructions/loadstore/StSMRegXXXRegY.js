import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `st.s [${sdestination} + 0x%08x], ${ssource}`

export default class StSMRegXXXRegY extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		// TODO: cast to  `short` ->> (short) context[REGISTER_VALUE_NAME_MAPPER[this.source]]
		memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2] =
		  context[REGISTER_VALUE_NAME_MAPPER[this.source]]

		context.pc  += 6
	}
}
