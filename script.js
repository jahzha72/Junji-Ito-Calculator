let current = '';
let operator = null;
let previous = '';

function appendNumber(num) {
  if (current === '0') current = '';
  current += num;
  updateDisplay();
}

function appendDot() {
  if (!current.includes('.')) current += '.';
  updateDisplay();
}

function chooseOperator(op) {
  if (current === '') return;
  if (previous !== '') calculate();
  operator = op;
  previous = current;
  current = '';
}

function calculate() {
  if (!previous || !current) return;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  let result;

  switch(operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = curr !== 0 ? prev / curr : 'Error'; break;
  }

  current = result.toString();
  operator = null;
  previous = '';
  updateDisplay();
}

function clearResult() {
  current = '';
  previous = '';
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = current || '0';
}

// Audio toggle
const audio = document.getElementById("bg-audio");
const icon = document.getElementById("audio-icon");
let playing = false;

document.getElementById("audio-btn").addEventListener("click", () => {
  if (!playing) {
    audio.play();
  } else {
    audio.pause();
  }
  playing = !playing;
});
