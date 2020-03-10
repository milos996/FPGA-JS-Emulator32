import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `cmp.w ${sdestination}, [${ssource} + %s]`

export default class CmpWRegXMRegYXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		const result = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  -
		  Instruction.getMemContent(
				context,
				Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2,
				Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument),
				memory
			)

		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(
			old_a,
			Instruction.getMemContent(
				context,
				Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2,
				Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument),
				memory
			),
			result,
			context
		)

		context.pc  += 6
	}
}
