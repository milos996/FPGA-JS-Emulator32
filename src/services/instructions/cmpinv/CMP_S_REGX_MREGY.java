
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class CMP_S_REGX_MREGY extends Instruction {
	public CMP_S_REGX_MREGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler("cmp.s " + this.sdest + ", [" + this.ssource + "]")
	}

	
	exec ({ context, memory }) {
		int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 
		long res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  - context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] ) / 2]
		Instruction.markFlags(res, (int)res, context)
		Instruction.markOverflow(old_a, context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] ) / 2], (int)res, context)
		context.pc  += 2
	}
}
