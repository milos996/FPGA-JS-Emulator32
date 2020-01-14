package emulator.source.incdec

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class DEC_MREG extends Instruction {
	public DEC_MREG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("dec [" + this.sdest + "]")
	}

	
	exec ({ context, memory }) {
		int old = context.memory[fix(context.getReg(this.destination) ) / 2]
		long res = old - 1
		context.memory[fix(context.getReg(this.destination) ) / 2] = (short)res
		markFlags(res, (int)res, context)
		markOverflow(old, -1, (int)res, context)

		context.pc  += 2
		updateViewer(context, fix(context.getReg(this.destination) ), (int)res)
	}
}
