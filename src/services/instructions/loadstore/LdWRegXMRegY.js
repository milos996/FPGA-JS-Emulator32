import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.w ${sdestination}, [${ssource}]`

export default class LdWRegXMRegY extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  =
		  Instruction.getMemContent(
				context,
				Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] ) / 2,
				Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] ),
				memory
			)
		context.pc  += 2
	}
}
