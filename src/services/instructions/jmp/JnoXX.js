import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'jno %s'

export default class JnoXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}


	exec ({ context }) {
		if ((context.f  & 0x4) == 0) {
			context.pc  = this.argument
		}

		context.pc  += 6
	}
}
