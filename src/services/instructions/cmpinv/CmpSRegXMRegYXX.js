import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `cmp.s ${sdestination}, [${ssource} + 0x%08x]`

export default class CmpSRegXMRegYXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		const result = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  -
			memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2]

		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(
			old_a,
			memory[Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument) / 2],
			result,
			context
		)

		context.pc  += 6
	}
}
