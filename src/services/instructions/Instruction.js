import { format as formatUtil } from 'util'
import { SHORT_NUMBER } from '@/constants/general'
import { REGISTER_VALUE_NAME_MAPPER } from '@/constants/registers'
import cpuEngine from '@/services/cpu/CpuEngine'
import { convertToHexNumber } from '@/utils/general'

class Instruction {

  constructor (memory, address, source, destination, symbolTable) {
    this.argumentLength = 2
    this.content = ''
    this.argument = null
    this.symbolAddress = null
    this.addrStr = null
    this.source = null
    this.destination = null
    this.address = null
    this.opcode = null
    this.ssource = ''
    this.sdestination = ''
    this.assembler = ''

    this.isJump = false
    this.hasArgument = false

    this.address = address
    this.opcode = memory[address / 2]
    this.source = source
		this.destination = destination
		this.ssource = REGISTER_VALUE_NAME_MAPPER[source]
    this.sdestination = REGISTER_VALUE_NAME_MAPPER[destination]

    this.setContent()

    const symbols = symbolTable.hasOwnProperty(convertToHexNumber(address)) ? symbolTable[convertToHexNumber(address.toString(16))] : null

		if (symbols !== null && symbols.length > 0) {
			this.symbolAddress = symbols
			this.addrStr = formatUtil('%s (%s)', this.address.toString(16), symbols)
		} else {
			this.addrStr = formatUtil('%s', this.address.toString(16))
			this.symbolAddress = this.addrStr
		}
  }

  setContent () {
    if (!this.opcode) {
      return
    }

    if (!this.hasArgument) {
      this.content = formatUtil('%s', this.opcode.toString(16))
      return
    }

		if (this.argumentLength === 4) {
      this.content = formatUtil('%s, %s', this.opcode.toString(16), this.argument.toString(16))
      return
    }

		if (this.argumentLength === 2) {
      this.content = formatUtil('%s, %s', this.opcode.toString(16), this.argument.toString(16))
    }
  }

  exec ({ context, memory }) {
		throw Error('Execution of this instruction is not possible!')
  }

  setArgument32 (memory) {
		const w1 = memory[Math.floor((this.address + 2) / 2)]
		const w2 = memory[Math.floor((this.address + 4) / 2)]
		this.argument = Instruction.fixInt(w1, w2)
		this.hasArgument = true
		this.argumentLength = 4
  }

  setArgument8 (memory) {
    // TODO short
		const w1 = memory[Math.floor((this.address + 2) / 2)];
		this.argument = Instruction.fix8(w1);
		this.hasArgument = true;
		this.argumentLength = 2;
	}

	setArgument (memory) {
    // TODO short
    const w1 = memory[Math.floor((this.address + 2) / 2)];

		this.argument = Instruction.fix(w1);
		this.hasArgument = true;
		this.argumentLength = 2;
	}

  setAssembler(format, symbolTable) {
		if (!this.hasArgument) {
      this.assembler = format
      return
    }

    const argumentSymbol = symbolTable.hasOwnProperty(convertToHexNumber(this.argument)) ? symbolTable[convertToHexNumber(this.argument)] : null

    if (argumentSymbol && argumentSymbol.length) {
      this.assembler = formatUtil(format, argumentSymbol)
      return
    }

    this.assembler = formatUtil(format, this.argument.toString(16))
  }

  findLabel(l) {
		if (l.length === 1) {
      return 0
    }

		for (let k = this.address; k >= 0xB000; k--) {
      const instruction = cpuEngine.addressInstruction[k]

			if (instruction === null) {
        continue
      }

      for (let j = 0; j < l.length; j++) {
        const lbl = l[j]

				if (lbl.includes(instruction.symbolAddress)) {
					return j
				}
			}
    }

		for (let k = this.address; k < 90000; k++) {
			const instruction = cpuEngine.addressInstruction[k]

      if (instruction === null) {
        continue
      }

      for (let j = 0; j < l.length; j++) {
        const lbl = l[j]

				if (lbl.includes(instruction.symbolAddress)) {
					return j;
				}
			}
    }

		return -1
  }

