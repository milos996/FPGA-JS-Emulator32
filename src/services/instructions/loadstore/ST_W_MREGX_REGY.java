
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class ST_W_MREGX_REGY extends Instruction {
	public ST_W_MREGX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("st.w [" + this.sdest + "], " + this.ssource)
	}

	
	exec ({ context, memory }) {
		setMemContent(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ) / 2, context[REGISTER_VALUE_NAME_MAPPER[this.source]] , Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ))
		
		context.pc  += 2
		updateViewer32(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]] ), context[REGISTER_VALUE_NAME_MAPPER[this.source]] )
	}
}
