
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class LD_REGX_MREGY_XX extends Instruction {
	public LD_REGX_MREGY_XX(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("ld " + this.sdest + ", [" + this.ssource + " + 0x%08x]")
	}
	
	
	exec ({ context, memory }) {
		int address = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument)
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = context.memory[address / 2] & 0xFFFF
		context.pc  += 6 
	}
}
