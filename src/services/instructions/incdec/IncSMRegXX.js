import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `inc.s [${sdestination} + 0x%08x]`

export default class IncSMRegXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		this.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const old = memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2]
		const result = old + 1
		memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2] = result
		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(old, 1, result, context)

		context.pc  += 6
	}
}
