
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class ST_W_MREGX_XX_REGY extends Instruction {
	public ST_W_MREGX_XX_REGY(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler("st.w [" + this.sdest + " + 0x%08x], " + this.ssource)
	}
	
	exec ({ context, memory }) {
		setMemContent(context, (fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]   +  this.argument)) / 2, context[REGISTER_VALUE_NAME_MAPPER[this.source]] , Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]   +  this.argument))

		context.pc  += 6
		updateViewer32(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument), context[REGISTER_VALUE_NAME_MAPPER[this.source]] )
	}
}
