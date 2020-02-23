import React, {useState, useEffect, useContext} from "react"
import ApplicationContext from '@/context/Context'
import { OUTPUT_MODES } from '@/constants/general'
import { COLORS_MAPPER, COLORS, BLACK} from '@/constants/output'


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

  useEffect(() => {
    function updateOutput() {

      console.log('address: ' + state.outputPayload.address + ' ,content: ' + state.outputPayload.content);

      const calculatedValueWithColors = MAPPER_FUNCTION_FOR_OUTPUT[state.outputMode](state.outputPayload.content)

      setOutput([
        ...output,
        calculatedValueWithColors
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
