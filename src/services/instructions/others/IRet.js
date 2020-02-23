import Instruction from '../Instruction'
import cpuEngine from '@/services/cpu/CpuEngine'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'iret'

export default class IRet extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
	}

	exec ({ context, memory }) {
		context.pc  = Instruction.pop(memory, Instruction.fix(context.sp) / 2)
		context.sp  += 4
		context.f  = memory[Math.floor(Instruction.fix(context.sp) / 2)]
		context.sp  += 2
		cpuEngine.irq0 = false
		cpuEngine.irq2_pressed = false
		cpuEngine.irq2_released = false
		cpuEngine.inIrq = false
		// TODO: synchronized (context.engine) { context.engine.notify() } <<-- check this, what does it do
	}
}
