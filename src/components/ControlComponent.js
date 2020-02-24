import React, { useState, useEffect, useContext } from 'react';
import fileParser from '@/services/parsers/FileParser';
import { cpuParser } from '@/services/cpu/CpuParser'
import cpuEngine from '@/services/cpu/CpuEngine';
import ApplicationContext from '@/context/Context';
import { SET_MEMORY, SET_CONTEXT, SET_INSTRUCTIONS, UPDATE_OUTPUT } from '@/store/Actions';

export default function ControlComponent() {
  const [file, setFile] = useState(null);
  const { dispatch, state } = useContext(ApplicationContext);


  function handleUploadFile(input) {
    const fileInput = input.currentTarget;

    const files = fileInput.files;

    setFile(files[0]);
  }

  async function handleStart() {
    cpuEngine.inject(state.memory, state.lines, state.addressInstruction)

    // let running = true

    runnn()
		// while (running) {
    //   setTimeout( async () => {
    //     const {
    //       shouldRunAgain,
    //       instructionResponse,
    //       context,
    //       memory
    //     } = cpuEngine.run()

    //     await dispatch({ type: SET_MEMORY, payload: memory})
    //     await dispatch({type: SET_CONTEXT, payload: context})

    //     instructionResponse.content || instructionResponse.content === 0 && await dispatch({ type: UPDATE_OUTPUT, payload: instructionResponse })

    //     running = shouldRunAgain
    //   },1000);
		// }
  }

  async function runnn() {

    // TIMEOUT IS USED BECAUSE IF YOU WANT TO SEE IMMEDIATE OUTPUT YOU NEED TO DELAY FOR CERTAIN PERIOD
    // SO VIEW COULD RE-RENDER THE DOM. THIS SLOWS THE PROCESS. IF YOU WANT TO GET OUTPUT FASTER WITHOUT IMMEDIATE
    // OUTPUT RESPONSE THEN JUST COMMENT LINES 51. AND 67.
    setTimeout( async () => {
      const {
        shouldRunAgain,
        instructionResponse,
        context,
        memory
      } = cpuEngine.run()

      await dispatch({ type: SET_MEMORY, payload: memory})
      await dispatch({type: SET_CONTEXT, payload: context})

      if (instructionResponse.content ) {
        await dispatch({ type: UPDATE_OUTPUT, payload: instructionResponse })
      }

      shouldRunAgain && runnn()
    });
  }

  useEffect(() => {
    async function parseFile() {
      if (file) {
        const { data } = await fileParser.parse(file);

        dispatch({ type: SET_MEMORY, payload: data });
      }
    }

    parseFile();
  }, [file]);

  useEffect(() => {

    async function parseInstructions() {
     const instructionsSet = await cpuParser.parse(state.memory, state.symbolTable);

     dispatch({ type: SET_INSTRUCTIONS, payload: instructionsSet });
    }

    if (state.memory.length > 0) {
      parseInstructions()
    }

  }, [state.memory])

  return (
    <div>
      <input
        type='file'
        id='avatar'
        accept=".bin"
        name='avatar'
        onChange={handleUploadFile}
        multiple={false}
      />
      <button onClick={handleStart}>Start</button>
      {/* <ul>
        {state.memory.slice(0, 1000).map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul> */}
    </div>
  );
        }