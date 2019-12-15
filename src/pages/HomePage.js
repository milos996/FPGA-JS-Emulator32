import React from 'react';
import FlagsComponent from '@/components/FlagsComponent';
import ControlComponent from '@/components/ControlComponent';
import OutputComponent from '@/components/OutputComponent';
import RegistersComponent from '@/components/RegistersComponent';
import StackFrameComponent from '@/components/StackFrameComponent';
import MemoryComponent from '@/components/MemoryComponent';
import InstructionsComponent from '@/components/InstructionsComponent';

export default function HomePage() {
  return (
    <div>
      <h1>FPGA EMULTAOR</h1>
      <ControlComponent />
      <InstructionsComponent />
      <RegistersComponent />
      <FlagsComponent />
      <OutputComponent />
      <StackFrameComponent />
      <MemoryComponent />
    </div>
  );
}
