package emulator.source.cmpinv

import emulator.engine.CpuContext
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class INV_S_MREG_XX extends Instruction {
	public INV_S_MREG_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		this.setArgument32()
		super.setAssembler("inv.s [" + this.sdest + " + 0x%08x]")
	}

	
	exec ({ context, memory }) {
		long res = ~context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2]
		context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2] = (short)res
		markFlags(res, (int)res, context)
		context.pc  += 6
		updateViewer(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument), (int)res)
	}
}
