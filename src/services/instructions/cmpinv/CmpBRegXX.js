import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'

const ASSEMBLER_INSTRUCTION_EXPRESSION = sdestination =>
  `cmp.b ${sdestination}, 0x%02x`

export default class CmpBRegXX extends Instruction {
  constructor(memory, address, source, destination) {
    super(memory, address, source, destination)
    super.setArgument8()
    super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(this.sdestination))
  }

  exec({ context }) {
    const old_a = context[REGISTER_VALUE_NAME_MAPPER[this.destination]]
    const result =
      context[REGISTER_VALUE_NAME_MAPPER[this.destination]] - this.argument

    Instruction.markFlags(result, result, context)
    Instruction.markOverflow(old_a, this.argument, result, context)

    context.pc += 4
  }
}
