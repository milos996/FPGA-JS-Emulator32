import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (ssource) => `st.s [0x%08x], ${ssource}`

export default class StSMXXReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.ssource))
	}

	exec ({ context, memory }) {
		/**
		 * TODO: Third parameter cast to `short`
		 * Instruction.setMemContent(
		 *   memory,
		 *	 Instruction.fix(this.argument) / 2,
		 *	 (short) context[REGISTER_VALUE_NAME_MAPPER[this.source]],
		 *	 Instruction.fix(this.argument)
		 * )
		 */

		Instruction.setMemContent(
			memory,
			Instruction.fix(this.argument) / 2,
			context[REGISTER_VALUE_NAME_MAPPER[this.source]],
			Instruction.fix(this.argument)
		)

		context.pc  += 6
	}
}
