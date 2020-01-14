package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class LD_REG_MXX extends Instruction {
	public LD_REG_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("ld " + this.sdest + ", [0x%08x]")
	}

	
	exec ({ context, memory }) {
		context.getReg(this.destination)  = context.memory[this.argument / 2] & 0xFFFF
		context.pc  += 6
	}
}
