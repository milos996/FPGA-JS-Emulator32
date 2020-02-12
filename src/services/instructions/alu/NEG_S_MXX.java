
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`


const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class NEG_S_MXX extends Instruction {
	public NEG_S_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		this.setArgument32()
		super.setAssembler("neg.s [0x%08x]")
	}

	
	exec ({ context, memory }) {
		long res = -context.memory[fix(this.argument) / 2]
		context.memory[fix(this.argument) / 2] = (short)res
		
		Instruction.markFlags(res, (int)res, context)
		context.pc  += 6
		updateViewer(context, Instruction.fix(this.argument), (int)res)
	}
}
