
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`


const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class NEG_S_MREG extends Instruction {
	public NEG_S_MREG(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler("neg.s [" + this.sdest + "]")
	}

	
	exec ({ context, memory }) {
		long res = -context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2]
		context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2] = (short)res
		Instruction.markFlags(res, (int)res, context)
		context.pc  += 2
		updateViewer(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ), (int)res)
	}
}
