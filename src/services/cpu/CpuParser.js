import { INSTRUCTIONS } from '@/constants/instructions';
import Instruction from '@/services/instructions/Instruction'

class CpuParser {
  async parse(memory, symbolTable) {
    let address = 0;
    let lines = [];
    let addressInstruction = {};

    while (address <= 100000) {
      let instruction

      try {
        instruction = await CpuParser.getInstruction(address, memory, symbolTable);
      } catch (e) {
        console.log(e);
      }

      address += 2;
      instruction.setContent();
      const lineLength = lines.push(instruction);
      instruction.tableLine = lineLength - 1;

      //TODO: Maybe without hasArgument in instructions, argumentLength could be 0 at the beginning
      if (instruction.hasArgument) {
        address += instruction.argumentLength;
      }

      if (instruction.assembler !== 'nop') {
        console.log(`${address}. INSTRUCTION -> ${instruction.assembler}  ----  ${instruction.constructor.name}`);
      }

      addressInstruction[instruction.address] = instruction;
    }
    console.log('DONE PARSING')

    return {
      lines,
      addressInstruction
    };
  }

  static async getInstruction(address, memory, symbolTable) {
    const instructionRegister = memory[address / 2];
    const group = (instructionRegister >> 4) & 0xf;
    const source = (instructionRegister >> 12) & 0xf;
    const destination = (instructionRegister >> 8) & 0xf;
    let InstructionObject;

    try {
      InstructionObject = INSTRUCTIONS[instructionRegister & 0xf]

      if (!InstructionObject.hasOwnProperty(group)) {
        return new Instruction(memory, address , 0, 0, symbolTable)
      }

      InstructionObject = InstructionObject[group]
    } catch (e) {
      return new Instruction(memory, address , 0, 0, symbolTable)
    }

    const {class: InstructionClass, type = null} = InstructionObject

    const classI = await InstructionClass()

    if (!!type) {
      return new classI.default(memory, address , source, destination, type, symbolTable);
    }

    return new classI.default(memory, address , source, destination, symbolTable);
  }
}

const cpuParser = new CpuParser();
export  {
  cpuParser,
  CpuParser as CpuParserClass
};
