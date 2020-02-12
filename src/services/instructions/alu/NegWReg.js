
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = ( ssource ) => `neg.w ${ssource}`

export default class NegWReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.ssource))
	}


	exec ({ context }) {
		// TODO: long type -->> long res = -context[REGISTER_VALUE_NAME_MAPPER[this.source]]
		const result = -context[REGISTER_VALUE_NAME_MAPPER[this.source]]

		//TODO: cast to int type context[REGISTER_VALUE_NAME_MAPPER[this.source]]  = (int)res
		context[REGISTER_VALUE_NAME_MAPPER[this.source]]  = result

		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.source]] , context)
		context.pc  += 2
	}
}
