import React, { useContext } from "react"
import { FixedSizeGrid as Grid } from 'react-window';
import ApplicationContext from '@/context/Context'
import MemoryCell from '@/components/memory-component/MemoryCell';

const GRID_HEADERS = ['Address', '0-1', '2-3', '4-5', '6-7']

export default function MemoryComponent() {
  const { state } = useContext(ApplicationContext);

  return <div>
    <h2 style={{
      textAlign: 'center'
    }}>Memory</h2>
    <div>
    <div
      style={{
        height: 30,
        width: 400,
        display: 'flex',
        borderBottom: 'black solid 1px'
      }}
    >
      {GRID_HEADERS.map((header, index) => (
        <span
          key={index}
          style={{
            width: 80
          }}
        >
          {header}
        </span>
      ))}

    </div>
    <Grid
      columnCount={5}
      columnWidth={80}
      height={400}
      rowCount={200000/4}
      rowHeight={30}
      width={400}
    >
      {(gridProps) => <MemoryCell memory={state.memory} {...gridProps}/>}
    </Grid>
    </div>
  </div>
}
