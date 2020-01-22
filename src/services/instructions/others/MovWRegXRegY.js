import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (destination ,source) => `mov.w ${destination}, ${source}`

export default class MovWRegXRegY extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]] = context[REGISTER_VALUE_NAME_MAPPER[this.source]]
		context.pc += 2
	}
}
