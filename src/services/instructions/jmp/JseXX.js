import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'jse %s'

export default class JseXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}

	exec ({ context }) {
		if (context.f  & 0x8 == 0 || context.f  & 0x1 == 1) {
			context.pc  = this.argument
		}

		context.pc  += 6
	}
}
