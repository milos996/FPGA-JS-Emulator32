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