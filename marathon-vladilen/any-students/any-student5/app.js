// constants
const AREA_MAX_WIDTH = 400
const SQUARES_NUMBER = 200
const SQUARE_SIZE = 16
const SQUARE_MARGIN = 2
const BALL_POSITION = [0, 0]

const columns = AREA_MAX_WIDTH / (SQUARE_SIZE + (2 * SQUARE_MARGIN))
const rows = SQUARES_NUMBER / columns
const directions = ['straight', 'right', 'left']

const colors = ['blue', 'red', 'green', 'yellow', 'purple']

// generate general styles
document.querySelector('.container').style.maxWidth = `${AREA_MAX_WIDTH}px`

// generate area
const board = document.querySelector('#board')

const button = document.querySelector('#button')
button.addEventListener('click', () => animateBall())

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.style.width = `${SQUARE_SIZE}px`
  square.style.height = `${SQUARE_SIZE}px`
  square.style.margin = `${SQUARE_MARGIN}px`
  square.classList.add('square')

  board.append(square)
}

// generate basic position of skate
const squares = document.querySelectorAll('.square')
const skateSize = Math.round(columns / 4) > 3 ? Math.round(columns / 4) : 3 // minimum 3
let leftMargin = Math.floor((columns - skateSize) / 2)

for (let position = leftMargin; position < leftMargin + skateSize; position++) {
  setColor(squares[(rows - 1) * columns + position])
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && leftMargin > 0) {
    leftMargin--
    removeColor(squares[(rows - 1) * columns + leftMargin + skateSize])
    setColor(squares[(rows - 1) * columns + leftMargin])
  } else if (e.key === 'ArrowRight' && (leftMargin + skateSize) < columns) {
    removeColor(squares[(rows - 1) * columns + leftMargin])
    setColor(squares[(rows - 1) * columns + leftMargin + skateSize])
    leftMargin++
  }
})

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function animateBall(previousPosition, direction = 'straight', fall = true, timeout = 200) {
  if (!previousPosition) {
    button.classList.add('hidden')
    const randomPosition = Math.floor(Math.random() * columns)
    setColor(squares[randomPosition])
    animateBall([randomPosition, 0])
  } else {

    let axisX = previousPosition[0]
    let axisY = previousPosition[1]
    let currentFall = fall
    let currentDirection = direction

    if (fall && axisY !== rows - 1) {
      axisY++
    } else if (fall) {
      const isSkate = axisX >= leftMargin && axisX < leftMargin + skateSize
      if (!isSkate) {
        alert('Loser!')
        removeColor(squares[(previousPosition[1] * columns + previousPosition[0])])
        button.classList.remove('hidden')
        return
      }
      currentFall = !fall
      axisY--

      if (axisX <= leftMargin + 1) {
        currentDirection = 'left'
      } else if (axisX >= leftMargin + skateSize - 2) {
        currentDirection = 'right'
      } else {
        const randomNumber = Math.floor(Math.random() * directions.length)
        currentDirection = directions[randomNumber]
      }
    } else if (!fall && axisY !== 0) {
      axisY--
    } else if (!fall) {
      axisY++
      currentFall = !fall
    }

    if (direction === 'left' && axisX !== 0) {
      axisX--
    } else if (direction === 'left') {
      axisX++
      currentDirection = 'right'
    } else if (direction === 'right' && axisX !== columns - 1) {
      axisX++
    } else if (direction === 'right') {
      axisX--
      currentDirection = 'left'
    }

    if (currentFall === fall || axisY > previousPosition[1]) {
      removeColor(squares[(previousPosition[1] * columns + previousPosition[0])])
    }

    setColor(squares[(axisY * columns) + axisX])

    setTimeout(() => {
      animateBall([axisX, axisY], currentDirection, currentFall, timeout - 1)
    }, timeout)
  }
}


const removeColor = (element) => {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
