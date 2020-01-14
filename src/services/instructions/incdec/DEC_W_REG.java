package emulator.source.incdec

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class DEC_W_REG extends Instruction {
	public DEC_W_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("dec.w " + this.sdest)
	}
	
	
	exec ({ context, memory }) {
		int old = context.getReg(this.destination) 
		long res = old - 1
		context.getReg(this.destination)  = (int)res
		markFlags(res, (int)res, context)
		markOverflow(old, -1, (int)res, context)

		context.pc  += 2
	}
}
