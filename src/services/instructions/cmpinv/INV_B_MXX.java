
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class INV_B_MXX extends Instruction {
	public INV_B_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		this.setArgument32()
		super.setAssembler("inv.b [0x%08x]")
	}

	
	exec ({ context, memory }) {
		int fixedAddr = Instruction.fix(this.argument)
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = ~operand

		short content = context.memory[fixedAddr / 2]
		if ((fixedAddr & 1) == 0) {
			content &= 0x00ff 
			content |= res << 8
		} else {
			content &= 0xff00 
			content |= res & 255
		}

		context.memory[fixedAddr / 2] = content

		Instruction.markFlags(res, (int)res, context)
		context.pc  += 6
		updateViewer(context, Instruction.fix(this.argument), content)
	}
}
