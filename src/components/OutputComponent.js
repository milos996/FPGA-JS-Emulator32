import React, {useState, useEffect, useContext} from "react"
import ApplicationContext from '@/context/Context'
import { OUTPUT_MODES } from '@/constants/general'
import { COLORS_MAPPER, COLORS, BLACK, WHITE} from '@/constants/output'
import { KEY_VALUE_MAPPER } from '@/constants/output'
import cpuEngine from '@/services/cpu/CpuEngine'
import { SET_VALUE_IN_MEMORY } from '@/store/Actions'

const MAPPER_FUNCTION_FOR_OUTPUT = {
  [OUTPUT_MODES.TEXT]: calculateResultText
}

function calculateResultText(content) {

  const foregroundColor = getTextColor((~((content >> 12) & 7))  & 0xffff);
	const backgroundColor = getTextColor(((content >> 8) & 7)  & 0xffff);

  return {
    value: (content & 0xff) !== 0 ? String.fromCharCode(content & 0xff) : " ",
    foregroundColor,
    backgroundColor
  }
}

function getTextColor(content, inverse = true) {
  const groupColor = content & 7

  try {
    return COLORS_MAPPER[inverse ? 1 : 0][groupColor]
  } catch (error) {
    return COLORS[BLACK]
  }
}

export default function OutputComponent() {
  const [output, setOutput] = useState([])
  const { dispatch, state } = useContext(ApplicationContext);

  function handleKeyUpEvent (event) {
    event.preventDefault();
    try {
      console.log(event.key);

      const keyValue = KEY_VALUE_MAPPER[event.key]

      if (!keyValue) {
        throw new Error()
      }

      if (state.memory[cpuEngine.irq2_released_address / 2] === 0) {
        return
      }

      dispatch({
        type: SET_VALUE_IN_MEMORY,
        payload: {
          address: 24,
          value: keyValue
        }
      })

      cpuEngine.irq2_pressed = false
      cpuEngine.irq2_released = true

    } catch (error) {
      console.log(`Key ${event.key} is not supported`)
    }
  }

  useEffect(() => {
    function updateOutput() {
      const calculatedValueWithColors = MAPPER_FUNCTION_FOR_OUTPUT[state.outputMode](state.outputPayload.content)
      const index = output.findIndex((element) => element.address === state.outputPayload.address)

      if (index !== -1) {
        setOutput([
          ...output.slice(0, index),
          {
            address: state.outputPayload.address,
            ...calculatedValueWithColors
          },
          ...output.slice(index + 1)
        ].sort((a, b) => a - b))
      } else {
        setOutput([
          ...output,
          {
            address: state.outputPayload.address,
            ...calculatedValueWithColors
          }
        ].sort((firstElement, secondElement) => firstElement.address - secondElement.address))
      }
    }

    !!state.outputPayload && updateOutput()
  }, [state.outputPayload])



  useEffect(() => {
    function resetOutputIfNeeded () {
      if (state.reset) {
        setOutput([])
      }
    }

    resetOutputIfNeeded()
  }, [state.reset])



  return (
    <div
      className="output"
      onKeyUp={handleKeyUpEvent}
      tabIndex={0}
    >
      {output.map((element, index) =>
        <span
          key={index}
          className="letter-spacing"
          style={{
            color: element.foregroundColor,
            backgroundColor: element.backgroundColor
          }}
        >
          {element.value}
        </span>
      )}
    </div>
  )
}
