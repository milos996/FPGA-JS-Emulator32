import React, {useState, useEffect, useContext} from "react"
import ApplicationContext from '@/context/Context'

const BINARY_CONVERSION = ['f']
const LABELS_FOR_FLAGS = {
  f: 'POCZ'
}

export default function RegistersAndFlagsComponent () {
  const { state } = useContext(ApplicationContext);

  function formatRegisterAndFlags (contextKey) {
    const label = LABELS_FOR_FLAGS.hasOwnProperty(contextKey) ? LABELS_FOR_FLAGS[contextKey] : contextKey

    if (BINARY_CONVERSION.includes(contextKey)) {
      return `${label.toUpperCase()} : ${state.context[contextKey].toString(2)}`
    }

    return `${label.toUpperCase()} : ${state.context[contextKey].toString(16)}`
  }

  return (
    <div className='vertical-alignment'>
      {Object.keys(state.context).map((contextKey, index) => (
        <span key={index}> {formatRegisterAndFlags(contextKey)} </span>
      ))}
    </div>
  )
}
