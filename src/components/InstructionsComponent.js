import React, { useContext, useEffect } from 'react';
import ApplicationContext from '@/context/Context';
import cpuParser from '@/services/cpu/CpuParser';
import { SET_INSTRUCTIONS } from '@/store/Actions';

export default function InstructionsComponent() {
  const { dispatch, state } = useContext(ApplicationContext);

  useEffect(() => {
    function parseMemoryToInstructions() {
      const instructionsSet = cpuParser.parse(state.memory);

      dispatch({ type: SET_INSTRUCTIONS, payload: instructionsSet });
    }

    parseMemoryToInstructions();
  }, [state.memory]);
  return <div></div>;
}
