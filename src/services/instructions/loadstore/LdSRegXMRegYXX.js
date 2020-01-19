import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource} + 0x%08x]`

export default class LdSRegXMRegYXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		const address = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument)
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = memory[address / 2] & 0xFFFF
		context.pc  += 6
	}
}
