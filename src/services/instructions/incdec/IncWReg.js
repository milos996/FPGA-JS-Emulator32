import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `inc.w  ${sdestination}`

export default class IncWReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const old = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		// TODO: long type -->> long result = old + 1

		const result = old + 1
		//TODO: cast to int type -->>  context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (int)result

		context[REGISTER_VALUE_NAME_MAPPER[this.destination]] = result
		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		Instruction.markOverflow(old, 1, result, context)

		context.pc  += 2
	}
}
