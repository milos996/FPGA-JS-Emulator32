import CallXX from './CallXX'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'callp 0x%08x'

export default class CallGXX extends CallXX {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}

	exec ({ context, memory }) {
		if (context.f  & 0x8 == 1 && context.f  & 0x1 == 0) {
			super.exec({ context, memory })
			return
			}

			context.pc  += 6
	}
}
