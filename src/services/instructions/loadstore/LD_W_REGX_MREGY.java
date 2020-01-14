package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class LD_W_REGX_MREGY extends Instruction {
	public LD_W_REGX_MREGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("ld.w " + this.sdest + ", [" + this.ssource + "]")
	}

	
	exec ({ context, memory }) {
		context.getReg(this.destination)  = getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(context.getReg(this.source) ))
		context.pc  += 2
	}
}
