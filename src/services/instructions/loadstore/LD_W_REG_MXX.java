
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class LD_W_REG_MXX extends Instruction {
	public LD_W_REG_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("ld.w " + this.sdest + ", [0x%08x]")
	}

	
	exec ({ context, memory }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = getMemContent(context, Instruction.fix(this.argument / 2), Instruction.fix(this.argument))
		context.pc  += 6
	}
}
