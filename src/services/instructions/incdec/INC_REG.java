package emulator.source.incdec

import emulator.engine.CpuContext
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class INC_REG extends Instruction {
	public INC_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("inc " + this.sdest)
	}
	
	
	exec ({ context, memory }) {
		int old = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 
		long res = old + 1
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (int)res
		markFlags(res, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		markOverflow(old, 1, (int)res, context)

		context.pc  += 2
	}
}
