package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class CMP_B_REG_MXX extends Instruction {
	public CMP_B_REG_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("cmp" + this.sdest + ", [0x%08x]")
	}
	
	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 

		int fixedAddr = fix(this.argument)
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = context.getReg(this.destination)   - operand
		
		markFlags(res, (int)res, context)
		markOverflow(old_a, context.memory[fix(this.argument) / 2], (int)res, context)
		context.pc  += 6
	}
}
