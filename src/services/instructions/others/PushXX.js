
 import Instruction from '../Instruction'
 import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

 const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'push %s'

export default class PushXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
	}

	exec ({ context, memory }) {
		context.sp  -= 4
		const v = Instruction.fix(context.sp)
		Instruction.push(memory, v/2, this.argument)
		context.pc += 6

		// TODO - updateViewer32
		return {
			address: v,
			content: this.argument
		}
	}
}
