package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class LD_B_REG_MXX extends Instruction {
	public LD_B_REG_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("ld.b " + this.sdest + ", [0x%08x]")
	}

	
	exec ({ context, memory }) {
		int fixedAddr = fix(this.argument)
		if ((fixedAddr & 1) == 0)
			context.getReg(this.destination)  = (short)(context.memory[fixedAddr / 2] >> 8) & 0xFF
		else
			context.getReg(this.destination)  = (short)(context.memory[fixedAddr / 2] & 255) & 0xFF
		context.pc  += 6
	}
}
