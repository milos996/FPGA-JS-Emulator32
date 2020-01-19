// NOP/MOV/IN/OUT/PUSH/POP/RET/IRET/HALT GROUP
const OTHERS_GROUP = 0;

const JUMP_GROUP = 1;
const CALL_GROUP = 2;
const LOAD_STORE_GROUP = 3;
const ADD_SUB_GROUP = 4;
const AND_OR_GROUP = 5;
const XOR_NEG_GROUP = 6;
const SHL_SHR_GROUP = 7;
const MUL_DIV_GROUP = 8;
const INC_DEC_GROUP = 9;
const CMP_INV_GROUP = 10;
const FLOATING_POINT_GROUP = 11;
const LD_ST_GROUP = 12;
const ALU_CMP_W_GROUP = 13;
const ALU_CMP_B_GROUP = 14;

export const INSTRUCTION_TYPES = {
  ADD_W: 19,
  ADD_S: 1,
  ADD_B: 10,
  SUB_W: 20,
  SUB_S: 2,
  AND_W: 21,
  OR_W: 22,
  XOR_W: 23,
  SHL_W: 25,
  SHR_W: 24,
  MUL_W: 26,
  DIV_W: 27,
  AND_S: 3,
  OR_S: 4,
  XOR_S: 5,
  SHL_S: 7,
  SHR_S: 6,
  MUL_S: 8,
  DIV_S: 9,
  SUB_B: 11,
  AND_B: 12,
  OR_B: 13,
  XOR_B: 14,
  SHL_B: 16,
  SHR_B: 15,
  MUL_B: 17,
  DIV_B: 18
}

export const INSTRUCTIONS_TYPES_NAMES = {
  [INSTRUCTIONS_TYPES.ADD_S]: "add.s ",
  [INSTRUCTIONS_TYPES.SUB_S]: "sub.s ",
  [INSTRUCTIONS_TYPES.AND_S]: "and.s ",
  [INSTRUCTIONS_TYPES.OR_S]: "or.s ",
  [INSTRUCTIONS_TYPES.XOR_S]: "xor.s ",
  [INSTRUCTIONS_TYPES.SHL_S]: "shl.s ",
  [INSTRUCTIONS_TYPES.SHR_S]: "shr.s ",
  [INSTRUCTIONS_TYPES.MUL_S]: "mul.s ",
  [INSTRUCTIONS_TYPES.DIV_S]: "div.s ",
  [INSTRUCTIONS_TYPES.ADD_B]: "add.b ",
  [INSTRUCTIONS_TYPES.SUB_B]: "sub.b ",
  [INSTRUCTIONS_TYPES.AND_B]: "and.b ",
  [INSTRUCTIONS_TYPES.OR_B]: "or.b ",
  [INSTRUCTIONS_TYPES.XOR_B]: "xor.b ",
  [INSTRUCTIONS_TYPES.SHL_B]: "shl.b ",
  [INSTRUCTIONS_TYPES.SHR_B]: "shr.b ",
  [INSTRUCTIONS_TYPES.MUL_B]: "mul.b ",
  [INSTRUCTIONS_TYPES.DIV_B]: "div.b ",
  [INSTRUCTIONS_TYPES.ADD_W]: "add.w ",
  [INSTRUCTIONS_TYPES.SUB_W]: "sub.w ",
  [INSTRUCTIONS_TYPES.AND_W]: "and.w ",
  [INSTRUCTIONS_TYPES.OR_W]: "or.w ",
  [INSTRUCTIONS_TYPES.XOR_W]: "xor.w ",
  [INSTRUCTIONS_TYPES.SHL_W]: "shl.w ",
  [INSTRUCTIONS_TYPES.SHR_W]: "shr.w ",
  [INSTRUCTIONS_TYPES.MUL_W]: "mul.w ",
  [INSTRUCTIONS_TYPES.DIV_W]: "div.w ",
  [INSTRUCTIONS_TYPES.FADD]: "fadd ",
  [INSTRUCTIONS_TYPES.FSUB]: "fsub ",
  [INSTRUCTIONS_TYPES.FMUL]: "fmul ",
  [INSTRUCTIONS_TYPES.FDIV]: "fdiv "
}

