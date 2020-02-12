import CallXX from './CallXX'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'callc 0x%08x'

export default class CallCXX extends CallXX {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}

	exec ({ context, memory }) {
		if (context.f  & 0x2 == 1) {
			super.exec({ context, memory })
		}

		context.pc += 6
	}
}
