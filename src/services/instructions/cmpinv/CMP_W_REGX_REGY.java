package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class CMP_W_REGX_REGY extends Instruction {
	public CMP_W_REGX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("cmp.w " + this.sdest + ", " + this.ssource)
	}

	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = context.getReg(this.destination)  - context.getReg(this.source) 
		markFlags(res, (int)res, context)
		markOverflow(old_a, context.getReg(this.source) , (int)res, context)
		context.pc  += 2
	}
}
