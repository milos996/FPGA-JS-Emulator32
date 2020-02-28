import React from 'react';
import ControlComponent from '@/components/ControlComponent';
import OutputComponent from '@/components/OutputComponent';
import RegistersAndFlagsComponent from '@/components/RegistersAndFlagsComponent';
import StackFrameComponent from '@/components/StackFrameComponent';
import MemoryComponent from '@/components/MemoryComponent';
import InstructionsComponent from '@/components/InstructionsComponent';

export default function HomePage() {
  return (
    <div>
      <h1>FPGA EMULTAOR</h1>
      <div className="horizontal-alignment">
        <div className="vertical-alignment home-part-1">
          <ControlComponent />
          <OutputComponent />
        </div>
        <div className="vertical-alignment">
          <InstructionsComponent />
          <RegistersAndFlagsComponent />
          <div className="horizontal-alignment">
            <button>Stack Frame</button>
            <button>Memory</button>
          </div>
        </div>
      </div>
      {/* <StackFrameComponent />
      <MemoryComponent /> */}
    </div>
  );
}
