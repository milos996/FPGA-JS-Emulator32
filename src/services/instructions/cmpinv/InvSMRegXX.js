import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `inv.s [${sdestination} + 0x%08x]`

export default class InvSMRegXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		this.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const result = ~memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2]
		memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2] = result
		Instruction.markFlags(result, result, context)
		context.pc  += 6
	}
}
