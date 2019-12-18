class CpuEngine {
  run() {
    if (
      /*!inIrq && */ Engine.irq0 ||
      Engine.irq2_pressed ||
      Engine.irq2_released
    ) {
      //						inIrq = true;
      prepareIrq();
    }

    instruction = ctx.mdl.addr_instr[Instruction.fix(ctx.pc.val)];

    if (i.breakPoint) {
      stop();
      break;
    }
    try {
      i.exec(ctx);
    } catch (Exception ex) {
      ex.printStackTrace();
      throw new Exception(ex.getMessage());
    }
    if (EmulatorMain.DEBUG)
      publish(i);
  }

  private void prepareIrq() {
		if (Engine.irq0 && (ctx.memory[Engine.IRQ0_ADDR]==0)) {
			synchronized (this) { this.notify(); }
			return;
		}
		if (Engine.irq2_pressed && (ctx.memory[Engine.IRQ2_PRESSED_ADDR/2]==0)) {
			synchronized (this) { this.notify(); }
			return;
		}
		if (Engine.irq2_released && (ctx.memory[Engine.IRQ2_RELEASED_ADDR/2]==0)) {
			synchronized (this) { this.notify(); }
			return;
		}
		// Push flags
		ctx.sp.val -= 2;
		ctx.memory[Instruction.fix(ctx.sp.val) / 2] = (short)(ctx.f.val);
		// Push PC
		ctx.sp.val -= 4;
		ctx.memory[Instruction.fix(ctx.sp.val ) / 2] = (short)(ctx.pc.val >> 16);
		ctx.memory[Instruction.fix(ctx.sp.val + 2) / 2] = (short)(ctx.pc.val & 0xFFFF);
		if (Engine.irq0) {
			// Jump to the IRQ1 handler
			ctx.pc.val = Engine.IRQ0_ADDR;
			Instruction instr = ctx.mdl.getInstruction(ctx.memory, Engine.IRQ0_ADDR);
			instr.setContent();
			ctx.mdl.lines.set(Engine.IRQ0_ADDR, instr);
			instr.tableLine = Engine.IRQ0_ADDR;
			ctx.mdl.addr_instr[Engine.IRQ0_ADDR] = instr;
			Engine.irq0 = false;
		} else if (Engine.irq2_pressed) {
			Engine.irq2_pressed = false;
			// Jump to the IRQ2 pressed handler
			ctx.pc.val = Engine.IRQ2_PRESSED_ADDR;
			Instruction instr = ctx.mdl.getInstruction(ctx.memory, Engine.IRQ2_PRESSED_ADDR);
			instr.setContent();
			ctx.mdl.lines.set(Engine.IRQ2_PRESSED_ADDR, instr);
			instr.tableLine = Engine.IRQ2_PRESSED_ADDR;
			ctx.mdl.addr_instr[Engine.IRQ2_PRESSED_ADDR] = instr;
		} else if (Engine.irq2_released) {
			Engine.irq2_released = false;
			// Jump to the IRQ2 released handler
			ctx.pc.val = Engine.IRQ2_RELEASED_ADDR;
			Instruction instr = ctx.mdl.getInstruction(ctx.memory, Engine.IRQ2_RELEASED_ADDR);
			instr.setContent();
			ctx.mdl.lines.set(Engine.IRQ2_RELEASED_ADDR, instr);
			instr.tableLine = Engine.IRQ2_RELEASED_ADDR;
			ctx.mdl.addr_instr[Engine.IRQ2_RELEASED_ADDR] = instr;
		}
	}
}

const cpuEngine = new CpuEngine();

export default cpuEngine;
