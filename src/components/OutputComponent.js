import React, {useState, useEffect, useContext} from "react"
import ApplicationContext from '@/context/Context'
import { OUTPUT_MODES } from '@/constants/general'


const MAPPER_FUNCTION_FOR_OUTPUT = {
  [OUTPUT_MODES.TEXT]: calculateResultText
}

function calculateResultText(content) {
  return {
    value: String.fromCharCode(content)
  }
}

export default function OutputComponent() {
  const [output, setOutput] = useState([''])
  const { dispatch, state } = useContext(ApplicationContext);

  useEffect(() => {
    function updateOutput() {
      console.log({
        payload: state.outputPayload
      })

      const { value } = MAPPER_FUNCTION_FOR_OUTPUT[state.outputMode](state.outputPayload.content)

      setOutput([
        ...output,
        value
      ])
    }

    !!state.outputPayload && updateOutput()
  }, [state.outputPayload])

  return (
    <div className="output">
      <p>{output.join('')}</p>
    </div>
  )
}
