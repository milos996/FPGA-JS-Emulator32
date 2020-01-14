package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class LD_S_REGX_MREGY extends Instruction {
	public LD_S_REGX_MREGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("ld.s " + this.sdest + ", [" + this.ssource + "]")
	}

	
	exec ({ context, memory }) {
		context.getReg(this.destination)  = context.memory[context.getReg(this.source)  / 2] & 0xFFFF
		context.pc  += 2
	}
}
