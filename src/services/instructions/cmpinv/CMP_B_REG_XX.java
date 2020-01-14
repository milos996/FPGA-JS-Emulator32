package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class CMP_B_REG_XX extends Instruction {
	public CMP_B_REG_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument8()
		super.setAssembler("cmp.b " + this.sdest + ", 0x%02x")
	}

	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = context.getReg(this.destination)  - this.argument
		markFlags(res,(int)res, context)
		markOverflow(old_a, this.argument, (int)res, context)
		context.pc  += 4
	}
}
