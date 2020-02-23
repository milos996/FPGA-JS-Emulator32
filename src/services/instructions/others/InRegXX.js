 import Instruction from '../Instruction'
 import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

 const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `in ${sdestination}, [0x%04x]`

export default class InRegXX extends Instruction {

	constructor (memory, address, source,  destination, symbolTable) {
		super(address, memory[Math.floor(address  / 2)], source, destination, symbolTable)
		super.setArgument(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination), symbolTable)
		this.argument = memory[Math.floor((this.address + 2) / 2)]
	}

	exec ({ context }) {
		// TODO: context.fromPort(this.argument) <<----- implement this
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = context.fromPort(this.argument)
		context.pc  += 4
	}
}
