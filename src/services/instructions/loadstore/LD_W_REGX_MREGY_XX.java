package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class LD_W_REGX_MREGY_XX extends Instruction {
	public LD_W_REGX_MREGY_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("ld.w " + this.sdest + ", [" + this.ssource + " + 0x%08x]")
	}

	
	exec ({ context, memory }) {
		context.getReg(this.destination)  = getMemContent(context, fix(context.getReg(this.source)  + this.argument) / 2, fix(context.getReg(this.source)  + this.argument))
		context.pc  += 6
	}
}
