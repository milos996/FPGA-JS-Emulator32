
const RED = 'red'
const WHITE = 'white'
const GREEN = 'green'
const BLUE = 'blue'
const PINK = 'pink'
const YELLOW = 'yellow'
const LIGHT_BLUE = 'light_blue'
export const BLACK = 'black'


export const COLORS = {
  [RED]: '#ff0000',
  [WHITE]: '#ffffff',
  [BLACK]: '#000000',
  [GREEN]: '#33cc33',
  [BLUE]: '#0000ff',
  [PINK]: '#ff99ff',
  [YELLOW]: '#ffff00',
  [LIGHT_BLUE]: '#00ffff',
}

const INVERSE = 1
const REGULAR = 0

export const COLORS_MAPPER = {
  [REGULAR]: {
    0: COLORS[BLACK],
    1: COLORS[RED],
    2: COLORS[GREEN],
    3: COLORS[YELLOW],
    4: COLORS[BLUE],
    5: COLORS[PINK],
    6: COLORS[LIGHT_BLUE],
    7: COLORS[WHITE]
  },
  [INVERSE]: {
    0: COLORS[WHITE],
    1: COLORS[LIGHT_BLUE],
    2: COLORS[PINK],
    3: COLORS[BLUE],
    4: COLORS[YELLOW],
    5: COLORS[GREEN],
    6: COLORS[RED],
    7: COLORS[BLACK]
  }
}