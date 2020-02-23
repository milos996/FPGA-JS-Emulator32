import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'jp(jge) %s'

export default class JpXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}


	exec ({ context }) {
		if ((context.f  & 0x8) != 0) {
			context.pc  = this.argument
			return
		}

		context.pc += 6
	}
}
