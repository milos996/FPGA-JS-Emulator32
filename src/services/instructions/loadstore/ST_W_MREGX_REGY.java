package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ST_W_MREGX_REGY extends Instruction {
	public ST_W_MREGX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("st.w [" + this.sdest + "], " + this.ssource)
	}

	
	exec ({ context, memory }) {
		setMemContent(context, fix(context.getReg(this.destination) ) / 2, context.getReg(this.source) , fix(context.getReg(this.destination) ))
		
		context.pc  += 2
		updateViewer32(context, fix(context.getReg(this.destination) ), context.getReg(this.source) )
	}
}
