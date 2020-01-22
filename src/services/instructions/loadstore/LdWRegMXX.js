import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `ld.w ${sdestination}, [0x%08x]`

export default class LdWRegMXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  =
		  Instruction.getMemContent(
				context,
			  Instruction.fix(this.argument / 2),
				Instruction.fix(this.argument)
			)

		context.pc  += 6
	}
}
