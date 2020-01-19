package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class CMP_W_REGX_MREGY_XX extends Instruction {
	public CMP_W_REGX_MREGY_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("cmp.w " + this.sdest + ", [" + this.ssource + " + 0x%08x]")
	}
	
	
	exec ({ context, memory }) {
		int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 
		long res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  - getMemContent(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument))
		markFlags(res, (int)res, context)
		markOverflow(old_a, getMemContent(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument)), (int)res, context)
		context.pc  += 6
	}
}
