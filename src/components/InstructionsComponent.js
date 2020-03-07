import React, { useEffect, useRef, useState , useContext} from 'react';
import { FixedSizeList as List } from 'react-window'
import ApplicationContext from '@/context/Context'
import { cpuParser } from '@/services/cpu/CpuParser';
import { SET_INSTRUCTIONS, SET_BREAKPOINTS, CLEAR_ALL_BREAKPOINTS } from '@/store/Actions';
import SingleInstruction from '@/components/instructions-component/SingleInstruction'
import { COLORS } from '@/constants/general';

const ROW_HEADER = [
  {
    isHeader: true,
    label: 'Address'
  },
  {
    isHeader: true,
    label: 'Content'
  },
  {
    isHeader: true,
    label: 'Assembler'
  }
]
const ROW_OFFSET = 8

export default function InstructionsComponent() {
  const { dispatch, state } = useContext(ApplicationContext);

  const [currentPcPointer, setCurrentPcPointer] = useState(0)
  const [areInstructionsVisible, setInstructionsVisibility] = useState(true)

  const myRef = useRef(null)

  function addInstructionBreakpoint (address) {
    dispatch({type: SET_BREAKPOINTS, payload: address})
  }

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

  useEffect(() => {
    function setCurrentPcPointerIfInstructionOutOfView() {
      const indexOfInstructions = Object.keys(state.addressInstruction).findIndex((address) => address == state.context.pc)

      if (areInstructionsVisible && ((indexOfInstructions > currentPcPointer + 4) || (indexOfInstructions  < currentPcPointer - 4))) {
        setCurrentPcPointer(indexOfInstructions + 6)
      }
    }

    setCurrentPcPointerIfInstructionOutOfView()
  }, [state.context.pc])

  useEffect(() => {
    function scrollToInstructionAtPcPointerAddress() {
      myRef.current.scrollToItem(currentPcPointer)
    }

    scrollToInstructionAtPcPointerAddress()
  }, [currentPcPointer])

  useEffect(() => {
    if (areInstructionsVisible) {
      setCurrentPcPointer(currentPcPointer  + 2)
      myRef.current.scrollToItem(currentPcPointer + 10)
    }
  }, [areInstructionsVisible])

  useEffect(() => {
    if(Object.keys(state.addressInstruction).length) {
      setCurrentPcPointer(45056/2 + 10)
      myRef.current.scrollToItem(45056/2 + 10)
    }
  }, [state.addressInstruction])

  return (
      <div>
        <div className="instruction-buttons">
          <button className="my-button" onClick={() => {
            setInstructionsVisibility((currState) => !currState)
          }}>
            {areInstructionsVisible ? 'Hide' : 'Show'} instructions
          </button>
          <button className="my-button" onClick={() => {
            dispatch({ type: CLEAR_ALL_BREAKPOINTS})
          }}>
            Clear all breakpoints
          </button>
        </div>
        {areInstructionsVisible &&
          <div
            style={{
              height: 30,
              width: 700,
              display: 'flex'
            }}
          >
            {ROW_HEADER.map((header, index) => (
              <span
                key={index}
                style={{
                  width: 233
                }}
              >
                {header.label}
              </span>
            ))}

          </div>
        }
        {areInstructionsVisible && Object.keys(state.addressInstruction) &&
        <List
          ref={myRef}
          itemData={Object.keys(state.addressInstruction)}
          itemCount={Object.keys(state.addressInstruction).length}
          height={500}
          itemSize={30}
          overscanCount={15}
          width={700}
          style={{
          border: `${COLORS.PRIMARY} solid 1px`,
          borderRadius: 5
          }}
          itemKey={(index, data) => { return data[index]}}
        >
        {({ index, data, style}) => (
          <SingleInstruction
            index={index}
            data={data}
            style={style}
            addressInstruction={state.addressInstruction}
            pc={state.context.pc}
            hasBreakpoint={state.breakpoints.includes(state.addressInstruction[data[index]].address)}
            handleCheckboxInput={() => addInstructionBreakpoint(state.addressInstruction[data[index]].address)}
            isCurrentBreakpoint={state.currentBreakpoint === state.addressInstruction[data[index]].address && state.addressInstruction[data[index]].address === state.context.pc}
          />
        )}
        </List>
        }
      </div>
    )
}
