
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`


const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class NEG_W_REG extends Instruction {
	public NEG_W_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("neg.w " + this.ssource)
	}
	
	
	exec ({ context, memory }) {
		long res = -context[REGISTER_VALUE_NAME_MAPPER[this.source]] 
		context[REGISTER_VALUE_NAME_MAPPER[this.source]]  = (int)res
		markFlags(res, context[REGISTER_VALUE_NAME_MAPPER[this.source]] , context)
		context.pc  += 2
	}
}
