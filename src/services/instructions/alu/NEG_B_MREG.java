
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`


const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class NEG_B_MREG extends Instruction {
	public NEG_B_MREG(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler("neg.b [" + this.sdest + "]")
	}

	
	exec ({ context, memory }) {
		int fixedAddr = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] )
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)		
		
		long res = -operand

		short content = (short)context.memory[fixedAddr / 2]
		if ((fixedAddr & 1) == 0) {
			content &= 0x00ff 
			content |= res << 8
		} else {
			content &= 0xff00 
			content |= res & 255
		}

		context.memory[fixedAddr / 2] = content

		Instruction.markFlags(res, (int)res, context)
		context.pc  += 2
		updateViewer(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ), content)
	}
}
