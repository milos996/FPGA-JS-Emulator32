
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`


const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `ld.s ${sdestination}, [${ssource}]`

export default class ALU_S_REG_MXX extends Instruction {
	int type

	public ALU_S_REG_MXX(memory, address, source, destination, type) {
		super(memory, address, source, destination)
		super.setArgument()
		super.setAssembler(Instruction.getTypeStr(type) + this.sdest + ", [0x%08x]")
		this.type = type
	}
	
	
	exec ({ context, memory }) {
		int old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] 
		long res = 0
		switch (type) {
		case ADD_S: res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) break
		case SUB_S: res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  - getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) break
		case AND_S: res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  & getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) break
		case OR_S : res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  | getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) break
		case XOR_S: res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  ^ getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) break
		case SHL_S: res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  << getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) break
		case SHR_S: res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  >>> getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) break
		case MUL_S:	res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  * getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) 
					context.h  = (int)((res & 0xffffffff00000000L) >> 32)
					break
		case DIV_S: 	res = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  / getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)) 
					context.h  = (context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)))
					break
		default: throw new RuntimeException("Unsupported operation type: " + type)
		}
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (int)res
		markFlags(res, context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		markOverflow(old_a, getMemContent(context, Instruction.fix(this.argument) / 2, Instruction.fix(this.argument)), context[REGISTER_VALUE_NAME_MAPPER[this.destination]] , context)
		context.pc  += 6
	}
}
