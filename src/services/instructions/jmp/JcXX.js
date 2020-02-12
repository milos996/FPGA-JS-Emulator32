import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'jc 0x%08x"'

export default class JcXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}


	exec ({ context }) {
		if ((context.f  & 0x2) != 0) {
			context.pc  = this.argument
			return
		}

		context.pc  += 6
	}
}
