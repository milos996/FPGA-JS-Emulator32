import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `dec.s [${sdestination}]`

export default class DecSMReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const old = memory[Math.floor(Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2)]
		const result = old - 1
		memory[Math.floor(Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2)] = result

		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(old, -1, result, context)

		context.pc  += 2
	}
}
