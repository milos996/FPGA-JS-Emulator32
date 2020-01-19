
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class LD_W_REGX_MREGY extends Instruction {
	public LD_W_REGX_MREGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("ld.w " + this.sdest + ", [" + this.ssource + "]")
	}

	
	exec ({ context, memory }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = getMemContent(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] ) / 2, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] ))
		context.pc  += 2
	}
}
