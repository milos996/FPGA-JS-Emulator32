package emulator.source.nopmovinpushrethaltswap

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class MOV_REG_XX extends Instruction {
	public MOV_REG_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument()
		super.setAssembler("mov " + this.sdest + ", 0x%04x")
	}

	
	exec ({ context, memory }) {
		context.getReg(this.destination)  = this.argument
		context.pc  += 4
	}
}
