import { CpuParserClass } from '@/services/cpu/CpuParser'
import Instruction from '@/services/instructions/Instruction'

class CpuEngine {
	constructor() {
		this.irq0 = false
		this.irq2_pressed = false
		this.irq2_released = false

		this.irq0_address = 8
		this.irq2_pressed_address = 32
		this.irq2_released_address = 40
		this.inIrq = false

		this.memory = []
		this.lines = []
		this.addressInstruction = {}
		this.symbolTable = {}

		this.context = {}

		this.running = true
	}

  run() {
		let instructionResponse;

		if (
			this.irq0 ||
			this.irq2_pressed ||
			this.irq2_released
		) {
			this.prepareIrq()
		}

		const instruction = this.addressInstruction[Instruction.fix(this.context.pc)]

		try {
			instructionResponse = instruction.exec({
				context: this.context,
				memory: this.memory
			})
		} catch (error) {
			this.running = false
			console.log(error)
		}

		return {
			shouldRunAgain: this.running,
			context: this.context,
			memory: this.memory,
			instructionResponse: {
				...instructionResponse,
			}
		}
  }

  async prepareIrq() {
		if (this.irq0 && this.memory[this.irq0_address] === 0) {
			return
		}

		if (this.irq2_pressed && this.memory[this.irq2_pressed_address / 2] === 0) {
			return
		}

		if (this.irq2_released && this.memory[this.irq2_released_address / 2] === 0) {
			return
		}

		// Push flags
		this.context.sp -= 2
		this.memory[Math.floor(Instruction.fix(this.context.sp) / 2)] = this.context.f

		// Push PC
		this.context.sp -= 4
		this.memory[Math.floor(Instruction.fix(this.context.sp) / 2)] = this.context.pc  >> 16
		this.memory[Math.floor(Instruction.fix(this.context.sp + 2) / 2)] = this.context.pc  & 0xFFFF

		if (this.irq0) {
			// Jump to the IRQ1 handler
			this.context.pc  = this.irq0_address

			try {
				let instruction = await CpuParserClass.getInstruction(this.irq0_address, this.memory, this.symbolTable)

				instruction.setContent()

				this.addressInstruction[this.irq0_address] = instruction
			} catch (error) {
				console.log('Instruction does not exits')
			}

			this.irq0 = false
		} else if (this.irq2_pressed) {
			this.irq2_pressed = false
			// Jump to the IRQ2 pressed handler

			this.context.pc  = this.irq2_pressed_address

			try {
				let instruction = await CpuParserClass.getInstruction(this.irq2_pressed_address, this.memory, this.symbolTable)
				instruction.setContent()

				this.addressInstruction[this.irq2_pressed_address] = instruction
			} catch (error) {
				console.log('Instruction does not exits')
			}
		} else if (this.irq2_released) {
			this.irq2_released = false
			// Jump to the IRQ2 released handler
			this.context.pc  = this.irq2_released_address
			try {
				let instruction = await CpuParserClass.getInstruction(this.irq2_released_address, this.memory, this.symbolTable)
				instruction.setContent()
				this.addressInstruction[this.irq2_released_address] = instruction
			} catch (error) {
				console.log('Instruction does not exits')
			}
		}
	}

	halt () {
		this.running = false
	}

	inject(memory, lines, addressInstruction, symbolTable) {
		this.memory = memory
		this.lines = lines
		this.addressInstruction = addressInstruction
		this.symbolTable = symbolTable

		this.context = {
			r0: 0,
			r1: 0,
			r2: 0,
			r3: 0,
			r4: 0,
			r5: 0,
			r6: 0,
			r7: 0,
			r8: 0,
			r9: 0,
			r10: 0,
			r11: 0,
			r12: 0,
			r13: 0,
			pc: 45056,
			sp: 0,
			h: 0,
			f: 0
		}
	}
}

const cpuEngine = new CpuEngine()

export default cpuEngine
