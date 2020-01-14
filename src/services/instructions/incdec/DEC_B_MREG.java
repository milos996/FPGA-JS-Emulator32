package emulator.source.incdec

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class DEC_B_MREG extends Instruction {
	public DEC_B_MREG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("dec.b [" + this.sdest + "]")
	}

	
	exec ({ context, memory }) {
		int fixedAddr = fix(context.getReg(this.destination) )
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = operand - 1
		
		short content = context.memory[fixedAddr / 2]
		if ((fixedAddr & 1) == 0) {
			content &= 0x00ff 
			content |= res << 8
		} else {
			content &= 0xff00 
			content |= res & 255
		}

		context.memory[fixedAddr / 2] = content

		markFlags(res, (short)res, context)
		markOverflow(operand, -1, (int)res, context)

		context.pc  += 2
		updateViewer(context, fix(context.getReg(this.destination) ), content)
	}
}
