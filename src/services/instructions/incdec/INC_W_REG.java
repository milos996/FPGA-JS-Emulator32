package emulator.source.incdec

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class INC_W_REG extends Instruction {
	public INC_W_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("inc.w " + this.sdest)
	}
	
	
	exec ({ context, memory }) {
		int old = context.getReg(this.destination) 
		long res = old + 1
		context.getReg(this.destination)  = (int)res
		markFlags(res, context.getReg(this.destination) , context)
		markOverflow(old, 1, (int)res, context)

		context.pc  += 2
	}
}
