import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `cmp.b ${sdestination}, [${ssource} + 0x%08x]`

export default class CMP_B_REGX_MREGY_XX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}


	exec ({ context, memory }) {
		const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]

		const fixedAddress = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.source]]  + this.argument)

		const operand = (fixedAddress & 1 == 0) ?
			(memory[fixedAddress / 2] >> 8) & 0xFF :
			(memory[fixedAddress / 2] & 255) & 0xFF

		const result = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]   - operand

		Instruction.markFlags(result, result, context)
		Instruction.markOverflow(old_a, operand, result, context)

		context.pc  += 6
	}
}
