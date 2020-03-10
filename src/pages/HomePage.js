import React, { useState }  from 'react';
import ControlComponent from '@/components/ControlComponent';
import OutputComponent from '@/components/OutputComponent';
import RegistersAndFlagsComponent from '@/components/RegistersAndFlagsComponent';
import MemoryComponent from '@/components/MemoryComponent';
import Modal from 'react-modal';
import InstructionsComponent from '@/components/InstructionsComponent';
import { COLORS } from '@/constants/general';

export default function HomePage() {

  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(false)

  return (
    <div>
      <h1>FPGA EMULTAOR</h1>
      <div className="horizontal-alignment main">
        <div className="vertical-alignment home-part-1">
          <ControlComponent />
          <OutputComponent />
        </div>
        <div className="vertical-alignment">
          <RegistersAndFlagsComponent />
          <InstructionsComponent />
          <div className="horizontal-alignment">
            <button className="my-button flex-auto"
              style={{
                border: `${COLORS.PRIMARY_LIGHT} solid 1px`,
                marginTop: 5,
              }}
              onClick={() => setIsMemoryModalOpen(true)}
            >
                <strong><i>Memory</i></strong>
            </button>
          </div>
        </div>
      </div>
      <Modal
        ariaHideApp={false}
        style={{
          content : {
            top: '30%',
            left: 'auto',
            right: '10px',
            bottom: 'auto',
          }
        }}
        isOpen={isMemoryModalOpen}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => setIsMemoryModalOpen(false)}
      >
        <MemoryComponent />
      </Modal>
    </div>
  );
}
