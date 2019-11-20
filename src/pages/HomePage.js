import React from "react"

export default function HomePage() {
  function handleUploadFile(input) {
    const fileInput = input.currentTarget

    // files is a FileList object (similar to NodeList)
    var files = fileInput.files

    // object for allowed media types
    var accept = {
      binary: ["image/png", "image/jpeg"],
      text: ["text/plain", "text/css", "application/xml", "text/html"]
    }

    let file = null

    for (var i = 0; i < files.length; i++) {
      file = files[i]

      // if file type could be detected
      if (file !== null) {
        // if (accept.binary.indexOf(file.type) > -1) {
        // file is a binary, which we accept
        var reader = new FileReader()
        reader.onload = (function(theFile) {
          console.log("theFIle", theFile)

          return function(e) {
            const buffer = e.target.result
            console.log(buffer)

            let int32View = new Int8Array(buffer)
            let uint32View = new Uint8Array(buffer)

            for (let i = 0; i < int32View.length; i++) {
              if (int32View[i * 2] > 0) {
                console.log("INT")

                console.log({ index: i, valL: int32View[i * 2] })
              }
            }
          }
        })(file)

        // Read in the image file as a data URL.
        reader.readAsArrayBuffer(file)

        // } else if (accept.text.indexOf(file.type) > -1) {
        // file is of type text, which we accept
        // var data = file.getAsText()
        // modify data with string methods
        // }
      }
    }
  }
  return (
    <div>
      <h1>FPGA EMULTAOR</h1>
      <input
        type="file"
        id="avatar"
        name="avatar"
        onChange={handleUploadFile}
      ></input>
    </div>
  )
}
