
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = ( sdestination ) => `neg.b [ ${sdestination} + 0x%08x]`

export default class NEG_B_MREG_XX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		this.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const fixedAddress = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument)
		/**
		 * TODO:  short cast
		 *
		 * 	let operand = fixedAddress & 1 == 0 ?
		 * 	(short)((context.memory[fixedAddress / 2] >> 8) & 0xFF) :
		 * 	(short)((context.memory[fixedAddress / 2] & 255) & 0xFF)
		 */

		const operand = fixedAddress & 1 == 0 ?
			(memory[fixedAddress / 2] >> 8) & 0xFF :
			(memory[fixedAddress / 2] & 255) & 0xFF

		let result = -operand

		//TODO: short type -->> short content = (short) context.memory[fixedAddress / 2]
		let content = memory[fixedAddress / 2]

		if ((fixedAddress & 1) == 0) {
			content &= 0x00ff
			content |= result << 8
		} else {
			content &= 0xff00
			content |= result & 255
		}

		memory[fixedAddress / 2] = content

		Instruction.markFlags(result, result, context)
		context.pc  += 6
	}
}
