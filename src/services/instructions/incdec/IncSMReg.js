
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `inc.s [${sdestination}]`

export default class IncSMReg extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const old = memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2]
		const result = old + 1
		memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2] = result
		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(old, 1, result, context)

		context.pc  += 2
	}
}