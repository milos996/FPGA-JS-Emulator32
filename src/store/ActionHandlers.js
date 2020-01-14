export function SET_MEMORY_HANDLER (currState, payload) {
  return {
    ...currState,
    memory: payload
  };
}

export function SET_INSTRUCTIONS_HANDLER (
  currState,
  { lines, addressInstruction }
) {
  return {
    ...currState,
    lines,
    addressInstruction
  };
}

export function SET_CONTEXT_HANDLER (currState, context) {
  return {
    ...currState,
    context: {
      ...currState.context,
      ...context
    }
  }
}