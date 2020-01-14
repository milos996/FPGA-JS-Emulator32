import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'jg 0x%08x'

export default class JgXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, 0, 0)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION())
		super.isJump = true
	}


	exec ({ context }) {
		if (context.f  & 0x8 != 0 && context.f  & 0x1 == 0) {
			context.pc  = this.argument
		}

		context.pc += 6
	}
}
