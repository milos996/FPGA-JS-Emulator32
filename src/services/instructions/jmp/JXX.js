import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'j %s'

export default class JXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}

	exec ({ context, memory }) {
		context.pc = this.argument
	}
}
