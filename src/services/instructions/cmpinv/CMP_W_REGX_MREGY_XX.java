package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class CMP_W_REGX_MREGY_XX extends Instruction {
	public CMP_W_REGX_MREGY_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("cmp.w " + this.sdest + ", [" + this.ssource + " + 0x%08x]")
	}
	
	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = context.getReg(this.destination)  - getMemContent(context, fix(context.getReg(this.source)  + this.argument) / 2, fix(context.getReg(this.source)  + this.argument))
		markFlags(res, (int)res, context)
		markOverflow(old_a, getMemContent(context, fix(context.getReg(this.source)  + this.argument) / 2, fix(context.getReg(this.source)  + this.argument)), (int)res, context)
		context.pc  += 6
	}
}
