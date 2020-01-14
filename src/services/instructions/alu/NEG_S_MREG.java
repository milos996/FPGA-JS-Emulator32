package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class NEG_S_MREG extends Instruction {
	public NEG_S_MREG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("neg.s [" + this.sdest + "]")
	}

	
	exec ({ context, memory }) {
		long res = -context.memory[fix(context.getReg(this.destination) ) / 2]
		context.memory[fix(context.getReg(this.destination) ) / 2] = (short)res
		markFlags(res, (int)res, context)
		context.pc  += 2
		updateViewer(context, fix(context.getReg(this.destination) ), (int)res)
	}
}
