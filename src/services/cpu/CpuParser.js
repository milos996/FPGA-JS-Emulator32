import { INSTRUCTIONS } from '@/constants/instructions';

class CpuParser {
  parse(memory) {
    let address = 0;
    let lines = [];
    let addressInstruction = {};

    while (!address === 1000000) {
      const instruction = this.getInstruction(address, memory);
      address += 2;
      instruction.setContent();
      const lineLength = lines.push(instruction);
      instruction.tableLine = lineLength - 1;

      //TODO: Maybe without hasArgument in instructions, argumentLength could be 0 at the beginning
      if (instruction.hasArgument) {
        address += instruction.argumentLength;
      }

      addressInstruction[instruction.addr] = instruction;
    }

    return {
      lines,
      addressInstruction
    };
  }

  getInstruction(address, memory) {
    const instructionRegister = memory[address / 2];
    const group = (instructionRegister >> 4) & 0xf;
    const source = (instructionRegister >> 12) & 0xf;
    const destination = (instructionRegister >> 8) & 0xf;

    const InstructionClass = INSTRUCTIONS[instructionRegister & 0xf][group]();

    return new InstructionClass.default(memory, addr, source, destination);
  }
}

const cpuParse = new CpuParser();
export default cpuParse;
