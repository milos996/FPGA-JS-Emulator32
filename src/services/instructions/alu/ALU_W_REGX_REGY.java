package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ALU_W_REGX_REGY extends Instruction {
	int type
	
	public ALU_W_REGX_REGY(short[] memory, int address, int source, int destination, int type) {
		super(memory, address, source, destination)
		super.setAssembler(Instruction.getTypeStr(type) + this.sdest + ", " + this.ssource)
		this.type = type
	}

	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = 0
		switch (type) {
		case ADD_W: res = context.getReg(this.destination)  + context.getReg(this.source)  break
		case SUB_W: res = context.getReg(this.destination)  - context.getReg(this.source)  break
		case AND_W: res = context.getReg(this.destination)  & context.getReg(this.source)  break
		case OR_W : res = context.getReg(this.destination)  | context.getReg(this.source)  break
		case XOR_W: res = context.getReg(this.destination)  ^ context.getReg(this.source)  break
		case SHL_W: res = context.getReg(this.destination)  << context.getReg(this.source)  break
		case SHR_W: res = context.getReg(this.destination)  >>> context.getReg(this.source)  break
		case MUL_W:	res = context.getReg(this.destination)  * context.getReg(this.source)  
					context.h  = (short)((res & 0xffff0000) >> 16)
					break
		case DIV_W: 	res = context.getReg(this.destination)  / context.getReg(this.source)  
					context.h  = (short)(context.getReg(this.destination)  % context.getReg(this.source) )
					break
		default: throw new RuntimeException("Unsupported operation type: " + type)
		}
		context.getReg(this.destination)  = (int)res
		markFlags(res, context.getReg(this.destination) , context)
		markOverflow(old_a, context.getReg(this.source) , context.getReg(this.destination) , context)
		context.pc  += 2
	}
}
