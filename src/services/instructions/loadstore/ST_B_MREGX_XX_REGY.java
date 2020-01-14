package emulator.source.loadstore

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ST_B_MREGX_XX_REGY extends Instruction {
	public ST_B_MREGX_XX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("st.b [" + this.sdest + " + 0x%08x], " + this.ssource)
	}
	
	exec ({ context, memory }) {
		
		int fixedAddr = fix(context.getReg(this.destination)  + this.argument)
		short content = context.memory[fixedAddr / 2]
		if ((fixedAddr & 1) == 0) {
			content &= 0x00ff 
			content |= context.getReg(this.source)  << 8
		} else {
			content &= 0xff00 
			content |= context.getReg(this.source)  & 255
		}
		context.memory[fixedAddr / 2] = content
		
		context.pc  += 6
		updateViewer(context, fix(context.getReg(this.destination)  + this.argument), content)
	}
}
