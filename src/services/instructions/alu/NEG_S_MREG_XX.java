
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`


const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class NEG_S_MREG_XX extends Instruction {
	public NEG_S_MREG_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		this.setArgument32()
		super.setAssembler("neg.s [" + this.sdest + " + 0x%08x]")
	}

	
	exec ({ context, memory }) {
		long res = -context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2]
		context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2] = (short)res
		markFlags(res, (int)res, context)
		context.pc  += 6
		updateViewer(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument), (int)res)
	}
}
