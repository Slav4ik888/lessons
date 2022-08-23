const board = document.getElementById('board')
const SQUARES_NUMBER = 768
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.addEventListener('mouseup', () => {
        setElement(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.transform = 'scale(0, 0)'
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
function setElement(element) {
    if (element.style.transform = 'scale(0, 0)') {
        element.style.transform = 'scale(1, 1)'
        element.style.backgroundColor = 'rgb(68, 38, 27)'
        element.style.boxShadow = `0 0 2px #000`
    }
}
