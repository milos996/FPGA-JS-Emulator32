
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class LD_REG_MXX extends Instruction {
	public LD_REG_MXX(memory, address, source, 
 destination) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler("ld " + this.sdest + ", [0x%08x]")
	}

	
	exec ({ context, memory }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = context.memory[this.argument / 2] & 0xFFFF
		context.pc  += 6
	}
}
