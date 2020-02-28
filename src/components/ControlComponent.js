import React, { useState, useEffect, useContext } from 'react';
import fileParser from '@/services/parsers/FileParser';
import cpuEngine from '@/services/cpu/CpuEngine';
import ApplicationContext from '@/context/Context';
import { SET_MEMORY, SET_CONTEXT, UPDATE_OUTPUT, SET_SYMBOLS, HAS_SYMBOL_TABLE } from '@/store/Actions';

export default function ControlComponent() {
  const [files, setFiles] = useState([]);
  const { dispatch, state } = useContext(ApplicationContext);


  function handleUploadFile(input) {
    const fileInput = input.currentTarget;

    const loadFiles = fileInput.files;

    setFiles(loadFiles);
    loadFiles.length > 1 && dispatch({ type: HAS_SYMBOL_TABLE, payload: true })
  }

  async function handleStart() {
    cpuEngine.inject(state.memory, state.lines, state.addressInstruction)

    run()
  }

  async function run() {
    // TIMEOUT IS USED BECAUSE IF YOU WANT TO SEE IMMEDIATE OUTPUT YOU NEED TO DELAY FOR CERTAIN PERIOD
    // SO VIEW COULD RE-RENDER THE DOM.
    setTimeout( async () => {
      const {
        shouldRunAgain,
        instructionResponse,
        context,
        memory
      } = cpuEngine.run()

      await dispatch({ type: SET_MEMORY, payload: memory})
      await dispatch({type: SET_CONTEXT, payload: context})

      if (instructionResponse.content || instructionResponse.content === 0) {
        await dispatch({ type: UPDATE_OUTPUT, payload: instructionResponse })
      }

      shouldRunAgain && run()
    });
  }

  useEffect(() => {
    async function parseFile() {
      console.log(files);

      if (files.length) {
        let binFile = files[0]
        let symFile = null

        if (files.length > 1) {
          binFile = files[0].name.includes('.bin')
            ? files[0]
            : files[1]

          symFile = files[0].name.includes('.sym')
            ? files[0]
            : files[1]
        }

        console.log(binFile);

        const { data } = await fileParser.parse(binFile);
        dispatch({ type: SET_MEMORY, payload: data });
        console.log({data});

        if (symFile) {
          const { data: symData } = await fileParser.parse(symFile)
          dispatch({ type: SET_SYMBOLS, payload: symData})
        }

        return
      }
    }

    parseFile();
  }, [files]);

  return (
    <div>
      <input
        type='file'
        id='avatar'
        accept=".bin,.sym"
        name='avatar'
        onChange={handleUploadFile}
        multiple={true}
      />
      <button onClick={handleStart}>Start</button>
    </div>
  );
        }