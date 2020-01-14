package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ALU_S_REGX_MREGY extends Instruction {
	int type
	
	public ALU_S_REGX_MREGY(short[] memory, int address, int source, int destination, int type) {
		super(memory, address, source, destination)
		super.setAssembler(Instruction.getTypeStr(type) + this.sdest + ", [" + this.ssource + "]")
		this.type = type
	}

	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = 0
		switch (type) {
		case ADD_S: res = context.getReg(this.destination)  + getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) break
		case SUB_S: res = context.getReg(this.destination)  - getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) break
		case AND_S: res = context.getReg(this.destination)  & getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) break
		case OR_S : res = context.getReg(this.destination)  | getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) break
		case XOR_S: res = context.getReg(this.destination)  ^ getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) break
		case SHL_S: res = context.getReg(this.destination)  << getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) break
		case SHR_S: res = context.getReg(this.destination)  >>> getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) break
		case MUL_S:	res = context.getReg(this.destination)  * getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) 
					context.h  = (int)((res & 0xffff0000) >> 16)
					break
		case DIV_S: 	res = context.getReg(this.destination)  / getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)) 
					context.h  = (int)(context.getReg(this.destination)  % getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)))
					break
		default: throw new RuntimeException("Unsupported operation type: " + type)
		}
		context.getReg(this.destination)  = (int)res
		markFlags(res, context.getReg(this.destination) , context)
		markOverflow(old_a, getMemContent(context, fix(context.getReg(this.source) ) / 2, fix(this.argument)), context.getReg(this.destination) , context)
		context.pc  += 2
	}
}
