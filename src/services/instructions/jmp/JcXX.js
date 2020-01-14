import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'jc 0x%08x"'

export default class JcXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, 0, 0)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION())
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
