import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `inv.w ${sdestination}`

export default class InvWReg extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const result = ~context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = result
		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		context.pc  += 2
	}
}
