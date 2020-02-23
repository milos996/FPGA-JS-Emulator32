import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (ssource) => `jr ${ssource}`

export default class JrReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.ssource), symbolTable)
		super.isJump = true
	}

	exec ({ context }) {
		context.pc  = context[REGISTER_VALUE_NAME_MAPPER[this.source]]
	}
}
