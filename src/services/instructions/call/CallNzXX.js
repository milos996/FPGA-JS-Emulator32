import CallXX from './CallXX'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'callnz %s'

export default class CallNzXX extends CallXX {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}

	exec ({ context, memory }) {
		if ((context.f  & 1) == 0) {
			super.exec({ context, memory })
			return
		}

		context.pc  += 6
	}
}