export const INSTRUCTIONS = {
  [OTHERS_GROUP]: {
    0: {class: () => require('@/services/instructions/others/Nop') },
    1: {class: () => require('@/services/instructions/others/MovWRegXRegY') },
    2: {class: () => require('@/services/instructions/others/MovSRegXX') },
    3: {class: () => require('@/services/instructions/others/InRegXX') },
    4: {class: () => require('@/services/instructions/others/OutXXReg') },
    5: {class: () => require('@/services/instructions/others/PushReg') },
    6: {class: () => require('@/services/instructions/others/PushXX') },
    7: {class: () => require('@/services/instructions/others/PopReg') },
    8: {class: () => require('@/services/instructions/others/Ret') },
    9: {class: () => require('@/services/instructions/others/IRet') },
    10:{class: () => require( '@/services/instructions/others/SwapRegXRegY') },
    11:{class: () => require( '@/services/instructions/others/MovWRegXX') },
    12:{class: () => require( '@/services/instructions/others/Irq') },
    13:{class: () => require( '@/services/instructions/others/MovBRegXX') },
    14:{class: () => require( '@/services/instructions/others/MovWRegXRegYXX') },
    15:{class: () => require( '@/services/instructions/others/Halt') }
  },

  [JUMP_GROUP]: {
    0: {class: () => require('@/services/instructions/jmp/JXX')},
    1: {class: () => require('@/services/instructions/jmp/JzXX')},
    2: {class: () => require('@/services/instructions/jmp/JnzXX')},
    3: {class: () => require('@/services/instructions/jmp/JcXX')},
    4: {class: () => require('@/services/instructions/jmp/JncXX')},
    5: {class: () => require('@/services/instructions/jmp/JoXX')},
    6: {class: () => require('@/services/instructions/jmp/JnoXX')},
    7: {class: () => require('@/services/instructions/jmp/JpXX')},
    8: {class: () => require('@/services/instructions/jmp/JnpXX')},
    9: {class: () => require('@/services/instructions/jmp/JgXX')},
    10: {class: () => require('@/services/instructions/jmp/JseXX')}
  },

  [CALL_GROUP]: {
    0: {class: () => require('@/services/instructions/call/CallXX')},
    1: {class: () => require('@/services/instructions/call/CallZXX')},
    2: {class: () => require('@/services/instructions/call/CallNzXX')},
    3: {class: () => require('@/services/instructions/call/CallCXX')},
    4: {class: () => require('@/services/instructions/call/CallNcXX')},
    5: {class: () => require('@/services/instructions/call/CallOXX')},
    6: {class: () => require('@/services/instructions/call/CallNoXX')},
    7: {class: () => require('@/services/instructions/call/CallPXX')},
    8: {class: () => require('@/services/instructions/call/CallNpXX')},
    9: {class: () => require('@/services/instructions/call/CallGXX')},
    10: {class: () => require('@/services/instructions/call/CallSeXX')}
  },

  [LOAD_STORE_GROUP]: {
    0: {class: () => require('@/services/instructions/loadstore/LdSRegXMRegY')},
    1: {class: () => require('@/services/instructions/loadstore/LdSRegMXX')},
    2: {class: () => require('@/services/instructions/loadstore/LdSRegXMRegYXX')},
    3: {class: () => require('@/services/instructions/loadstore/LdBRegXMRegY')},
    4: {class: () => require('@/services/instructions/loadstore/LdBRegMXX')},
    5: {class: () => require('@/services/instructions/loadstore/LdBRegXMRegYXX')},
    8: {class: () => require('@/services/instructions/loadstore/StSMRegXRegY')},
    9: {class: () => require('@/services/instructions/loadstore/StSMXXReg')},
    10: {class: () => require('@/services/instructions/loadstore/StSMRegXXXRegY')},
    11: {class: () => require('@/services/instructions/loadstore/StBMRegXRegY')},
    12: {class: () => require('@/services/instructions/loadstore/StBMXXReg')},
    13: {class: () => require('@/services/instructions/loadstore/StBMRegXXXRegY')}
  },

  [ADD_SUB_GROUP]: {
    0: {class: () => require('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.ADD_W},
    1: {class: () => require('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.ADD_S},
    2: {class: () => require('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.ADD_W},
    3: {class: () => require('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.ADD_S},
    4: {class: () => require('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.ADD_B},
    8: {class: () => require('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.SUB_W},
    9: {class: () => require('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.SUB_S},
    10: {class: () => require('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.SUB_W},
    11: {class: () => require('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.SUB_S},
    12: {class: () => require('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.SUB_B}
  },

  [AND_OR_GROUP]: {
    0: 'ALU_W_REGX_REGY',
    1: 'ALU_S_REG_XX',
    2: 'ALU_W_REGX_MREGY_XX',
    3: 'ALU_S_REGX_MREGY_XX',
    4: 'ALU_B_REGX_MREGY_XX',
    8: 'ALU_W_REGX_REGY',
    9: 'ALU_S_REG_XX',
    10: 'ALU_W_REGX_MREGY_XX',
    11: 'ALU_S_REGX_MREGY_XX',
    12: 'ALU_B_REGX_MREGY_XX'
  },

  [XOR_NEG_GROUP]: {
    0: 'ALU_W_REGX_REGY',
    1: 'ALU_S_REG_XX',
    2: 'ALU_W_REGX_MREGY_XX',
    3: 'ALU_S_REGX_MREGY_XX',
    4: 'ALU_B_REGX_MREGY_XX',
    8: 'NEG_W_REG',
    10: 'NEG_W_MREG_XX',
    11: 'NEG_S_MREG_XX',
    12: 'NEG_B_MREG_XX'
  },

  [SHL_SHR_GROUP]: {
    0: 'ALU_W_REGX_REGY',
    1: 'ALU_S_REG_XX',
    2: 'ALU_W_REGX_MREGY_XX',
    3: 'ALU_S_REGX_MREGY_XX',
    4: 'ALU_B_REGX_MREGY_XX',
    8: 'ALU_W_REGX_REGY',
    9: 'ALU_S_REG_XX',
    10: 'ALU_W_REGX_MREGY_XX',
    11: 'ALU_S_REGX_MREGY_XX',
    12: 'ALU_B_REGX_MREGY_XX'
  },

  [MUL_DIV_GROUP]: {
    0: 'ALU_W_REGX_REGY',
    1: 'ALU_S_REG_XX',
    2: 'ALU_W_REGX_MREGY_XX',
    3: 'ALU_S_REGX_MREGY_XX',
    4: 'ALU_B_REGX_MREGY_XX',
    8: 'ALU_W_REGX_REGY',
    9: 'ALU_S_REG_XX',
    10: 'ALU_W_REGX_MREGY_XX',
    11: 'ALU_S_REGX_MREGY_XX',
    12: 'ALU_B_REGX_MREGY_XX'
  },

  [INC_DEC_GROUP]: {
    0: 'INC_W_REG',
    1: 'INC_S_MREG',
    2: 'INC_W_MREG_XX',
    3: 'INC_S_MREG_XX',
    4: 'INC_B_MREG_XX',
    8: 'DEC_W_REG',
    9: 'DEC_S_MREG',
    10: 'DEC_W_MREG_XX',
    11: 'DEC_S_MREG_XX',
    12: 'DEC_B_MREG_XX'
  },

  [CMP_INV_GROUP]: {
    0: 'CMP_W_REGX_REGY',
    1: 'CMP_S_REG_XX',
    2: 'CMP_W_REGX_MREGY_XX',
    3: 'CMP_S_REGX_MREGY_XX',
    4: 'CMP_B_REGX_MREGY_XX',
    8: 'INV_W_REG',
    10: 'INV_W_MREG_XX',
    11: 'INV_S_MREG_XX',
    12: 'INV_B_MREG_XX'
  },

  [FLOATING_POINT_GROUP]: {
    2: 'FLOAT_REGX_REGY',
    3: 'FLOAT_REGX_REGY',
    4: 'FLOAT_REGX_REGY',
    5: 'FLOAT_REGX_REGY'
  },

  [LD_ST_GROUP]: {
    0: 'LD_W_REGX_MREGY',
    1: 'LD_W_REG_MXX',
    2: 'LD_W_REGX_MREGY_XX',
    8: 'ST_W_MREGX_REGY',
    9: 'ST_W_MXX_REG',
    10: 'ST_W_MREGX_XX_REGY'
  },

  [ALU_CMP_W_GROUP]: {
    0: 'ALU_W_REG_XX',
    1: 'ALU_W_REG_XX',
    2: 'ALU_W_REG_XX',
    3: 'ALU_W_REG_XX',
    4: 'ALU_W_REG_XX',
    5: 'ALU_W_REG_XX',
    6: 'ALU_W_REG_XX',
    7: 'ALU_W_REG_XX',
    8: 'ALU_W_REG_XX',
    9: 'CMP_W_REG_XX'
  },

  [ALU_CMP_B_GROUP]: {
    0: 'ALU_B_REG_XX',
    1: 'ALU_B_REG_XX',
    2: 'ALU_B_REG_XX',
    3: 'ALU_B_REG_XX',
    4: 'ALU_B_REG_XX',
    5: 'ALU_B_REG_XX',
    6: 'ALU_B_REG_XX',
    7: 'ALU_B_REG_XX',
    8: 'ALU_B_REG_XX',
    9: 'CMP_B_REG_XX'
  }
};
