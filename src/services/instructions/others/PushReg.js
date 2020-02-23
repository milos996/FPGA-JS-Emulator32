 import Instruction from '../Instruction'
 import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

 const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `push ${sdestination}`

export default class PushReg extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context, memory }) {
		context.sp  -= 4
		Instruction.push(memory, Instruction.fix(context.sp) / 2, context[REGISTER_VALUE_NAME_MAPPER[this.destination]])
		context.pc += 2

		return {
			address: Instruction.fix(context.sp),
			content: context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
		}
	}
}
