package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class NEG_W_REG extends Instruction {
	public NEG_W_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("neg.w " + this.ssource)
	}
	
	
	exec ({ context, memory }) {
		long res = -context.getReg(this.source) 
		context.getReg(this.source)  = (int)res
		markFlags(res, context.getReg(this.source) , context)
		context.pc  += 2
	}
}
