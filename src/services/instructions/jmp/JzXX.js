import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'jz 0x%08x'

export default class JzXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, 0, 0)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION())
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
