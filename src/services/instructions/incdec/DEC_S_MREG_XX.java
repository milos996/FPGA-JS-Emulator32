package emulator.source.incdec

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class DEC_S_MREG_XX extends Instruction {
	public DEC_S_MREG_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		this.setArgument32()
		super.setAssembler("dec.s [" + this.sdest + " + 0x%08x]")
	}

	
	exec ({ context, memory }) {
		int old = context.memory[fix(context.getReg(this.destination)  + this.argument) / 2]
		long res = old - 1
		context.memory[fix(context.getReg(this.destination)  + this.argument) / 2] = (short)res
		markFlags(res, (int)res, context)
		markOverflow(old, -1, (int)res, context)

		context.pc  += 6
		updateViewer(context, fix(context.getReg(this.destination)  + this.argument), (int)res)
	}
}
