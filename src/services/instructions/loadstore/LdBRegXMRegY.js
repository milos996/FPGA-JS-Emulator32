
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.b ${sdestination}, [${ssource}]`

export default class LdBRegXMRegY extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		const fixedAddress = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]])
		if (fixedAddress & 1 == 0) {
			// TODO: ->> (short)(context.memory[fixedAddr / 2] >> 8) & 0xFF
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (memory[fixedAddr / 2] >> 8) & 0xFF
		} else {
			// TODO: ->> (short)(context.memory[fixedAddr / 2] & 255) & 0xFF
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (memory[fixedAddr / 2] & 255) & 0xFF
		}

		context.pc  += 2
	}
}