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

const INSTRUCTIONS = {
  [OTHERS_GROUP]: {
    0: "NOP",
    1: "MOV_V_REGEX_REGY",
    2: "MOV_S_REG_XX",
    3: "IN_REG_XX",
    4: "OUT_XX_REG",
    5: "PUSH_REG",
    6: "PUSH_XX",
    7: "POP_REG",
    8: "RET",
    9: "IRET",
    10: "SWAP_REGX_REGY",
    11: "MOV_W_REG_XX",
    12: "IRQ",
    13: "MOV_B_REG_XX",
    14: "MOV_W_REGX_REGY_XX",
    15: "HALT"
  },

  [JUMP_GROUP]: {
    0: "J_XX",
    1: "JZ_XX",
    2: "JNZ_XX",
    3: "JC_XX",
    4: "JNC_XX",
    5: "JO_XX",
    6: "JNO_XX",
    7: "JP_XX",
    8: "JNP_XX",
    9: "JG_XX",
    10: "JSE_XX"
  },

  [CALL_GROUP]: {
    0: "CALL_XX",
    1: "CALLZ_XX",
    2: "CALLNZ_XX",
    3: "CALLC_XX",
    4: "CALLNC_XX",
    5: "CALLO_XX",
    6: "CALLNO_XX",
    7: "CALLP_XX",
    8: "CALLNP_XX",
    9: "CALLG_XX",
    10: "CALLSE_XX"
  },

  [LOAD_STORE_GROUP]: {
    0: "LD_S_REGX_MREGY",
    1: "LD_S_REG_MXX",
    2: "LD_S_REGX_MREGY_XX",
    3: "LD_B_REGX_MREGY",
    4: "LD_B_REG_MXX",
    5: "LD_B_REGX_MREGY_XX",
    8: "ST_S_MREGX_REGY",
    9: "ST_S_MXX_REG",
    10: "ST_S_MREGX_XX_REGY",
    11: "ST_B_MREGX_REGY",
    12: "ST_B_MXX_REG",
    13: "ST_B_MREGX_XX_REGY"
  },

  [ADD_SUB_GROUP]: {
    0: "ALU_W_REGX_REGY",
    1: "ALU_S_REG_XX",
    2: "ALU_W_REGX_MREGY_XX",
    3: "ALU_S_REGX_MREGY_XX",
    4: "ALU_B_REGX_MREGY_XX",
    8: "ALU_W_REGX_REGY",
    9: "ALU_S_REG_XX",
    10: "ALU_W_REGX_MREGY_XX",
    11: "ALU_S_REGX_MREGY_XX",
    12: "ALU_B_REGX_MREGY_XX"
  },

  [AND_OR_GROUP]: {
    0: "ALU_W_REGX_REGY",
    1: "ALU_S_REG_XX",
    2: "ALU_W_REGX_MREGY_XX",
    3: "ALU_S_REGX_MREGY_XX",
    4: "ALU_B_REGX_MREGY_XX",
    8: "ALU_W_REGX_REGY",
    9: "ALU_S_REG_XX",
    10: "ALU_W_REGX_MREGY_XX",
    11: "ALU_S_REGX_MREGY_XX",
    12: "ALU_B_REGX_MREGY_XX"
  },

  [XOR_NEG_GROUP]: {
    0: "ALU_W_REGX_REGY",
    1: "ALU_S_REG_XX",
    2: "ALU_W_REGX_MREGY_XX",
    3: "ALU_S_REGX_MREGY_XX",
    4: "ALU_B_REGX_MREGY_XX",
    8: "NEG_W_REG",
    10: "NEG_W_MREG_XX",
    11: "NEG_S_MREG_XX",
    12: "NEG_B_MREG_XX"
  },

  [SHL_SHR_GROUP]: {
    0: "ALU_W_REGX_REGY",
    1: "ALU_S_REG_XX",
    2: "ALU_W_REGX_MREGY_XX",
    3: "ALU_S_REGX_MREGY_XX",
    4: "ALU_B_REGX_MREGY_XX",
    8: "ALU_W_REGX_REGY",
    9: "ALU_S_REG_XX",
    10: "ALU_W_REGX_MREGY_XX",
    11: "ALU_S_REGX_MREGY_XX",
    12: "ALU_B_REGX_MREGY_XX"
  },

  [MUL_DIV_GROUP]: {
    0: "ALU_W_REGX_REGY",
    1: "ALU_S_REG_XX",
    2: "ALU_W_REGX_MREGY_XX",
    3: "ALU_S_REGX_MREGY_XX",
    4: "ALU_B_REGX_MREGY_XX",
    8: "ALU_W_REGX_REGY",
    9: "ALU_S_REG_XX",
    10: "ALU_W_REGX_MREGY_XX",
    11: "ALU_S_REGX_MREGY_XX",
    12: "ALU_B_REGX_MREGY_XX"
  },

  [INC_DEC_GROUP]: {
    0: "INC_W_REG",
    1: "INC_S_MREG",
    2: "INC_W_MREG_XX",
    3: "INC_S_MREG_XX",
    4: "INC_B_MREG_XX",
    8: "DEC_W_REG",
    9: "DEC_S_MREG",
    10: "DEC_W_MREG_XX",
    11: "DEC_S_MREG_XX",
    12: "DEC_B_MREG_XX"
  },

  [CMP_INV_GROUP]: {
    0: "CMP_W_REGX_REGY",
    1: "CMP_S_REG_XX",
    2: "CMP_W_REGX_MREGY_XX",
    3: "CMP_S_REGX_MREGY_XX",
    4: "CMP_B_REGX_MREGY_XX",
    8: "INV_W_REG",
    10: "INV_W_MREG_XX",
    11: "INV_S_MREG_XX",
    12: "INV_B_MREG_XX"
  },

  [FLOATING_POINT_GROUP]: {
    2: "FLOAT_REGX_REGY",
    3: "FLOAT_REGX_REGY",
    4: "FLOAT_REGX_REGY",
    5: "FLOAT_REGX_REGY"
  },

  [LD_ST_GROUP]: {
    0: "LD_W_REGX_MREGY",
    1: "LD_W_REG_MXX",
    2: "LD_W_REGX_MREGY_XX",
    8: "ST_W_MREGX_REGY",
    9: "ST_W_MXX_REG",
    10: "ST_W_MREGX_XX_REGY"
  },

  [ALU_CMP_W_GROUP]: {
    0: "ALU_W_REG_XX",
    1: "ALU_W_REG_XX",
    2: "ALU_W_REG_XX",
    3: "ALU_W_REG_XX",
    4: "ALU_W_REG_XX",
    5: "ALU_W_REG_XX",
    6: "ALU_W_REG_XX",
    7: "ALU_W_REG_XX",
    8: "ALU_W_REG_XX",
    9: "CMP_W_REG_XX"
  },

  [ALU_CMP_B_GROUP]: {
    0: "ALU_B_REG_XX",
    1: "ALU_B_REG_XX",
    2: "ALU_B_REG_XX",
    3: "ALU_B_REG_XX",
    4: "ALU_B_REG_XX",
    5: "ALU_B_REG_XX",
    6: "ALU_B_REG_XX",
    7: "ALU_B_REG_XX",
    8: "ALU_B_REG_XX",
    9: "CMP_B_REG_XX"
  }
};
