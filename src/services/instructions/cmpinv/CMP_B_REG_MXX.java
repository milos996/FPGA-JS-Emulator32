
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class CMP_B_REG_MXX extends Instruction {
	public CMP_B_REG_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler("cmp" + this.sdest + ", [0x%08x]")
	}
	
	
	exec ({ context, memory }) {
		int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 

		int fixedAddr = Instruction.fix(this.argument)
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]   - operand
		
		Instruction.markFlags(res, (int)res, context)
		Instruction.markOverflow(old_a, context.memory[fix(this.argument) / 2], (int)res, context)
		context.pc  += 6
	}
}
