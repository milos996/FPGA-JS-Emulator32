import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination, ssource) => `st.b [${sdestination} + %s], ${ssource}`

export default class StBMRegXXXRegY extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination, this.ssource))
	}

	exec ({ context, memory }) {
		const fixedAddress = Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument)
		// TODO: `short` type -->> short content = context.memory[Math.floor(fixedAddress / 2)]
		const content = memory[Math.floor(fixedAddress / 2)]

		if (fixedAddress & 1 == 0) {
			content &= 0x00ff
			content |= context[REGISTER_VALUE_NAME_MAPPER[this.source]]  << 8
		} else {
			content &= 0xff00
			content |= context[REGISTER_VALUE_NAME_MAPPER[this.source]]  & 255
		}

		memory[Math.floor(fixedAddress / 2)] = content

		context.pc  += 6

		return {
			address: Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument),
			content
		}
	}
}
