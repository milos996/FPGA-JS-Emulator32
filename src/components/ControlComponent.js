import React, { useState, useEffect, useContext } from 'react';
import fileParser from '@/services/parsers/FileParser';
import cpuEngine from '@/services/cpu/CpuEngine';
import ApplicationContext from '@/context/Context';
import { SET_MEMORY, SET_CONTEXT } from '@/store/Actions';

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
      const memory = await fileParser.parse(file);
      dispatch({ type: SET_MEMORY, payload: memory });
    }

    parseFile();
  }, [file]);

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
