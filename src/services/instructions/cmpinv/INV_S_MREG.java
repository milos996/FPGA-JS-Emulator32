
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class INV_S_MREG extends Instruction {
	public INV_S_MREG(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler("inv.s [" + this.sdest + "]")
	}

	
	exec ({ context, memory }) {
		long res = ~context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2]
		context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2] = (short)res
		Instruction.markFlags(res, (int)res, context)
		context.pc  += 2
		updateViewer(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ), (int)res)
	}
}