  static markOverflow(a, b, result, context) {
		const sa = Instruction.sign(a);
		const sb = Instruction.sign(b);
    const sr = Instruction.sign(result);

		if (sa == sb & sa != sr) {
      context.f |= 0x4
			return
    }

    context.f &= 0xfffb;

  }

  //TODO: first parameter `long` -->> static markFlags(long res, int r, CpuContext ctx) {
  static markFlags(result, r, context) {
    // Z flag
    context.f = r == 0 ?
      context.f | 1 :
      context.f & 0xfffe

		// P flag
    context.f =  ((r < 0) || ((r & 0x80000000) == 1)) ?
      context.f & 0xfff7 :
      context.f | 0x8

		//TODO: long number `L` -->> if ((result & 0x100000000L) != 0) {
		// C flag
    context.f = ((result & 0x100000000) != 0) ?
      context.f | 2 :
      context.f & 0xd

	}

  static sign(a) {
    return a & 0x80000000
  }

  static neg(arg) {
    // TODO:  (int) ((0x100000000L - arg) & 0xffffffff); <<-- Conversion to int
		return (0x100000000 - arg) & 0xffffffff
	}

	static push (memory, address, content) {
		const w1 = (content >> 16)
		memory[address] = w1
		const w2 = (content & 0xFFFF)
		memory[address + 1] = w2
  }

  static pop (memory, address) {
    const c1 = memory[address]
    const c2 = memory[address + 1]

    return Instruction.fixInt(c1, c2)
  }

  static fixInt (w1, w2) {
    const i1 = w1 >= 0 ? w1 : w1 & 0xFFFF

    const i2 = w2 >= 0 ? w2 : w2 & 0xFFFF

		return (i1 << 16) | i2
  }

  static fix8(w) {
    // TODO: implement this
    // return (byte) w;
    return w & 0b11111111
	}

  static fix (w) {
    if (w < SHORT_NUMBER.MIN) {
      return w & 0xFFFF
    }

    return w & 0xFFFFFFFF
  }

  static getMemContent(context, address, realAddress, memory) {
		if (realAddress & 0x80000000 != 0) {
			switch (realAddress & 0x7FFFFFFF) {
  			//TODO: Do not have uart inside context, maybe not necessary
  			case 64: return context.uart
  			case 69: return (+(new Date()) >> 20)
        default: return 0
			}
    }

    /**
     * TODO: Short types
     *
     * short w1 = (short) (ctx.memory[addr]);
     * short w2 = (short) (ctx.memory[addr + 1]);
     */
		const w1 = memory[address]
    const w2 = memory[address + 1]

		return Instruction.fixInt(w1, w2);
	}

  // TODO: This might not work, check original method from JAVA FPGA
  static setMemContent(memory, address, value, realAddress) {
    if (value < SHORT_NUMBER.MIN || value > SHORT_NUMBER.MAX) {
      /**
       * TODO: cast to `short`
       *  memory[address] = (short) (val >> 16);
       *  memory[address + 1] = (short) (val & 0xFFFF);
       *
      */
      memory[address] = value >> 16
      memory[address + 1] = value & 0xFFFF
      return
    }

    if ((realAddress & 0x80000000) == 0) {
      memory[address] = value
      return
    }

      // TODO: -> Check if this is necessary
			// int r = realAddress & 0x7FFFFFFF;
			// switch (r) {
			// case 128:
			// 	if (val == 1)
			// 		ctx.engine.main.fbViewer.setMode(FBViewer.GRAPHICS_MODE_320_240);
			// 	else if (val == 2)
			// 		ctx.engine.main.fbViewer.setMode(FBViewer.GRAPHICS_MODE_640_480);
			// 	else
			// 		ctx.engine.main.fbViewer.setMode(FBViewer.TEXT_MODE);
			// 	break;
			// case 130:
			// 	if (val == 1) {
			// 		ctx.engine.main.fbViewer.setInverse(true);
			// 		ctx.engine.main.fbViewer.reset();
			// 	} else {
			// 		ctx.engine.main.fbViewer.setInverse(false);
			// 		ctx.engine.main.fbViewer.reset();
			// 	}
			// 	break;
			// }
  }

  static fromPort(port) {
    switch (port) {
      case 690: {
        return new Date().getTime()
      }
    }
    return 0;
  }
}

export default Instruction