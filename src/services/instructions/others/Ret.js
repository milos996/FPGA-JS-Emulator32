import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'ret'

export default class Ret extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
	}

	exec ({ context, memory }) {
		const address = Instruction.pop(memory, Instruction.fix(context.sp) / 2)
		context.sp += 4
		context.pc = address
	}
}
