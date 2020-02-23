import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `st.s [${sdestination}], ${ssource}`

export default class StSMRegXRegY extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource), symbolTable)
	}

	exec ({ context, memory }) {
		// TODO: -->> (short) context[REGISTER_VALUE_NAME_MAPPER[this.source]]
		const address = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]])
		const content = context[REGISTER_VALUE_NAME_MAPPER[this.source]]

		memory[Math.floor(address / 2)] = content
		context.pc  += 2

		return {
			address: address,
			content: content
		}
	}
}
