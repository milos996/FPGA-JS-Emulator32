package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ST_W_MREGX_XX_REGY extends Instruction {
	public ST_W_MREGX_XX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("st.w [" + this.sdest + " + 0x%08x], " + this.ssource)
	}
	
	exec ({ context, memory }) {
		setMemContent(context, (fix(context.getReg(this.destination)   +  this.argument)) / 2, context.getReg(this.source) , fix(context.getReg(this.destination)   +  this.argument))

		context.pc  += 6
		updateViewer32(context, fix(context.getReg(this.destination)  + this.argument), context.getReg(this.source) )
	}
}
