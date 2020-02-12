
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `inc.w [ ${sdestination} + 0x%08x]`

export default class IncWMRegXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		this.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const old = Instruction.getMemContent(
			context,
			Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2,
			Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument),
			memory
		)

		const result = old + 1

		Instruction.setMemContent(
			context,
			Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2,
			result,
			Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument)
		)

		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(old, 1, result, context)

		context.pc  += 6
	}
}
