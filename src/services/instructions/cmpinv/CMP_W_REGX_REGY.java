package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class CMP_W_REGX_REGY extends Instruction {
	public CMP_W_REGX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("cmp.w " + this.sdest + ", " + this.ssource)
	}

	
	exec ({ context, memory }) {
		int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 
		long res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  - context[REGISTER_VALUE_NAME_MAPPER[this.source]] 
		markFlags(res, (int)res, context)
		markOverflow(old_a, context[REGISTER_VALUE_NAME_MAPPER[this.source]] , (int)res, context)
		context.pc  += 2
	}
}
