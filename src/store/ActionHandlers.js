export function SET_MEMORY_HANDLER(currState, payload) {
  return {
    ...currState,
    memory: payload
  };
}

export function SET_INSTRUCTIONS_HANDLER(
  currState,
  { lines, addressInstruction }
) {
  return {
    ...currState,
    lines,
    addressInstruction
  };
}
