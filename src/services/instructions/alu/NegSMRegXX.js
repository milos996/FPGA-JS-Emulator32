
 import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `neg.s [ ${sdestination} + %s]`

export default class NegSMRegXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		this.setArgument32()

		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}


	exec ({ context, memory }) {
		// TODO: long type -->> long result =...
		const result = -memory[Math.floor(Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2)]

		// TODO: cast to short -->> ... = (short)result
		memory[Math.floor(Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument) / 2)] = result

		Instruction.markFlags(result, result, context)
		context.pc  += 6

		return {
			address: Instruction.fix(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  + this.argument),
			content: result
		}
	}
}
