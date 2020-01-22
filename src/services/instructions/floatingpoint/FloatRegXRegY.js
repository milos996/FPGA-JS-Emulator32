import Instruction from '../Instruction'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import { INSTRUCTIONS_TYPES_NAMES } from '@/constants/instructions'
import { INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS } from '@/helpers/instruction'

const ASSEMBLER_INSTRUCTION_EXPRESSION = (type, sdestination, ssource) => `${type} ${sdestination}, ${ssource}`

export default class FloatRegXRegY extends Instruction {
	constructor (memory, address, source, destination, type) {
		super(memory, address, source, destination)
		super.setAssembler(ASSEMBLER_INSTRUCTION_EXPRESSION(
			INSTRUCTIONS_TYPES_NAMES[type],
			this.sdestination,
			this.ssource
		))

		this.type = type
	}

	exec ({ context, memory }) {
		//TODO: float number -->> float result = 0

		let result = 0.0

		result = INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS[this.type](
			FloatRegXRegY.int2float(context[REGISTER_VALUE_NAME_MAPPER[this.destination]]),
			FloatRegXRegY.int2float(context[REGISTER_VALUE_NAME_MAPPER[this.source]])
		)

		context[REGISTER_VALUE_NAME_MAPPER[this.destination]]  = FloatRegXRegY.float2int(result)
		context.pc  += 2
	}

	// TODO Custom implementation, check if it is the same as Java implementation result
	static int2float(integerNumber) {
		const buffer = new ArrayBuffer(4)
		const view = new DataView(buffer)

		view.setInt32(0, integerNumber)

		return view.getFloat32()
	}

	// TODO Custom implementation, check if it is the same as Java implementation result
	static float2int(floatNumber) {
		const buffer = new ArrayBuffer(4)
		const view = new DataView(buffer)

		view.setFloat32(0, floatNumber)

		return view.getInt32()
	}
}
