
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `ld.b ${sdestination}, [0x%08x]`

export default class LdBRegMXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const fixedAddr = Instruction.fix(this.argument)
		if ((fixedAddr & 1) == 0) {
			// TODO -->> (short)(context.memory[fixedAddr / 2] >> 8) & 0xFF
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (memory[fixedAddr / 2] >> 8) & 0xFF
		} else {
			// TODO -->> (short)(context.memory[fixedAddr / 2] & 255) & 0xFF
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (memory[fixedAddr / 2] & 255) & 0xFF
		}

		context.pc  += 6
	}
}
