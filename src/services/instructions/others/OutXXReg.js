import Instruction from '../Instruction'
import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (ssource) => `out [0x%04x], ${ssource}`

export default class OutXXReg extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument()
		this.argument = memory[(this.address + 2) / 2]
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.ssource))
	}

	exec ({ context, memory }) {
		//TODO 	context.toPort(...) <<---- Implement this
		context.toPort(this.argument, REGISTER_VALUE_NAME_MAPPER[this.source])
		context.pc  += 4
	}
}
