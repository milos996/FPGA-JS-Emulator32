
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class DEC_REG extends Instruction {
	public DEC_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("dec " + this.sdest)
	}
	
	
	exec ({ context, memory }) {
		int old = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 
		long res = old - 1
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (int)res
		Instruction.markFlags(res, (int)res, context)
		Instruction.markOverflow(old, -1, (int)res, context)

		context.pc  += 2
	}
}
