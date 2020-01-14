import Instruction from '../Instruction'
import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `mov.s ${sdestination}, 0x%04x`

export default class MovSRegXX extends Instruction {

	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory })context) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = this.argument
		context.pc += 4
	}
}
