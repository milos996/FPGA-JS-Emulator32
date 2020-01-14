package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ALU_W_REG_XX extends Instruction {
	int type

	public ALU_W_REG_XX(short[] memory, int address, int source, int destination, int type) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(Instruction.getTypeStr(type) + this.sdest + ", 0x%08x")
		this.type = type
	}

	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = 0
		switch (type) {
		case ADD_W: res = context.getReg(this.destination)  + this.argument break
		case SUB_W: res = context.getReg(this.destination)  - this.argument break
		case AND_W: res = context.getReg(this.destination)  & this.argument break
		case OR_W : res = context.getReg(this.destination)  | this.argument break
		case XOR_W: res = context.getReg(this.destination)  ^ this.argument break
		case SHL_W: res = context.getReg(this.destination)  << this.argument break
		case SHR_W: res = context.getReg(this.destination)  >>> this.argument break
		case MUL_W:	res = context.getReg(this.destination)  * this.argument 
					context.h  = (int)((res & 0xffffffff00000000L) >> 32)
					break
		case DIV_W: res = context.getReg(this.destination)  / this.argument 
					context.h  = (int)(context.getReg(this.destination)  % this.argument)
					break
		default: throw new RuntimeException("Unsupported operation type: " + type)
		}
		context.getReg(this.destination)  = (int)res
		markFlags(res, context.getReg(this.destination) , context)
		markOverflow(old_a, this.argument, context.getReg(this.destination) , context)
		context.pc  += 6
	}
}
