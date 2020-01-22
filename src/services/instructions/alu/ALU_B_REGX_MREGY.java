
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`


const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class ALU_B_REGX_MREGY extends Instruction {
	int type
	
	public ALU_B_REGX_MREGY(memory, address, source, destination, type) {
		super(memory, address, source, destination)
		super.setAssembler(Instruction.getTypeStr(type) + this.sdest + ", [" + this.ssource + "]")
		this.type = type
	}

	
	exec ({ context, memory }) {
		int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 
		long res = 0
		
		int fixedAddr = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]] )
		short operand
		if ((fixedAddr & 1) == 0)
			operand = (short)((context.memory[fixedAddr / 2] >> 8) & 0xFF)
		else
			operand = (short)((context.memory[fixedAddr / 2] & 255) & 0xFF)
		
		switch (type) {
		case ADD_B: res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + operand break
		case SUB_B: res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  - operand break
		case AND_B: res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  & operand break
		case OR_B : res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  | operand break
		case XOR_B: res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  ^ operand break
		case SHL_B: res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  << operand break
		case SHR_B: res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  >>> operand break
		case MUL_B:	res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  * operand 
					context.h  = (byte)((res & 0xffffffff00000000L) >> 32)
					break
		case DIV_B: res = (byte)context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  / operand 
					context.h  = (byte)(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % operand)
					break
		default: throw new RuntimeException("Unsupported operation type: " + type)
		}
		
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (int)res
		Instruction.markFlags(res, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		Instruction.markOverflow(old_a, operand, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		context.pc  += 2
	}
}
