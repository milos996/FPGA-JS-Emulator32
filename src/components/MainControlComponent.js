import React, { useState, useEffect } from "react"
import fileParser from "../services/parsers/FileParser"

export default function ControlComponent() {
  const [memory, setMemory] = useState([])
  const [file, setFile] = useState(null)

  function handleUploadFile(input) {
    const fileInput = input.currentTarget

    const files = fileInput.files

    setFile(files[0])
  }

  useEffect(() => {
    async function parseFile() {
      const memory = await fileParser.parse(file)
      setMemory(memory)
    }

    parseFile()
  }, [file])

  return (
    <div>
      <input
        type="file"
        id="avatar"
        name="avatar"
        onChange={handleUploadFile}
        multiple={false}
      ></input>
      <ul>
        {memory.slice(0, 1000).map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  )
}
