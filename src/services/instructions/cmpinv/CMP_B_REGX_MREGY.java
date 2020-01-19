package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class CMP_B_REGX_MREGY extends Instruction {
	public CMP_B_REGX_MREGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("cmp " + this.sdest + ", [" + this.ssource + "]")
	}

	
	exec ({ context, memory }) {
		int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 

		int fixedAddr = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] )
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]   - operand
		
		markFlags(res, (short)res, context)
		markOverflow(old_a, context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] ) / 2], (int)res, context)
		context.pc  += 2
	}
}
