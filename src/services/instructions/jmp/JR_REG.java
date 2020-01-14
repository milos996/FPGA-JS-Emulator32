package emulator.source.jmp

import emulator.engine.CpuContext
 import Instruction from '../Instruction'import REGISTER_VALUE_NAME_MAPPER from '@/constants/registers'

export default class JR_REG extends Instruction {
	public JR_REG(memory, address, source, 
 destination) {
		super(memory, address, source, destination)
		super.setAssembler("jr " + this.ssource)
		super.isJump = true
	}

	
	exec ({ context, memory }) {
		context.pc  = context.getReg(this.source) 
	}
}
