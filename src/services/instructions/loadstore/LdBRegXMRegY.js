
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.b ${sdestination}, [${ssource}]`

export default class LdBRegXMRegY extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		const fixedAddress = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]])
		if ((fixedAddress & 1) == 0) {
			// TODO - PROBLEM : Moguc problem prilikom izvrsavanja, provjeriti
			// TODO: ->> (short)(context.memory[fixedAddr / 2] >> 8) & 0xFF
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (memory[Math.floor(fixedAddress / 2)] >> 8) & 0xFF
		} else {
			// TODO: ->> (short)(context.memory[fixedAddr / 2] & 255) & 0xFF
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (memory[Math.floor(fixedAddress / 2)] & 255) & 0xFF
		}

		context.pc  += 2
	}
}
