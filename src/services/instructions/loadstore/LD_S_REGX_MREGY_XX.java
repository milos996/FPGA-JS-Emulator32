package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class LD_S_REGX_MREGY_XX extends Instruction {
	public LD_S_REGX_MREGY_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("ld.s " + this.sdest + ", [" + this.ssource + " + 0x%08x]")
	}
	
	
	exec ({ context, memory }) {
		int address = fix(context.getReg(this.source)  + this.argument)
		context.getReg(this.destination)  = context.memory[address / 2] & 0xFFFF
		context.pc  += 6 
	}
}
