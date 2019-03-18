var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var isGameStarted = false
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $gameTime = document.querySelector('#game-time')


var colors = ['red', 'green', 'blue', 'yellow', 'pink']
var score = 0


$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function startGame() {
	score = 0
	setGameTime()
	$gameTime.setAttribute('disabled', 'true')
	$timeHeader.classList.remove('hide')
	$resultHeader.classList.add('hide')
	isGameStarted = true
	$game.style.backgroundColor = '#fff'
	$start.classList.add('hide')

	var interval = setInterval(function() {
		var time = parseFloat($time.textContent)

		if (time <= 0) {
			clearInterval(interval)
			endGame()
		}
		else{
			$time.textContent = (time - 0.1).toFixed(1)
		}
	}, 100)

	renderBox()
}

function setGameScore() {
	$result.textContent = score
}

function setGameTime() {
	var time = +$gameTime.value
	$time.textContent = time.toFixed(1)
}

function endGame() {
	isGameStarted = false
	$game.innerHTML = ''
	$gameTime.removeAttribute('disabled')
	$start.classList.remove('hide')
	$game.style.backgroundColor = '#ccc'
	$timeHeader.classList.add('hide')
	$resultHeader.classList.remove('hide')
	setGameScore()
}

function handleBoxClick(event) {
	if (!isGameStarted){
		return
	}

	if (event.target.dataset.box) {
		score++
		renderBox()
	}
}

function renderBox() {
	$game.innerHTML = ''
	var box = document.createElement('div')
	var boxSize = getRandom(30, 100)
	var gameSize = $game.getBoundingClientRect()
	var maxTop = gameSize.height - boxSize
	var maxLeft = gameSize.width - boxSize
	var randomColorIndex = getRandom(0, colors.length)

	box.style.height = box.style.width = boxSize + 'px'
	box.style.position = 'absolute'
	box.style.backgroundColor = colors[randomColorIndex]
	box.style.top = getRandom(0, maxTop) + 'px'
	box.style.left = getRandom(0, maxLeft) + 'px'
	box.style.cursor = 'pointer'
	box.setAttribute('data-box', 'true')

	$game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}