import Instruction from '../Instruction'
import cpuEngine from '@/services/cpu/CpuEngine'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => "halt"

export default class Halt extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		this.assembler = ASSEMBLER_INSTRUCTION_EXPRESSION()
		super.setContent()
	}

	exec () {
		cpuEngine.halt()
		//context.pc ++

		// TODO Check if this is necessary
		// try {Thread.sleep(100)} catch (Exception ex) {}
	}
}
