import CallXX from './CallXX'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'callse 0x%08x'

export default class CallSeXX extends CallXX {
	constructor (memory, address, source, destination) {
		super(memory, address, 0, 0)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION())
		super.isJump = true
	}

	exec ({ context, memory }) {
		if (context.f  & 0x8 == 0 || context.f  & 0x1 == 1) {
			super.exec({ context, memory })
			return
		}

		context.pc  += 6
	}
}
