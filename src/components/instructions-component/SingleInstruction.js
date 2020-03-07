import React from 'react'
import { convertToHexNumber } from '@/utils/general'
import { COLORS } from '@/constants/general'

export default function SingleInstruction({
  addressInstruction,
  data,
  index,
  pc,
  style,
  handleCheckboxInput,
  hasBreakpoint = false,
  isCurrentBreakpoint = false
}) {
  const instruction = addressInstruction[data[index]]

  function getBackgroundColor () {
    if (isCurrentBreakpoint) {
      return COLORS.PRIMARY_DARK
    }

    return instruction.address === pc ? COLORS.SECONDARY : '#FFFFFF'
  }

  function getColor () {
    if (isCurrentBreakpoint) {
      return COLORS.NEUTRAL
    }

    return instruction.address === pc ? COLORS.NEUTRAL : '#000000'
  }

  return (
    <div
    style={{
      height: 30,
      width: 700,
      display: 'flex',
      background: getBackgroundColor(),
      color: getColor(),
      ...style
     }}
    >
      <span
        style={{
          width: 33
        }}>
          <input
            type="checkbox"
            checked={hasBreakpoint}
            value={instruction.address}
            onChange={handleCheckboxInput}
          />
      </span>
      <span
          style={{
            width: 200
          }}
        >
           {instruction.addrStr}
        </span>
        <span
          style={{
            width: 233
          }}
        >
           { instruction.content }
        </span>
        <span
          style={{
            width: 233
          }}
        >
          { instruction.assembler }
        </span>
    </div>
  )
}
