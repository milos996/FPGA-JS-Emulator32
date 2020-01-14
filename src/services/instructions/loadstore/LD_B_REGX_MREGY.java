package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class LD_B_REGX_MREGY extends Instruction {
	public LD_B_REGX_MREGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("ld.b " + this.sdest + ", [" + this.ssource + "]")
	}

	
	exec ({ context, memory }) {
		int fixedAddr = fix(context.getReg(this.source) )
		if ((fixedAddr & 1) == 0)
			context.getReg(this.destination)  = (short)(context.memory[fixedAddr / 2] >> 8) & 0xFF
		else
			context.getReg(this.destination)  = (short)(context.memory[fixedAddr / 2] & 255) & 0xFF
		context.pc  += 2
	}
}
