import React, { useContext, useEffect } from 'react';
import ApplicationContext from '@/context/Context';
import { cpuParser } from '@/services/cpu/CpuParser';
import { SET_INSTRUCTIONS } from '@/store/Actions';

export default function InstructionsComponent() {
  const { dispatch, state } = useContext(ApplicationContext);

  useEffect(() => {
    async function parseInstructions() {
      if ((state.hasSymbolTable && Object.keys(state.symbolTable).length) || !state.hasSymbolTable) {
        const instructionsSet = await cpuParser.parse(state.memory, state.symbolTable);

        dispatch({ type: SET_INSTRUCTIONS, payload: instructionsSet });
      }
    }

    if (state.memory.length > 0) {
      parseInstructions()
    }

  }, [state.memory, state.symbolTable])
  return <div></div>;
}
