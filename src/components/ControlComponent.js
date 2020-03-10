import React, { useState, useEffect, useContext } from 'react';
import fileParser from '@/services/parsers/FileParser';
import cpuEngine from '@/services/cpu/CpuEngine';
import ApplicationContext from '@/context/Context';
import { SET_MEMORY, SET_CONTEXT, UPDATE_OUTPUT, SET_SYMBOLS, HAS_SYMBOL_TABLE, RESET_STATE, SET_CURRENT_BREAKPOINT } from '@/store/Actions';

export default function ControlComponent() {
  const { dispatch, state } = useContext(ApplicationContext);
  const [files, setFiles] = useState([]);
  const [iteration, setIteration] = useState(0)
  const [stopFlag, setStopFlag] = useState(() => false)
  const [startFlag, setStartFlag] = useState(() => false)
  const [stepOverFlag, setStepOverFlag] = useState(() => false)
  const [engineProcessedData, setEngineResponseData] = useState({ shouldRunAgain: true })

  function handleUploadFile(input) {
    const fileInput = input.currentTarget;

    const loadFiles = fileInput.files;

    setFiles(loadFiles);
    loadFiles.length > 1 && dispatch({ type: HAS_SYMBOL_TABLE, payload: true })
  }

  async function handleStart() {
    if (!startFlag || (startFlag && !stopFlag)) {
      cpuEngine.inject(state.memory, state.lines, state.addressInstruction, state.symbolTable)
    }

    setStartFlag(true)
    setStopFlag(false)
  }

  function handleStop () {
    setStopFlag(true)
  }

  function handleStepOver () {
    setStepOverFlag(true)
  }

  function handleReset () {
    dispatch({ type: RESET_STATE, payload: state.reset + 1 })
    setStartFlag(false)
  }

  useEffect(() => {
    async function parseFile() {
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

        const { data } = await fileParser.parse(binFile);
        dispatch({ type: SET_MEMORY, payload: data });

        if (symFile) {
          const { data: symData } = await fileParser.parse(symFile)
          dispatch({ type: SET_SYMBOLS, payload: symData})
        }

        return
      }
    }

    parseFile();
  }, [files]);

  useEffect(() => {
    async function run() {
      if (stepOverFlag) {
        setStepOverFlag(false)
      }

      if (state.currentBreakpoint !== cpuEngine.context.pc && state.breakpoints.includes(cpuEngine.context.pc) && !stepOverFlag) {
        dispatch({type: SET_CURRENT_BREAKPOINT, payload: cpuEngine.context.pc})
        setStopFlag(true)
        return
      }

      dispatch({type: SET_CURRENT_BREAKPOINT, payload: null})

      const processedEngineData = cpuEngine.run()

      await dispatch({ type: SET_MEMORY, payload: processedEngineData.memory})
      await dispatch({type: SET_CONTEXT, payload: processedEngineData.context})

      if (processedEngineData.instructionResponse.content || processedEngineData.instructionResponse.content === 0) {
        await dispatch({ type: UPDATE_OUTPUT, payload: processedEngineData.instructionResponse })
      }

      setEngineResponseData(processedEngineData)
    }


    if ((startFlag && !stopFlag && engineProcessedData.shouldRunAgain) || (stepOverFlag && engineProcessedData.shouldRunAgain)) {
      console.log('ITERATION:', iteration);

      run()
      setIteration((currState) => currState+1)
    }
  }, [startFlag, stopFlag, engineProcessedData, stepOverFlag])

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
      <button className="my-button" onClick={handleStart} disabled={!files.length}> Start </button>
      <button className="my-button" onClick={handleStop} disabled={!files.length}> Stop </button>
      <button className="my-button" onClick={handleStepOver} disabled={!files.length}> Step over </button>
      <button className="my-button" onClick={handleReset} disabled={!files.length}> Reset </button>
    </div>
  );
        }