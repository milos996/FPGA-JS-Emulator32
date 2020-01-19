 import Instruction from '../Instruction'
 import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

 const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `push ${sdestination}`

export default class PushReg extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		context.sp  -= 4
		Instruction.push(memory, Instruction.fix(context.sp), REGISTER_VALUE_NAME_MAPPER[this.destination])
		context.pc += 2
	}
}
