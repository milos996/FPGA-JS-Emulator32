import Instruction from '../Instruction'
import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `pop ${sdestination}`

export default class PopReg extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		const v = Instruction.fix(context.sp)
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]] = Instruction.pop(memory, v / 2)
		context.sp += 4
		context.pc += 2
	}
}
