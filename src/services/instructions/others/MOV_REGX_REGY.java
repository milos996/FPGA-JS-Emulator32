package emulator.source.nopmovinpushrethaltswap

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class MOV_REGX_REGY extends Instruction {
	public MOV_REGX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("mov " + this.sdest + ", " + this.ssource)
	}

	
	exec ({ context, memory }) {
		context.getReg(this.destination)  = context.getReg(this.source) 
		context.pc  += 2
	}
}
