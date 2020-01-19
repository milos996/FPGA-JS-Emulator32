package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class CMP_S_REG_MXX extends Instruction {
	public CMP_S_REG_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("cmp.s " + this.sdest + ", [0x%08x]")
	}
	
	
	exec ({ context, memory }) {
		int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 
		long res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  - context.memory[fix(this.argument) / 2]
		markFlags(res, (short)res, context)
		markOverflow(old_a, context.memory[fix(this.argument) / 2], (int)res, context)
		context.pc  += 6
	}
}
