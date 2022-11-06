
const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', e => {
  e.preventDefault();
  if (e.code.toLowerCase() !== 'space') return
  setRandomColors();
});

document.addEventListener('click', e => {
  const
    button = e.target.closest('button')?.dataset.type,
    h2     = e.target.dataset.type;
  
  if (button === 'lock') {
    const node = e.target.tagName.toLowerCase() === 'i'
      ? e.target : e.target.children[0];

    node.classList.toggle('fa-lock-open');
    node.classList.toggle('fa-lock');
  }
  else if (h2 === 'copy') {
    copyToClickBoard(e.target.textContent);
  }
});


// FUNCTIONS

function generateRandomColor() {
  // RGB
  // Red #FF0000
  // Green #00FF00
  // Blue #0000FF

  const hexChairs = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hexChairs[Math.floor(Math.random() * hexChairs.length)];
  }

  return color
}


function getColorsByIdx(colors, idx) {
  return colors[idx] ? colors[idx] : chroma.random()
}


function setRandomColors(isInitial) {
  const colors = isInitial ? getColorsFromHash() : [];
  
  cols.forEach((col, idx) => {
    const
      color    = isInitial ? getColorsByIdx(colors, idx) : chroma.random(), // generateRandomColor(),
      h2       = col.querySelector('h2'),
      btn      = col.querySelector('button'),
      isLocked = col.querySelector('i').classList.contains('fa-lock');
    
    if (isLocked) {
      colors.push(h2.textContent)
      return;
    }

    if (!isInitial || colors.length < 5) {
      colors.push(color);
    }

    h2.textContent = color;
    col.style.background = color;

    setTextColor(h2, color);
    setTextColor(btn, color);
  });

  updateColorsHash(colors);
}


function setTextColor(node, color) {
  const luminance = chroma(color).luminance();
  node.style.color = luminance > 0.5 ? 'black' : 'white';
}


function copyToClickBoard(text) {
  return navigator.clipboard.writeText(text);
}


// HASH
function updateColorsHash(colors = []) {
  document.location.hash = colors
    .map(col => col.toString().substring(1))
    .join('-');
};


function getColorsFromHash() {
  const hash = document.location.hash;
  
  if (hash.length > 1) {
    return hash.substring(1).split('-').map(col => '#' + col);
  }
  return []
}

// INIT

setRandomColors(true);

// chroma.js - auto detect color
