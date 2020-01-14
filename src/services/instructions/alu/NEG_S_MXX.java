package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class NEG_S_MXX extends Instruction {
	public NEG_S_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		this.setArgument32()
		super.setAssembler("neg.s [0x%08x]")
	}

	
	exec ({ context, memory }) {
		long res = -context.memory[fix(this.argument) / 2]
		context.memory[fix(this.argument) / 2] = (short)res
		
		markFlags(res, (int)res, context)
		context.pc  += 6
		updateViewer(context, fix(this.argument), (int)res)
	}
}
