import Instruction from '../Instruction'
import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination ,ssource) => `swap ${sdestination}, ${ssource}`

export default class SwapRegXRegY extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		const t = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = context[REGISTER_VALUE_NAME_MAPPER[this.source]]
		context[REGISTER_VALUE_NAME_MAPPER[this.source]] = t

		context.pc += 2
	}
}
