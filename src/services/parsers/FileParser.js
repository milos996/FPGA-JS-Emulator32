import { MEMORY_SIZE, FILE_EXTENSIONS } from '../../constants/general';

class FileParser {
  async parse(file) {

    if (file === null) {
      return { data: null }
    }

   const extension = file.name.split('.').pop();

    if (extension === FILE_EXTENSIONS.ASM) {
      return await this.asmParse(file);
    }

    if (extension === FILE_EXTENSIONS.BIN) {
      return await this.binParse(file)
    }

    if (extension === FILE_EXTENSIONS.SYM) {
      return await this.symParse(file)
    }
  }

  asmParse(file) {
    // TODO Not working
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();

        reader.onload = e => {
          const buffer = reader.result;

          //TODO: Check this, how it works
          let memory = Array(MEMORY_SIZE).fill(0);

          let words = buffer.split(' ');
          let address = 0;
          for (let i = 0; i < words.length; i++) {
            const word = words[i];
            memory[address++] = parseInt(word, 16);
          }

          resolve({ data: memory })
        }

        reader.readAsText(file);
      } catch (error) {
        reject({ error })
      }
    })
  }

  binParse (file) {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();

        reader.onload = e => {
          const buffer = reader.result;
          const int32View = new Int8Array(buffer);

          let memory = Array(MEMORY_SIZE).fill(0);
          let t, t1, t2;

          for (let i = 0; i < memory.length / 2; i++) {
            t1 = int32View[i * 2];

            if (t1 < 0) {
              t1 = 256 + t1;
            }

            t = t1 << 8;

            t2 = int32View[i * 2 + 1];

            if (t2 < 0) {
              t2 = 256 + t2;
            }

            t += t2;

            memory[i] = t;
          }

          resolve({ data: memory })
        };

        reader.readAsArrayBuffer(file);
      } catch (error) {
        reject({ error })
      }
    })
  }

  symParse (file) {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();

        reader.onload = e => {
          const lines = reader.result.split('\n')

          let map = {}

          for (let index = 0; index < lines.length; index++) {
            const element = lines[index];

            if (element.trim() === '') {
              continue
            }

            const splitParts = element.split('=')

            map[splitParts[1].trim()] = splitParts[0].trim()
          }

          resolve({ data: map })
        };

        reader.readAsText(file);
      } catch (error) {
        reject({ error })
      }
    })
  }
}

const fileParser = new FileParser();
export default fileParser;
