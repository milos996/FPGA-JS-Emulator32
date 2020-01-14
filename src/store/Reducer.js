import * as ActionHandlers from './ActionHandlers';
import * as Actions from './Actions';

export const initialState = {
  memory: [],
  lines: [],
  addressInstruction: {},
  symbolTable: {},
  context: {
    r0: 0,
		r1: 0,
		r2: 0,
		r3: 0,
		r4: 0,
		r5: 0,
		r6: 0,
		r7: 0,
		r8: 0,
		r9: 0,
		r10: 0,
		r11: 0,
		r12: 0,
		r13: 0,
		pc: 0,
		sp: 0,
		h: 0,
		f: 0
  }
};

export const reducer = function(state, action) {
  try {
    return ACTION_HANDLER[action.type](state, action.payload);
  } catch (error) {
    alert('there is no action with this type');
    return state;
  }
};

const ACTION_HANDLER = {
  [Actions.SET_MEMORY]: ActionHandlers.SET_MEMORY_HANDLER,
  [Actions.SET_INSTRUCTIONS]: ActionHandlers.SET_INSTRUCTIONS_HANDLER,
  [Actions.SET_CONTEXT]: ActionHandlers.SET_CONTEXT_HANDLER
};
