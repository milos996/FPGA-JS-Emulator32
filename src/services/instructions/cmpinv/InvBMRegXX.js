import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `inv.b [${sdestination} + %s]`

export default class InvBMRegXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		this.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const fixedAddress = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument)
		const operand = (fixedAddress & 1 == 0) ?
			(memory[Math.floor(fixedAddress / 2)] >> 8) & 0xFF :
			(memory[Math.floor(fixedAddress / 2)] & 255) & 0xFF

		const result = ~operand

		let content = memory[Math.floor(fixedAddress / 2)]

		if ((fixedAddress & 1) == 0) {
			content &= 0x00ff
			content |= result << 8
		} else {
			content &= 0xff00
			content |= result & 255
		}

		memory[Math.floor(fixedAddress / 2)] = content

		Instruction.markFlags(result, result, context)
		context.pc  += 6

		return {
			address:fixedAddress,
			content
		}
	}
}
