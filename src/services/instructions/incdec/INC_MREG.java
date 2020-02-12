
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class INC_MREG extends Instruction {
	public INC_MREG(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler("inc [" + this.sdest + "]")
	}

	
	exec ({ context, memory }) {
		int old = context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2]
		long res = old + 1
		context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2] = (short)res
		Instruction.markFlags(res, (int)res, context)
		Instruction.markOverflow(old, 1, (int)res, context)

		context.pc  += 2
		updateViewer(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ), (int)res)
	}
}
