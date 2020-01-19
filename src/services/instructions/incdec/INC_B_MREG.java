package emulator.source.incdec

import emulator.engine.CpuContext
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class INC_B_MREG extends Instruction {
	public INC_B_MREG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("inc.b [" + this.sdest + "]")
	}

	
	exec ({ context, memory }) {
		int fixedAddr = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] )
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = operand + 1

		short content = context.memory[fixedAddr / 2]
		if ((fixedAddr & 1) == 0) {
			content &= 0x00ff 
			content |= res << 8
		} else {
			content &= 0xff00 
			content |= res & 255
		}

		context.memory[fixedAddr / 2] = content

		markFlags(res, operand, context)
		markOverflow(operand, 1, (int)res, context)

		context.pc  += 2
		updateViewer(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ), content)
	}
}
