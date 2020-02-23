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
  DIV_B: 18,
  FADD: 28,
  FSUB: 29,
  FMUL: 30,
  FDIV: 31
}

export const INSTRUCTIONS_TYPES_NAMES = {
  [INSTRUCTION_TYPES.ADD_S]: "add.s ",
  [INSTRUCTION_TYPES.SUB_S]: "sub.s ",
  [INSTRUCTION_TYPES.AND_S]: "and.s ",
  [INSTRUCTION_TYPES.OR_S]: "or.s ",
  [INSTRUCTION_TYPES.XOR_S]: "xor.s ",
  [INSTRUCTION_TYPES.SHL_S]: "shl.s ",
  [INSTRUCTION_TYPES.SHR_S]: "shr.s ",
  [INSTRUCTION_TYPES.MUL_S]: "mul.s ",
  [INSTRUCTION_TYPES.DIV_S]: "div.s ",
  [INSTRUCTION_TYPES.ADD_B]: "add.b ",
  [INSTRUCTION_TYPES.SUB_B]: "sub.b ",
  [INSTRUCTION_TYPES.AND_B]: "and.b ",
  [INSTRUCTION_TYPES.OR_B]: "or.b ",
  [INSTRUCTION_TYPES.XOR_B]: "xor.b ",
  [INSTRUCTION_TYPES.SHL_B]: "shl.b ",
  [INSTRUCTION_TYPES.SHR_B]: "shr.b ",
  [INSTRUCTION_TYPES.MUL_B]: "mul.b ",
  [INSTRUCTION_TYPES.DIV_B]: "div.b ",
  [INSTRUCTION_TYPES.ADD_W]: "add.w ",
  [INSTRUCTION_TYPES.SUB_W]: "sub.w ",
  [INSTRUCTION_TYPES.AND_W]: "and.w ",
  [INSTRUCTION_TYPES.OR_W]: "or.w ",
  [INSTRUCTION_TYPES.XOR_W]: "xor.w ",
  [INSTRUCTION_TYPES.SHL_W]: "shl.w ",
  [INSTRUCTION_TYPES.SHR_W]: "shr.w ",
  [INSTRUCTION_TYPES.MUL_W]: "mul.w ",
  [INSTRUCTION_TYPES.DIV_W]: "div.w ",
  [INSTRUCTION_TYPES.FADD]: "fadd ",
  [INSTRUCTION_TYPES.FSUB]: "fsub ",
  [INSTRUCTION_TYPES.FMUL]: "fmul ",
  [INSTRUCTION_TYPES.FDIV]: "fdiv "
}

