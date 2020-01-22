import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `cmp.w ${sdestination}, ${ssource}`

export default class CmpWRegXRegY extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		const result = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] - context[REGISTER_VALUE_NAME_MAPPER[this.source]]
		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(old_a, context[REGISTER_VALUE_NAME_MAPPER[this.source]], result, context)
		context.pc  += 2
	}
}
