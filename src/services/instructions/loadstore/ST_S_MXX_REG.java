package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ST_S_MXX_REG extends Instruction {
	public ST_S_MXX_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("st.s [0x%08x]" + ", " + this.ssource)
	}

	
	exec ({ context, memory }) {
		setMemContent(context, fix(this.argument) / 2, (short) context.getReg(this.source) , fix(this.argument))
		
		context.pc  += 6
		updateViewer(context, fix(this.argument), context.getReg(this.source) )
	}
}
