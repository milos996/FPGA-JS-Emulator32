import { INSTRUCTIONS } from '@/constants/instructions';

class CpuParser {
  parse(memory, symbolTable) {
    let address = 0;
    let lines = [];
    let addressInstruction = {};

    while (!address === 1000000) {
      const instruction = CpuParser.getInstruction(address, memory, symbolTable);
      address += 2;
      instruction.setContent();
      const lineLength = lines.push(instruction);
      instruction.tableLine = lineLength - 1;

      //TODO: Maybe without hasArgument in instructions, argumentLength could be 0 at the beginning
      if (instruction.hasArgument) {
        address += instruction.argumentLength;
      }

      addressInstruction[instruction.address] = instruction;
    }

    return {
      lines,
      addressInstruction
    };
  }

  static getInstruction(address, memory, symbolTable) {
    const instructionRegister = memory[address / 2];
    const group = (instructionRegister >> 4) & 0xf;
    const source = (instructionRegister >> 12) & 0xf;
    const destination = (instructionRegister >> 8) & 0xf;

    const InstructionObject = INSTRUCTIONS[instructionRegister & 0xf][group]
    const {class: InstructionClass, type = null} = InstructionObject

    if (!!type) {
      return new InstructionClass.default(memory, address, source, destination, type, symbolTable);
    }

    return new InstructionClass.default(memory, address, source, destination, symbolTable);
  }
}

const cpuParser = new CpuParser();
export  {
  cpuParser,
  CpuParser as CpuParserClass
};
