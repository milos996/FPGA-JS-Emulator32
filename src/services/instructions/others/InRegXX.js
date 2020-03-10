 import Instruction from '../Instruction'
 import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

 const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `in ${sdestination}, [%s]`

export default class InRegXX extends Instruction {

	constructor (memory, address, source,  destination, symbolTable) {
		super(memory, address, source, destination, symbolTable)
		super.setArgument(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination), symbolTable)
		this.argument = memory[Math.floor((address + 2) / 2)]
	}

	exec ({ context }) {
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = Instruction.fromPort(this.argument)
		context.pc  += 4
	}
}
