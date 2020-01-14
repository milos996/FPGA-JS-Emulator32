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

export const INSTRUCTIONS = {
  [OTHERS_GROUP]: {
    0: () => require('@/services/instructions/others/Nop'),
    1: () => require('@/services/instructions/others/MovWRegXRegY'),
    2: () => require('@/services/instructions/others/MovSRegXX'),
    3: () => require('@/services/instructions/others/InRegXX'),
    4: () => require('@/services/instructions/others/OutXXReg'),
    5: () => require('@/services/instructions/others/PushReg'),
    6: () => require('@/services/instructions/others/PushXX'),
    7: () => require('@/services/instructions/others/PopReg'),
    8: () => require('@/services/instructions/others/Ret'),
    9: () => require('@/services/instructions/others/IRet'),
    10:() => require( '@/services/instructions/others/SwapRegXRegY'),
    11:() => require( '@/services/instructions/others/MovWRegXX'),
    12:() => require( '@/services/instructions/others/Irq'),
    13:() => require( '@/services/instructions/others/MovBRegXX'),
    14:() => require( '@/services/instructions/others/MovWRegXRegYXX'),
    15:() => require( '@/services/instructions/others/Halt')
  },

  [JUMP_GROUP]: {
    0: () => require('@/services/instructions/jmp/JXX'),
    1: () => require('@/services/instructions/jmp/JzXX'),
    2: () => require('@/services/instructions/jmp/JnzXX'),
    3: () => require('@/services/instructions/jmp/JcXX'),
    4: () => require('@/services/instructions/jmp/JncXX'),
    5: () => require('@/services/instructions/jmp/JoXX'),
    6: () => require('@/services/instructions/jmp/JnoXX'),
    7: () => require('@/services/instructions/jmp/JpXX'),
    8: () => require('@/services/instructions/jmp/JnpXX'),
    9: () => require('@/services/instructions/jmp/JgXX'),
    10: () => require('@/services/instructions/jmp/JseXX')
  },

  [CALL_GROUP]: {
    0: () => require('@/services/instructions/call/CallXX'),
    1: () => require('@/services/instructions/call/CallZXX'),
    2: () => require('@/services/instructions/call/CallNzXX'),
    3: () => require('@/services/instructions/call/CallCXX'),
    4: () => require('@/services/instructions/call/CallNcXX'),
    5: () => require('@/services/instructions/call/CallOXX'),
    6: () => require('@/services/instructions/call/CallNoXX'),
    7: () => require('@/services/instructions/call/CallPXX'),
    8: () => require('@/services/instructions/call/CallNpXX'),
    9: () => require('@/services/instructions/call/CallGXX'),
    10: () => require('@/services/instructions/call/CallSeXX')
  },

  [LOAD_STORE_GROUP]: {
    0: 'LD_S_REGX_MREGY',
    1: 'LD_S_REG_MXX',
    2: 'LD_S_REGX_MREGY_XX',
    3: 'LD_B_REGX_MREGY',
    4: 'LD_B_REG_MXX',
    5: 'LD_B_REGX_MREGY_XX',
    8: 'ST_S_MREGX_REGY',
    9: 'ST_S_MXX_REG',
    10: 'ST_S_MREGX_XX_REGY',
    11: 'ST_B_MREGX_REGY',
    12: 'ST_B_MXX_REG',
    13: 'ST_B_MREGX_XX_REGY'
  },

  [ADD_SUB_GROUP]: {
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
