import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination ,ssource) => `mov.w ${sdestination}, ${ssource} 0x%08x`

export default class MovWRegXRegYXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]] =
			context[REGISTER_VALUE_NAME_MAPPER[this.source]]] +
			this.argument

		context.pc += 6
	}
}