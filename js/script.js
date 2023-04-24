const currentNumber = document.querySelector('.current-number')

const numbersButtons = document.querySelectorAll('.number')

const operationsButtons = document.querySelectorAll('.operator')

const equalsButton = document.querySelector('.equals')

const clearButton = document.querySelector('.clear')

const mathSign = document.querySelector('.mathSign')
const previousNumber = document.querySelector('.previousNumber')

let result = ''

function displayNumbers() {
	if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return
    
	

	currentNumber.innerHTML += this.textContent
}
function operate() {
	if (currentNumber.innerHTML === '' && this.textContent === '-') {
		currentNumber.innerHTML = '-'
		return
	} else if (currentNumber.innerHTML === '') {
		return
	}
	if (mathSign.innerHTML !== '') {
		showResult()
	}
	previousNumber.innerHTML = currentNumber.innerHTML
	mathSign.innerHTML = this.textContent
	currentNumber.innerHTML = ''
}

function showResult() {
	if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return
	let a = Number(currentNumber.innerHTML)
	let b = Number(previousNumber.innerHTML)
	let operator = mathSign.innerHTML

	switch (operator) {
		case '+':
			result = a + b
			break
		case '-':
			result = a - b
			break
		case 'X':
			result = a * b
			break
		case ':':
			result = a / b
			break
		case '2^':
			result = b ** a
			break
	}

    currentNumber.innerHTML = result
    previousNumber.innerHTML = ''
    mathSign.innerHTML = ''
}

function clearScreen() {
    result = ''
    currentNumber.innerHTML = ''
    previousNumber.innerHTML = ''
    mathSign.innerHTML = ''
}

// NASŁUCHIWANIE
operationsButtons.forEach(button => button.addEventListener('click', operate))
equalsButton.addEventListener('click', showResult)
clearButton.addEventListener('click', clearScreen)
numbersButtons.forEach(button => button.addEventListener('click', displayNumbers))



        


