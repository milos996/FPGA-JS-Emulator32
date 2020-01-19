import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'IRQ'

export default class Irq extends Instruction {
	constructor (memory, address) {
		super(memory, address, 0, 0)
		this.assembler = ASSEMBLER_INSTRUCTION_EXPRESSION()
		super.setContent()
	}

	exec ({ context, memory }) {
		context.pc += 2
	}
}
