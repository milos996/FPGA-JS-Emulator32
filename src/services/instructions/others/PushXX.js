
 import Instruction from '../Instruction'
 import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

 const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'push 0x%08x'

export default class PushXX extends Instruction {
	constructor (memory, address, source, destination) {
		super(memory, address, 0, 0)
		super.setArgument32()
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION())
	}

	exec ({ context, memory }) {
		context.sp  -= 4
		const v = Instruction.fix(context.sp)
		Instruction.push(memory, v/2, this.argument)
		context.pc += 6
	}
}
