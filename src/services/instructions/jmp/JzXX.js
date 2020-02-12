import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'jz %s'

export default class JzXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}

	exec ({ context }) {
		if ((context.f  & 1) === 1) {
			context.pc  = this.argument
		} else {
			context.pc  += 6
		}
	}
}
