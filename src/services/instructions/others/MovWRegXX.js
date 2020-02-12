import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `mov.w ${sdestination}, %s`

export default class MovWRegXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination), symbolTable)
	}

	exec ({ context }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = this.argument
		context.pc += 6
	}
}
