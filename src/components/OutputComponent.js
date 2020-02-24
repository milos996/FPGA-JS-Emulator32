import React, {useState, useEffect, useContext} from "react"
import ApplicationContext from '@/context/Context'
import { OUTPUT_MODES } from '@/constants/general'
import { COLORS_MAPPER, COLORS, BLACK, WHITE} from '@/constants/output'


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
  // Array.apply is meant to be used for some kind of optimization but doesn't work as expected.
  // It slows down the process even more, especially because number of elements are greater then 10000
  const [output, setOutput] = useState(
    Array.apply(null, Array(0)).map(
      (el, index) => (
        {
          address: index,
          value: " ",
          foregroundColor: COLORS[BLACK],
          backgroundColor: COLORS[WHITE]
        }
      )
    )
  )
  const { dispatch, state } = useContext(ApplicationContext);

  useEffect(() => {
    function updateOutput() {
      console.log('address: ' + state.outputPayload.address + ' ,content: ' + state.outputPayload.content);

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
        ])
        return
      }

      setOutput([
        ...output,
        {
          address: state.outputPayload.address,
          ...calculatedValueWithColors
        }
      ])

    }

    !!state.outputPayload && updateOutput()
  }, [state.outputPayload])

  return (
    <div className="output">
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
