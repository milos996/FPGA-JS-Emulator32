
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class DEC_S_MXX extends Instruction {
	public DEC_S_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		this.setArgument32()
		super.setAssembler("dec.s [0x%08x]")
	}

	
	exec ({ context, memory }) {
		int old = context.memory[fix(this.argument) / 2]
		long res = old - 1
		context.memory[fix(this.argument) / 2] = (short)res
		Instruction.markFlags(res, (int)res, context)
		Instruction.markOverflow(old, -1, (int)res, context)

		context.pc  += 6
		updateViewer(context, Instruction.fix(this.argument), (int)res)
	}
}
