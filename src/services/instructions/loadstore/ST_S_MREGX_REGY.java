package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ST_S_MREGX_REGY extends Instruction {
	public ST_S_MREGX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("st.s [" + this.sdest + "], " + this.ssource)
	}

	
	exec ({ context, memory }) {
		context.memory[fix(context.getReg(this.destination) ) / 2] = (short) context.getReg(this.source) 
		
		context.pc  += 2
		updateViewer(context, fix(context.getReg(this.destination) ), context.getReg(this.source) )
	}
}
