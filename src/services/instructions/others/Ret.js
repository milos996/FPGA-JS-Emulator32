import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'ret'

export default class Ret extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, 0, 0)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION())
	}

	exec ({ context, memory }) {
		const address = Instruction.pop(memory, Instruction.fix(context.sp) / 2)
		context.sp += 4
		context.pc = address
	}
}
