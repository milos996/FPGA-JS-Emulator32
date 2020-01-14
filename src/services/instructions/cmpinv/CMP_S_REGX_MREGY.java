package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class CMP_S_REGX_MREGY extends Instruction {
	public CMP_S_REGX_MREGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("cmp.s " + this.sdest + ", [" + this.ssource + "]")
	}

	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = context.getReg(this.destination)  - context.memory[fix(context.getReg(this.source) ) / 2]
		markFlags(res, (int)res, context)
		markOverflow(old_a, context.memory[fix(context.getReg(this.source) ) / 2], (int)res, context)
		context.pc  += 2
	}
}
