import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `mov.b ${sdestination}, 0x%02x`

export default class MovBRegXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument8(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		// TODO: (byte) this.argument <<--- Need conversion from int to byte -127 <-> 127
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = this.argument
		context.pc += 4
	}
}
