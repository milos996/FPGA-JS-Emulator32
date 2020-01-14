package emulator.source.alu

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class ALU_B_REG_MXX extends Instruction {
	int type

	public ALU_B_REG_MXX(short[] memory, int address, int source, int destination, int type) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(Instruction.getTypeStr(type) + this.sdest + ", [0x%08x]")
		this.type = type
	}
	
	
	exec ({ context, memory }) {
		int old_a = context.getReg(this.destination) 
		long res = 0

		int fixedAddr = fix(this.argument)
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)
		
		switch (type) {
		case ADD_B: res = (byte)context.getReg(this.destination)  + operand break
		case SUB_B: res = (byte)context.getReg(this.destination)  - operand break
		case AND_B: res = (byte)context.getReg(this.destination)  & operand break
		case OR_B : res = (byte)context.getReg(this.destination)  | operand break
		case XOR_B: res = (byte)context.getReg(this.destination)  ^ operand break
		case SHL_B: res = (byte)context.getReg(this.destination)  << operand break
		case SHR_B: res = (byte)context.getReg(this.destination)  >>> operand break
		case MUL_B:	res = (byte)context.getReg(this.destination)  * operand 
					context.h  = (byte)((res & 0xffffffff00000000L) >> 32)
					break
		case DIV_B: res = (byte)context.getReg(this.destination)  / operand 
					context.h  = (byte)(context.getReg(this.destination)  % operand)
					break
		default: throw new RuntimeException("Unsupported operation type: " + type)
		}
		
		context.getReg(this.destination)  = (int)res
		markFlags(res, context.getReg(this.destination) , context)
		markOverflow(old_a, operand, context.getReg(this.destination) , context)
		context.pc  += 6
	}
}
