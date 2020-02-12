
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class INC_MREG_XX extends Instruction {
	public INC_MREG_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		this.setArgument32()
		super.setAssembler("inc [" + this.sdest + " + 0x%08x]")
	}

	
	exec ({ context, memory }) {
		int old = context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2]
		long res = old + 1
		context.memory[fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2] = (short)res
		Instruction.markFlags(res, (int)res, context)
		Instruction.markOverflow(old, 1, (int)res, context)

		context.pc  += 6
		updateViewer(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument), (int)res)
	}
}
