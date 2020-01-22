import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES, INSTRUCTION_TYPES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, [${ssource} + 0x%08x]`

export default class AluWRegXMRegYXX extends Instruction {
	constructor (memory, address, source, destination, type) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(INSTRUCTIONS_TYPES_NAMES[type], this.sdestination, this.ssource))
		this.type = type
	}


	exec ({ context, memory }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]

		let result = 0

		const parameter = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument)

		result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]],
			Instruction.getMemContent(
				context,
				parameter / 2,
				parameter,
				memory
			)
		)

		switch (this.type) {
			case INSTRUCTION_TYPES.MUL_W:
				//TODO: int cast with `L` (long) number -->> context.h  = (int)((res & 0xffffffff00000000L) >> 32)
				context.h  = (result & 0xffffffff00000000) >> 32
				break
			case INSTRUCTION_TYPES.DIV_W:
				//TODO: int cast -->> context.h  = (int)(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  % getMemContent(context, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2, Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument)))
				context.h  = context[REGISTER_VALUE_NAME_MAPPER[this.destination]] %
					Instruction.getMemContent(
						context,
						Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2,
						Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument),
						memory
					)
				break
		}

		//TODO: int cast -->> context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = (int)res
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = result

		Instruction.markFlags(result, context[REGISTER_VALUE_NAME_MAPPER[this.destination]], context)
		Instruction.markOverflow(
			old_a,
			Instruction.getMemContent(
				context,
				Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2,
				Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument),
				memory
			),
			context[REGISTER_VALUE_NAME_MAPPER[this.destination]],
			context
		)

		context.pc  += 6
	}
}
