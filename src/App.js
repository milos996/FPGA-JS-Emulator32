import React, { useState } from "react"
import HomePage from "./pages/HomePage"

const initialState = {}

const StoreContext = React.createContext(initialState)

function App() {
  return (
    <div>
      <StoreContext.Provider>
        <HomePage />
      </StoreContext.Provider>
    </div>
  )
}

export default App
