import Instruction from '../Instruction'
export default class Nop extends Instruction {
	constructor (memory, address) {
		super(memory, address, 0, 0)
		this.assembler = "nop"
		super.setContent()
	}

	exec ({ context, memory })context) {
		context.pc += 2
	}
}
