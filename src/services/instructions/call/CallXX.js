import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'call 0x%08x'

export default class CallXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, 0, 0)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION())
		super.isJump = true
	}

	exec ({ context, memory }) {
		context.sp  -= 4

		Instruction.push(
			memory,
			Instruction.fix(context.sp) / 2,
			context.pc + 6
		)

		context.pc  = this.argument
	}
}