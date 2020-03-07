import React, {useState, useEffect, useContext} from "react"
import ApplicationContext from '@/context/Context'

const BINARY_CONVERSION = ['f']
const LABELS_FOR_FLAGS = {
  f: 'POCZ'
}

export default function RegistersAndFlagsComponent () {
  const { state } = useContext(ApplicationContext);

  function getLabel (contextKey) {
    return (LABELS_FOR_FLAGS.hasOwnProperty(contextKey) ? LABELS_FOR_FLAGS[contextKey] : contextKey).toUpperCase()
  }

  function getValueOfContextKey(contextKey) {
    if (BINARY_CONVERSION.includes(contextKey)) {
      return state.context[contextKey].toString(2)
    }

    return state.context[contextKey].toString(16)
  }

  return (
    <div className='horizontal-alignment flex-wrap'>
      {Object.keys(state.context).map((contextKey, index) => (
        <div key={index} className="vertical-alignment flag-style">
          <span> {getLabel(contextKey)} </span>
          <span> {getValueOfContextKey(contextKey)} </span>
        </div>
      ))}
    </div>
  )
}
