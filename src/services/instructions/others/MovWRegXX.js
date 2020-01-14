import Instruction from '../Instruction'
import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `mov.w ${sdestination}, 0x%08x`

export default class MovWRegXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = this.argument
		context.pc += 6
	}
}
