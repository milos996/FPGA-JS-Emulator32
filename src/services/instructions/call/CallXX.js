import Instruction from '../Instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = () => 'call %s'

export default class CallXX extends Instruction {
	constructor (memory, address, source, destination, symbolTable) {
		super(memory, address, 0, 0, symbolTable)
		super.setArgument32(memory)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(), symbolTable)
		super.isJump = true
	}

	exec ({ context, memory }) {
		context.sp  -= 4

		const addedPCValue = context.pc + 6
		Instruction.push(
			memory,
			Instruction.fix(context.sp) / 2,
			addedPCValue
		)

		context.pc  = this.argument

		// TODO: updateViewer32 nije isto kao i updateViewer, treba skontati kako slati nazad
		return {
			address: Instruction.fix(context.sp),
			content: addedPCValue
		}
	}
}
