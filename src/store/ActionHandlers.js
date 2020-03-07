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
export function SET_OUTPUT_PAYLOAD_HANDLER (currState, outputPayload) {
  return {
    ...currState,
    outputPayload: { ...outputPayload }
  }
}

export function SET_SYMBOLS_HANDLER (currState, symbolsMapper) {
  return {
    ...currState,
    symbolTable: { ...symbolsMapper }
  }
}

export function SET_HAS_SYMBOL_TABLE_HANDLER (currState, hasSymbolTable) {
  return {
    ...currState,
    hasSymbolTable
  }
}

export function RESET_STATE_HANDLER (currState, reset) {
  return {
    ...currState,
    reset
  }
}

export const SET_CURRENT_BREAKPOINT_HANDLER = (currState, breakpointAddress) => {
  return {
    ...currState,
    currentBreakpoint: breakpointAddress
  }
}

export const SET_BREAKPOINTS_HANDLER = (currState, breakpoint) => {
  const instructionIndex = currState.breakpoints.findIndex((instructionAddress) => instructionAddress === breakpoint)

  if (instructionIndex !== -1) {
    return {
      ...currState,
      breakpoints: [
        ...currState.breakpoints.slice(0, instructionIndex),
        ...currState.breakpoints.slice(instructionIndex + 1)
      ]
    }
  }

  return {
    ...currState,
    breakpoints: [
      ...currState.breakpoints,
      breakpoint
    ]
  }
}

export const CLEAR_ALL_BREAKPOINTS_HANDLER = (currState) => {
  return {
    ...currState,
    breakpoints: []
  }
}