
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class ST_W_MXX_REG extends Instruction {
	public ST_W_MXX_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("st.w [0x%08x]" + ", " + this.sdest)
	}

	
	exec ({ context, memory }) {
		setMemContent(context, Instruction.fix(this.argument) / 2, context[REGISTER_VALUE_NAME_MAPPER[this.source]] , Instruction.fix(this.argument))
		
		context.pc  += 6
		updateViewer32(context, Instruction.fix(this.argument), context[REGISTER_VALUE_NAME_MAPPER[this.destination]] )
	}
}
