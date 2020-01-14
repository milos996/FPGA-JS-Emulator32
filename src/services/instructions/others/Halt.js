import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => "halt"

export default class Halt extends Instruction {
	constructor (memory, address) {
		super(memory, address, 0, 0)
		this.assembler = ASSEMBLER_INSTRUCTION_EXPRESSION()
		super.setContent()
	}

	exec ({ context, memory }) {
		//context.engine.halt()
		//context.pc ++

		// TODO Check if this is necessary
		// try {Thread.sleep(100)} catch (Exception ex) {}
	}
}
