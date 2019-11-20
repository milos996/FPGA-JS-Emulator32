import React, { useState } from "react"
import HomePage from "./pages/HomePage"

function App() {
  const [globalState, setGlobalStat] = useState({})

  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
