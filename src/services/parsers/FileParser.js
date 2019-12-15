import { MEMORY_SIZE, FILE_EXTENSIONS } from '../../constants/general';

class FileParser {
  parse(file) {
    return new Promise((resolve, reject) => {
      if (file === null) {
        reject(null);
      }

      const reader = new FileReader();

      reader.onload = e => {
        const buffer = reader.result;
        const int32View = new Int8Array(buffer);
        const extension = file.name.split('.').pop();

        if (extension === FILE_EXTENSIONS.ASM) {
          resolve(this.asmParse(int32View));
        }

        if (extension === FILE_EXTENSIONS.BIN) {
          resolve(this.binParse(int32View));
        }
      };

      reader.readAsArrayBuffer(file);
    });
  }

  asmParse(lines) {
    //TODO: Check this, how it works
    let memory = Array(MEMORY_SIZE).fill(0);

    let words = lines.split(' ');
    let addr = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      memory[addr++] = parseInt(word, 16);
      // if (EmulatorMain.DEBUG)
      //   System.out.println(addr - 1 + ": " + w + " == " + memory[addr - 1])
    }

    return memory;
  }

  binParse(buffer) {
    let memory = Array(MEMORY_SIZE).fill(0);
    let t, t1, t2;

    for (let i = 0; i < memory.length / 2; i++) {
      t1 = buffer[i * 2];

      if (t1 < 0) {
        t1 = 256 + t1;
      }

      t = t1 << 8;

      t2 = buffer[i * 2 + 1];

      if (t2 < 0) {
        t2 = 256 + t2;
      }

      t += t2;

      memory[i] = t;
    }

    return memory;
  }
}

const fileParser = new FileParser();
export default fileParser;
