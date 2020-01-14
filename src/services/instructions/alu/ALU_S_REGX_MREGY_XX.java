package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ALU_S_REGX_MREGY_XX extends Instruction {
	int type
	
	public ALU_S_REGX_MREGY_XX(short[] memory, int address, int source, int destination, int type) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(Instruction.getTypeStr(type) + this.sdest + ", [" + this.ssource + " + 0x%08x]")
		this.type = type
	}
	
	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = 0
		switch (type) {
		case ADD_S: res = context.getReg(this.destination)  + context.memory[fix(context.getReg(this.source)  + this.argument) / 2] break
		case SUB_S: res = context.getReg(this.destination)  - context.memory[fix(context.getReg(this.source)  + this.argument) / 2] break
		case AND_S: res = context.getReg(this.destination)  & context.memory[fix(context.getReg(this.source)  + this.argument) / 2] break
		case OR_S : res = context.getReg(this.destination)  | context.memory[fix(context.getReg(this.source)  + this.argument) / 2] break
		case XOR_S: res = context.getReg(this.destination)  ^ context.memory[fix(context.getReg(this.source)  + this.argument) / 2] break
		case SHL_S: res = context.getReg(this.destination)  << context.memory[fix(context.getReg(this.source)  + this.argument) / 2] break
		case SHR_S: res = context.getReg(this.destination)  >>> context.memory[fix(context.getReg(this.source)  + this.argument) / 2] break
		case MUL_S:	res = context.getReg(this.destination)  * context.memory[fix(context.getReg(this.source)  + this.argument) / 2] 
					context.h  = (int)((res & 0xffffffff00000000L) >> 32)
					break
		case DIV_S: 	res = context.getReg(this.destination)  / context.memory[fix(context.getReg(this.source)  + this.argument) / 2] 
					context.h  = context.getReg(this.destination)  % context.memory[fix(context.getReg(this.source)  + this.argument) / 2]
					break
		default: throw new RuntimeException("Unsupported operation type: " + type)
		}
		context.getReg(this.destination)  = (int)res
		markFlags(res, context.getReg(this.destination) , context)
		markOverflow(old_a, context.memory[fix(context.getReg(this.source)  + this.argument) / 2], context.getReg(this.destination) , context)
		context.pc  += 6
	}
}
