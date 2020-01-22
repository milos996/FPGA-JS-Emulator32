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

		this.context = {}

		this.running = true
	}

  run() {
		this.running = true

		while (this.running) {
	    if (
	      this.irq0 ||
	      this.irq2_pressed ||
	      this.irq2_released
	    ) {
	      this.prepareIrq()
	    }

	    const instruction = this.addr_instruction[Instruction.fix(this.context.pc )]

	    if (instruction.breakPoint) {
	      this.stop()
	      break
			}

	    try {
				instruction.exec({
					context: this.context,
					memory: this.memory
				})
	    } catch (error) {
				this.running = false
				console.log(error)
				throw error
	    }

			if (this.debug) {
			}
		}

		return {
			memory: this.memory,
		  context: this.context
		}
  }

  prepareIrq() {
		if (this.irq0 && this.memory[this.irq0_address] === 0) {
			// synchronized (this) { this.notify() }
			return
		}

		if (this.irq2_pressed && this.memory[this.irq2_pressed_address / 2] === 0) {
			// synchronized (this) { this.notify() }
			return
		}

		if (this.irq2_released && this.memory[this.irq2_released_address / 2] === 0) {
			// synchronized (this) { this.notify() }
			return
		}

		// Push flags
		this.context.sp -= 2
		this.memory[Instruction.fix(this.context.sp) / 2] = this.context.f

		// Push PC
		this.context.sp -= 4
		this.memory[Instruction.fix(this.context.sp) / 2] = this.context.pc  >> 16
		this.memory[Instruction.fix(this.context.sp + 2) / 2] = this.context.pc  & 0xFFFF

		if (this.irq0) {
			// Jump to the IRQ1 handler
			this.context.pc  = this.irq0_address

			let instruction = CpuParserClass.getInstruction(this.memory, this.irq0_address)
			instruction.setContent()

			this.lines[this.irq0_address] = instruction

			instruction.tableLine = this.irq0_address

			this.addressInstruction[this.irq0_address] = instruction

			this.irq0 = false
		} else if (this.irq2_pressed) {
			this.irq2_pressed = false
			// Jump to the IRQ2 pressed handler

			this.context.pc  = this.irq2_pressed_address

			let instruction = CpuParserClass.getInstruction(this.memory, this.irq2_pressed_address)
			instruction.setContent()

			this.lines[this.irq2_pressed_address]= instruction

			instruction.tableLine = this.irq2_pressed_address

			this.addressInstruction[this.irq2_pressed_address] = instruction
		} else if (this.irq2_released) {
			this.irq2_released = false
			// Jump to the IRQ2 released handler

			this.context.pc  = this.irq2_released_address

			let instruction = CpuParserClass.getInstruction(this.memory, this.irq2_released_address)
			instruction.setContent()

			this.lines[this.irq2_released_address] = instruction

			instruction.tableLine = this.irq2_released_address

			this.addressInstruction[this.irq2_released_address] = instruction
		}
	}

  stop() {
			this.running = false

		// if (this.fromStepOver) {
		// 	this.fromStepOver = false
		// 	Instruction i = context.mdl.addr_instr[Instruction.fix(context.pc )]
		// 	if (i.breakPointStepOver) {
		// 		i.breakPointStepOver = false
		// 		this.context.mdl.fireTableDataChanged()
		// 	}
		// }
		// refreshUI(context.mdl.addr_instr[Instruction.fix(context.pc )])
	}

	inject(memory, lines, addressInstruction) {
		this.memory = memory
		this.lines = lines
		this.addressInstruction = addressInstruction

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
			pc: 0,
			sp: 0,
			h: 0,
			f: 0
		}
	}

	setContextField(field, value) {
		this.context = {
			...this.context,
			[field]: value
		}
	}
}

const cpuEngine = new CpuEngine()

export default cpuEngine
