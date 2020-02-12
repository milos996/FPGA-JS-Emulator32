import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `dec.w ${sdestination}`

export default class DecWReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context }) {
		const old = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		const result = old - 1
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]] = result

		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(old, -1, result, context)

		context.pc  += 2
	}
}
