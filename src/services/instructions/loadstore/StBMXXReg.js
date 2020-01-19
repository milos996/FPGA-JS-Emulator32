import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = sdestination =>
  `st.b [0x%08x], ${sdestination}`

export default class StBMXXReg extends Instruction {
  constructor(memory, address, source, destination) {
    super(memory, address, source, destination)
    super.setArgument32()
    super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
  }

  exec({ context, memory }) {
    const fixedAddress = Instruction.fix(this.argument)

    //TODO: short type -->> short content = context.memory[fixedAddress / 2]
    const content = memory[fixedAddress / 2]

    if (fixedAddress & (1 == 0)) {
      content &= 0x00ff
      content |= context[REGISTER_VALUE_NAME_MAPPER[this.destination]] << 8
    } else {
      content &= 0xff00
      content |= context[REGISTER_VALUE_NAME_MAPPER[this.destination]] & 255
    }

    memory[fixedAddress / 2] = content

    context.pc += 6
  }
}
