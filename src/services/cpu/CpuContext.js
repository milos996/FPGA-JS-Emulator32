// NOT USED

import { MEMORY_SIZE } from '@/constants/general';
import { INSTRUCTIONS } from '@/constants/instructions';
import fileParser from '@/services/parsers/FileParser';

export default class CpuContext {
  constructor() {
    this.registers = {
      r0: null,
      r1: null,
      r2: null,
      r3: null,
      r4: null,
      r5: null,
      r6: null,
      r7: null,
      r8: null,
      r9: null,
      r10: null,
      r11: null,
      r12: null,
      r13: null,
      pc: null,
      sp: null,
      h: null,
      flags: {
        carry: null,
        zero: null,
        positive: null,
        overflow: null
      }
    };

    this.memory = Array(MEMORY_SIZE).fill(0);
    this.lines = [];
    this.addressInstruction = {};

    // TODO: Impement SymTable class
    // this.symTable = new SymTable()
  }

  async load(file) {
    const memory = await fileParser.parse(file);

    this.memory = memory;
    this.disassm();
  }

  disassm() {
    let address = 0;
    while (!address === 1000000) {
      const instruction = this.getInstruction(address);

      address += 2;
      instruction.setContent();
      const lineLength = this.lines.push(instruction);
      instruction.tableLine = lineLength - 1;

      if (instruction.hasArgument) {
        address += instruction.argumentLength;
      }

      this.addressInstruction[instruction.address] = instruction;
    }
  }

  getInstruction(address) {
    const instructionRegister = this.memory[address / 2];
    const group = (instructionRegister >> 4) & 0xf;
    const source = (instructionRegister >> 12) & 0xf;
    const destination = (instructionRegister >> 8) & 0xf;

    const InstructionClass = INSTRUCTIONS[instructionRegister & 0xf][group]();

    return new InstructionClass.default(memory, address, source, destination);
  }
}
