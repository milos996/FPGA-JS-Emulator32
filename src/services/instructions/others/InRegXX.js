 import Instruction from '../Instruction'
 import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

 const ASSEMBLER_INSTRUCTION_EXPRESSION = (sdestination) => `in ${sdestination}, [0x%04x]`

export default class InRegXX extends Instruction {

	constructor (memory, address, source,  destination) {
		super(address, memory[(this.addr + 2)  / 2], source, destination)
		super.setArgument()
		this.argument = memory[(this.address + 2) / 2]
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
	}

	exec ({ context }) {
		// TODO: context.fromPort(this.argument) <<----- implement this
		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = context.fromPort(this.argument)
		context.pc  += 4
	}
}
