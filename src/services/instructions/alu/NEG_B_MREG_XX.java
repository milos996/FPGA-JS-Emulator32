package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class NEG_B_MREG_XX extends Instruction {
	public NEG_B_MREG_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		this.setArgument32()
		super.setAssembler("neg.b [" + this.sdest + " + 0x%08x]")
	}

	
	exec ({ context, memory }) {
		int fixedAddr = fix(context.getReg(this.destination)  + this.argument)
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = -operand

		short content = (short) context.memory[fixedAddr / 2]
		if ((fixedAddr & 1) == 0) {
			content &= 0x00ff 
			content |= res << 8
		} else {
			content &= 0xff00 
			content |= res & 255
		}

		context.memory[fixedAddr / 2] = content
		
		markFlags(res, (int)res, context)
		context.pc  += 6
		updateViewer(context, fix(context.getReg(this.destination)  + this.argument), content)
	}
}
