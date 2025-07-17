const timerDisplay = document.getElementById('timerDisplay')

const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')
const restartButton = document.getElementById('restartButton')
const markButton = document.getElementById('markButton')
const clearButton = document.getElementById('clearButton')

const markDisplay = document.getElementById('markers') 

let segundos = 0
var timer = 0

function increment(segundos) {
    const timer = new Date(1000 * segundos)
    return timer.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function atualizarDisplay(segundos) {
    timerDisplay.innerText = increment(segundos)
}

startButton.addEventListener('click', () => {
    clearInterval(timer)
    timer = setInterval(() => {
        ++segundos
        console.log(timer, segundos)
        atualizarDisplay(segundos)
    }, 1000);
})

stopButton.addEventListener('click', () => {
    clearInterval(timer)
})

restartButton.addEventListener('click', () => {
    clearInterval(timer)
    segundos = 0
    atualizarDisplay(segundos)
})

markButton.addEventListener('click', () => {
    markDisplay.innerHTML += `<p> ${(increment(segundos))} </p>`
})

clearButton.addEventListener('click',() => {
    markDisplay.innerText = ""
})

console.log(increment())