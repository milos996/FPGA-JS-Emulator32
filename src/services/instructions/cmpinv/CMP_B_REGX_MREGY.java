package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class CMP_B_REGX_MREGY extends Instruction {
	public CMP_B_REGX_MREGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("cmp " + this.sdest + ", [" + this.ssource + "]")
	}

	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 

		int fixedAddr = fix(context.getReg(this.source) )
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = context.getReg(this.destination)   - operand
		
		markFlags(res, (short)res, context)
		markOverflow(old_a, context.memory[fix(context.getReg(this.source) ) / 2], (int)res, context)
		context.pc  += 2
	}
}
