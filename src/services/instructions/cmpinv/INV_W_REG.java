package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class INV_W_REG extends Instruction {
	public INV_W_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("inv.w " + this.sdest)
	}
	
	
	exec ({ context, memory }) {
		long res = ~context.getReg(this.destination) 
		context.getReg(this.destination)  = (int)res
		markFlags(res, context.getReg(this.destination) , context)
		context.pc  += 2
	}
}
