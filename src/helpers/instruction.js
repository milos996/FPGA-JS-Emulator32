import { INSTRUCTION_TYPES } from '@/constants/instructions'

export const INSTRUCTIONS_TYPE_FUNCTION_COMPUTATIONS = {
  [INSTRUCTION_TYPES.ADD_W]: (firstNumber, secondNumber) => firstNumber + secondNumber,
  [INSTRUCTION_TYPES.SUB_W]: (firstNumber, secondNumber) => firstNumber - secondNumber,
  [INSTRUCTION_TYPES.AND_W]: (firstNumber, secondNumber) => firstNumber & secondNumber,
  [INSTRUCTION_TYPES.OR_W]: (firstNumber, secondNumber) => firstNumber | secondNumber,
  [INSTRUCTION_TYPES.XOR_W]: (firstNumber, secondNumber) => firstNumber ^ secondNumber,
  [INSTRUCTION_TYPES.SHL_W]: (firstNumber, secondNumber) => firstNumber << secondNumber,
  [INSTRUCTION_TYPES.SHR_W]: (firstNumber, secondNumber) => firstNumber >>> secondNumber,
  [INSTRUCTION_TYPES.MUL_W]: (firstNumber, secondNumber) => firstNumber * secondNumber,
  [INSTRUCTION_TYPES.DIV_W]: (firstNumber, secondNumber) => firstNumber / secondNumber,
  [INSTRUCTION_TYPES.ADD_S]: (firstNumber, secondNumber) => firstNumber + secondNumber,
  [INSTRUCTION_TYPES.SUB_S]: (firstNumber, secondNumber) => firstNumber - secondNumber,
  [INSTRUCTION_TYPES.AND_S]: (firstNumber, secondNumber) => firstNumber & secondNumber,
  [INSTRUCTION_TYPES.OR_S]: (firstNumber, secondNumber) => firstNumber | secondNumber,
  [INSTRUCTION_TYPES.XOR_S]: (firstNumber, secondNumber) => firstNumber ^ secondNumber,
  [INSTRUCTION_TYPES.SHL_S]: (firstNumber, secondNumber) => firstNumber << secondNumber,
  [INSTRUCTION_TYPES.SHR_S]: (firstNumber, secondNumber) => firstNumber >>> secondNumber,
  [INSTRUCTION_TYPES.MUL_S]: (firstNumber, secondNumber) => firstNumber * secondNumber,
  [INSTRUCTION_TYPES.DIV_S]: (firstNumber, secondNumber) => firstNumber / secondNumber,
  [INSTRUCTION_TYPES.ADD_B]: (firstNumber, secondNumber) => firstNumber + secondNumber,
  [INSTRUCTION_TYPES.SUB_B]: (firstNumber, secondNumber) => firstNumber - secondNumber,
  [INSTRUCTION_TYPES.AND_B]: (firstNumber, secondNumber) => firstNumber & secondNumber,
  [INSTRUCTION_TYPES.OR_B]: (firstNumber, secondNumber) => firstNumber | secondNumber,
  [INSTRUCTION_TYPES.XOR_B]: (firstNumber, secondNumber) => firstNumber ^ secondNumber,
  [INSTRUCTION_TYPES.SHL_B]: (firstNumber, secondNumber) => firstNumber << secondNumber,
  [INSTRUCTION_TYPES.SHR_B]: (firstNumber, secondNumber) => firstNumber >>> secondNumber,
  [INSTRUCTION_TYPES.MUL_B]: (firstNumber, secondNumber) => firstNumber * secondNumber,
  [INSTRUCTION_TYPES.DIV_B]: (firstNumber, secondNumber) => firstNumber / secondNumber,
  [INSTRUCTION_TYPES.FADD]: (firstNumber, secondNumber) => firstNumber + secondNumber,
  [INSTRUCTION_TYPES.FSUB]: (firstNumber, secondNumber) => firstNumber - secondNumber,
  [INSTRUCTION_TYPES.FMUL]: (firstNumber, secondNumber) => firstNumber * secondNumber,
  [INSTRUCTION_TYPES.FDIV]: (firstNumber, secondNumber) => firstNumber / secondNumber
}