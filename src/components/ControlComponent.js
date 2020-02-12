import React, { useState, useEffect, useContext } from 'react';
import fileParser from '@/services/parsers/FileParser';
import { cpuParser } from '@/services/cpu/CpuParser'
import cpuEngine from '@/services/cpu/CpuEngine';
import ApplicationContext from '@/context/Context';
import { SET_MEMORY, SET_CONTEXT, SET_INSTRUCTIONS } from '@/store/Actions';

export default function ControlComponent() {
  const [file, setFile] = useState(null);
  const { dispatch, state } = useContext(ApplicationContext);


  function handleUploadFile(input) {
    const fileInput = input.currentTarget;

    const files = fileInput.files;

    setFile(files[0]);
  }

  function handleStart() {
    const { memory, context } = cpuEngine.run()
    dispatch({ type: SET_MEMORY, payload: memory})
    dispatch({type: SET_CONTEXT, payload: context})
  }

  useEffect(() => {
    async function parseFile() {
      if (file) {
        const { data } = await fileParser.parse(file);
        console.log({ data })

        dispatch({ type: SET_MEMORY, payload: data });
      }
    }

    parseFile();
  }, [file]);

  useEffect(() => {
    console.log(state.memory);

    if (state.memory.length > 0) {
      const instructionsSet = cpuParser.parse(state.memory, state.symbolTable);

      dispatch({ type: SET_INSTRUCTIONS, payload: instructionsSet });
    }

  }, [state.memory])

  return (
    <div>
      <input
        type='file'
        id='avatar'
        name='avatar'
        onChange={handleUploadFile}
        multiple={false}
      />
      <button onClick={handleStart}>Start</button>
      <ul>
        {state.memory.slice(0, 1000).map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
}
