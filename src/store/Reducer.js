import * as ActionHandlers from './ActionHandlers';
import * as Actions from './Actions';

export const initialState = {
  memory: [],
  lines: [],
  addressInstruction: {}
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
  [Actions.SET_INSTRUCTIONS]: ActionHandlers.SET_INSTRUCTIONS_HANDLER
};
