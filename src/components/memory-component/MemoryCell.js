import React from 'react'
import { convertToHexNumber } from '@/utils/general'

export default function MemoryCell({ columnIndex, rowIndex, style, memory }) {
  let content = null

  if (columnIndex === 0) {
    content = (4 * rowIndex) * 2
  } else {
    const index = (4 * rowIndex) - 1 + columnIndex
    content = memory.length > index  ? memory[index] : 0
  }

  return (
    <div style={style}>
      {convertToHexNumber(content)}
    </div>
  )
}
