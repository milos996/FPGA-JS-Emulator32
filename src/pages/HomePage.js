import React from "react"
import FlagsComponent from "../components/FlagsComponent"
import MainControlComponent from "../components/MainControlComponent"
import OutputComponent from "../components/OutputComponent"
import RegistersComponent from "../components/RegistersComponent"
import StackFrameComponent from "../components/StackFrameComponent"
import MemoryComponent from "../components/MemoryComponent"

export default function HomePage() {
  return (
    <div>
      <h1>FPGA EMULTAOR</h1>
      <MainControlComponent />
      <RegistersComponent />
      <FlagsComponent />
      <OutputComponent />
      <StackFrameComponent />
      <MemoryComponent />
    </div>
  )
}
