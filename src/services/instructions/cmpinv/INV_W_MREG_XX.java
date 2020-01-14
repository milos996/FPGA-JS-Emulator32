package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class INV_W_MREG_XX extends Instruction {
	public INV_W_MREG_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		this.setArgument32()
		super.setAssembler("inv.w [" + this.sdest + " + 0x%08x]")
	}

	
	exec ({ context, memory }) {
		long res = ~getMemContent(context, fix(context.getReg(this.destination)  + this.argument) / 2, fix(context.getReg(this.destination)  + this.argument))
		setMemContent(context, fix(context.getReg(this.destination)  + this.argument) / 2, (int)res, fix(context.getReg(this.destination)  + this.argument))
		markFlags(res, (int)res, context)
		context.pc  += 6
		updateViewer32(context, fix(context.getReg(this.destination)  + this.argument), (int)res)
	}
}