export const INSTRUCTIONS = {
  [OTHERS_GROUP]: {
    0: {class: () => import('@/services/instructions/others/Nop') },
    1: {class: () => import('@/services/instructions/others/MovWRegXRegY') },
    2: {class: () => import('@/services/instructions/others/MovSRegXX') },
    3: {class: () => import('@/services/instructions/others/InRegXX') },
    4: {class: () => import('@/services/instructions/others/OutXXReg') },
    5: {class: () => import('@/services/instructions/others/PushReg') },
    6: {class: () => import('@/services/instructions/others/PushXX') },
    7: {class: () => import('@/services/instructions/others/PopReg') },
    8: {class: () => import('@/services/instructions/others/Ret') },
    9: {class: () => import('@/services/instructions/others/IRet') },
    10:{class: () => import( '@/services/instructions/others/SwapRegXRegY') },
    11:{class: () => import( '@/services/instructions/others/MovWRegXX') },
    12:{class: () => import( '@/services/instructions/others/Irq') },
    13:{class: () => import( '@/services/instructions/others/MovBRegXX') },
    14:{class: () => import( '@/services/instructions/others/MovWRegXRegYXX') },
    15:{class: () => import( '@/services/instructions/others/Halt') }
  },

  [JUMP_GROUP]: {
    0: {class: () => import('@/services/instructions/jmp/JXX')},
    1: {class: () => import('@/services/instructions/jmp/JzXX')},
    2: {class: () => import('@/services/instructions/jmp/JnzXX')},
    3: {class: () => import('@/services/instructions/jmp/JcXX')},
    4: {class: () => import('@/services/instructions/jmp/JncXX')},
    5: {class: () => import('@/services/instructions/jmp/JoXX')},
    6: {class: () => import('@/services/instructions/jmp/JnoXX')},
    7: {class: () => import('@/services/instructions/jmp/JpXX')},
    8: {class: () => import('@/services/instructions/jmp/JnpXX')},
    9: {class: () => import('@/services/instructions/jmp/JgXX')},
    10: {class: () => import('@/services/instructions/jmp/JseXX')},
    15: {class : () => import('@/services/instructions/jmp/JrReg')}
  },

  [CALL_GROUP]: {
    0: {class: () => import('@/services/instructions/call/CallXX')},
    1: {class: () => import('@/services/instructions/call/CallZXX')},
    2: {class: () => import('@/services/instructions/call/CallNzXX')},
    3: {class: () => import('@/services/instructions/call/CallCXX')},
    4: {class: () => import('@/services/instructions/call/CallNcXX')},
    5: {class: () => import('@/services/instructions/call/CallOXX')},
    6: {class: () => import('@/services/instructions/call/CallNoXX')},
    7: {class: () => import('@/services/instructions/call/CallPXX')},
    8: {class: () => import('@/services/instructions/call/CallNpXX')},
    9: {class: () => import('@/services/instructions/call/CallGXX')},
    10: {class: () => import('@/services/instructions/call/CallSeXX')}
  },

  [LOAD_STORE_GROUP]: {
    0: {class: () => import('@/services/instructions/loadstore/LdSRegXMRegY')},
    1: {class: () => import('@/services/instructions/loadstore/LdSRegMXX')},
    2: {class: () => import('@/services/instructions/loadstore/LdSRegXMRegYXX')},
    3: {class: () => import('@/services/instructions/loadstore/LdBRegXMRegY')},
    4: {class: () => import('@/services/instructions/loadstore/LdBRegMXX')},
    5: {class: () => import('@/services/instructions/loadstore/LdBRegXMRegYXX')},
    8: {class: () => import('@/services/instructions/loadstore/StSMRegXRegY')},
    9: {class: () => import('@/services/instructions/loadstore/StSMXXReg')},
    10: {class: () => import('@/services/instructions/loadstore/StSMRegXXXRegY')},
    11: {class: () => import('@/services/instructions/loadstore/StBMRegXRegY')},
    12: {class: () => import('@/services/instructions/loadstore/StBMXXReg')},
    13: {class: () => import('@/services/instructions/loadstore/StBMRegXXXRegY')}
  },

  [ADD_SUB_GROUP]: {
    0: {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.ADD_W},
    1: {class: () => import('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.ADD_S},
    2: {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.ADD_W},
    3: {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.ADD_S},
    4: {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.ADD_B},
    7: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.MUL_W},
    8: {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.SUB_W},
    9: {class: () => import('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.SUB_S},
    10: {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.SUB_W},
    11: {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.SUB_S},
    12: {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.SUB_B}
  },

  [AND_OR_GROUP]: {
    0: {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.AND_W},
    1: {class: () => import('@/services/instructions/alu/AluSRegXX'),type: INSTRUCTION_TYPES.AND_S},
    2: {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.AND_W},
    3: {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.AND_S},
    4: {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.AND_B},
    6: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.SHR_W},
    7: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.MUL_W},
    8: {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.OR_W},
    9: {class: () => import('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.OR_S},
    10: {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.OR_W},
    11: {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.OR_S},
    12: {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.OR_B}
  },

  [XOR_NEG_GROUP]: {
    0: {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.XOR_W},
    1: {class: () => import('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.XOR_S},
    2: {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.XOR_W},
    3: {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.XOR_S},
    4: {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.XOR_B},
    8: {class: () => import('@/services/instructions/alu/NegWReg') },
    10: {class: () => import('@/services/instructions/alu/NegWMreGXX') },
    11: {class: () => import('@/services/instructions/alu/NegSMRegXX') },
    12: {class: () => import('@/services/instructions/alu/NegBMRegXX') }
  },

  [SHL_SHR_GROUP]: {
    0:  {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.SHL_W},
    1:  {class: () => import('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.SHL_S},
    2:  {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.SHL_W},
    3:  {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.SHL_S},
    4:  {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.SHL_B},
    8:  {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.SHR_W},
    9:  {class: () => import('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.SHR_S},
    10:  {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.SHR_W},
    11:  {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.SHR_S},
    12:  {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.SHR_B}
  },

  [MUL_DIV_GROUP]: {
    0:  {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.MUL_W },
    1:  {class: () => import('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.MUL_S },
    2:  {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.MUL_W },
    3:  {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.MUL_S },
    4:  {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.MUL_B },
    8:  {class: () => import('@/services/instructions/alu/AluWRegXRegY'), type: INSTRUCTION_TYPES.DIV_W },
    9:  {class: () => import('@/services/instructions/alu/AluSRegXX'), type: INSTRUCTION_TYPES.DIV_S },
    10:  {class: () => import('@/services/instructions/alu/AluWRegXMRegYXX'), type: INSTRUCTION_TYPES.DIV_W },
    11:  {class: () => import('@/services/instructions/alu/AluSRegXMRegYXX'), type: INSTRUCTION_TYPES.DIV_S },
    12:  {class: () => import('@/services/instructions/alu/AluBRegXMRegYXX'), type: INSTRUCTION_TYPES.DIV_B }
  },

  [INC_DEC_GROUP]: {
    0: {class: () => import('@/services/instructions/incdec/IncWReg')},
    1: {class: () => import('@/services/instructions/incdec/IncSMReg')},
    2: {class: () => import('@/services/instructions/incdec/IncWMRegXX')},
    3: {class: () => import('@/services/instructions/incdec/IncSMRegXX')},
    4: {class: () => import('@/services/instructions/incdec/IncBMRegXX')},
    6: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.SHR_W},
    8: {class: () => import('@/services/instructions/incdec/DecWReg')},
    9: {class: () => import('@/services/instructions/incdec/DecSMReg')},
    10: {class: () => import('@/services/instructions/incdec/DecWMRegXX')},
    11: {class: () => import('@/services/instructions/incdec/DecSMRegXX')},
    12: {class: () => import('@/services/instructions/incdec/DecBMRegXX')}
  },

  [CMP_INV_GROUP]: {
    0: {class: () => import('@/services/instructions/cmpinv/CmpWRegXRegY')},
    1: {class: () => import('@/services/instructions/cmpinv/CmpSRegXX')},
    2: {class: () => import('@/services/instructions/cmpinv/CmpWRegXMRegYXX')},
    3: {class: () => import('@/services/instructions/cmpinv/CmpSRegXMRegYXX')},
    4: {class: () => import('@/services/instructions/cmpinv/CmpBRegXMRegYXX')},
    8: {class: () => import('@/services/instructions/cmpinv/InvWReg')},
    10: {class: () => import('@/services/instructions/cmpinv/InvWMRegXX')},
    11: {class: () => import('@/services/instructions/cmpinv/InvSMRegXX')},
    12: {class: () => import('@/services/instructions/cmpinv/InvBMRegXX')}
  },

  [FLOATING_POINT_GROUP]: {
    2: {class: () => import('@/services/instructions/floatingpoint/FloatRegXRegY'), type: INSTRUCTION_TYPES.FADD },
    3: {class: () => import('@/services/instructions/floatingpoint/FloatRegXRegY'), type: INSTRUCTION_TYPES.FSUB },
    4: {class: () => import('@/services/instructions/floatingpoint/FloatRegXRegY'), type: INSTRUCTION_TYPES.FMUL },
    5: {class: () => import('@/services/instructions/floatingpoint/FloatRegXRegY'), type: INSTRUCTION_TYPES.FDIV },
    7: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.MUL_W}
  },

  [LD_ST_GROUP]: {
    0: { class: () => import('@/services/instructions/loadstore/LdWRegXMRegY') },
    1: { class: () => import('@/services/instructions/loadstore/LdWRegMXX') },
    2: { class: () => import('@/services/instructions/loadstore/LdWRegXMRegYXX') },
    3: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.OR_W},
    4: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.XOR_W},
    6: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.SHR_W},
    7: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.MUL_W},
    8: { class: () => import('@/services/instructions/loadstore/StWMRegXRegY') },
    9: { class: () => import('@/services/instructions/loadstore/StWMXXReg') },
    10: { class: () => import('@/services/instructions/loadstore/StWMRegXXXRegY') }
  },

  [ALU_CMP_W_GROUP]: {
    0: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.ADD_W},
    1: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.SUB_W},
    2: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.AND_W},
    3: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.OR_W},
    4: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.XOR_W},
    5: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.SHL_W},
    6: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.SHR_W},
    7: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.MUL_W},
    8: { class: () => import('@/services/instructions/alu/AluWRegXX'), type: INSTRUCTION_TYPES.DIV_W},
    9: { class: () => import('@/services/instructions/cmpinv/CmpWRegXX')}
  },

  [ALU_CMP_B_GROUP]: {
    0: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.ADD_B},
    1: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.SUB_B},
    2: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.AND_B},
    3: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.OR_B},
    4: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.XOR_B},
    5: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.SHL_B},
    6: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.SHR_B},
    7: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.MUL_B},
    8: { class: () => import('@/services/instructions/alu/AluBRegXX'), type: INSTRUCTION_TYPES.DIV_B},
    9: { class: () => import('@/services/instructions/cmpinv/CmpBRegXX')}
  }
};
