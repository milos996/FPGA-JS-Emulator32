import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (ssource) => `out [%s], ${ssource}`

export default class OutXXReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument(memory)
		this.argument = memory[(this.address + 2) / 2]
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.ssource), symbolTable)
	}

	exec ({ context, memory }) {
		//TODO 	context.toPort(...) <<---- Implement this
		context.toPort(this.argument, REGISTER_VALUE_NAME_MAPPER[this.source])
		context.pc  += 4
	}
}
