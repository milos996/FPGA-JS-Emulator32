import Instruction from '../Instruction'
export default class Nop extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		this.assembler = "nop"

		super.setContent()
	}

	exec ({ context, memory }) {
		context.pc += 2
	}
}
