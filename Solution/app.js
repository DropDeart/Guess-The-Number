var msg1 = document.getElementById('message1')
var msg2 = document.getElementById('message2')
var msg3 = document.getElementById('message3')

var answer = Math.floor(Math.random() * 100) + 1
var no_of_guesses = 0
var guessed_nums = []

function play() {
  var user_guess = document.getElementById('guess').value
  if (user_guess < 1 || user_guess > 100) {
    alert('Please enter a number between 1 and 100.')
  } else {
    guessed_nums.push(user_guess)
    no_of_guesses += 1

    if (user_guess < answer) {
      msg1.textContent = 'Your guess is cold.'
      msg2.textContent = 'No. of guesses: ' + no_of_guesses
      msg3.textContent = 'Guessed numbers are: ' + guessed_nums
    } else if (user_guess > answer) {
      msg1.textContent = 'Your guess is hot.'
      msg2.textContent = 'No. of guesses: ' + no_of_guesses
      msg3.textContent = 'Guessed numbers are: ' + guessed_nums
    } else if (user_guess == answer) {
      msg1.textContent = 'Yippie You Win!!'
      msg2.textContent = 'The number was: ' + answer
      msg3.innerHTML =
        '<a href="https://www.hareketligifler.net/cat-havai-fisekler-492.htm"><img src="https://www.hareketligifler.net/data/media/492/havai-fisek-hareketli-resim-0051.gif" border="0" alt="havai-fisek-hareketli-resim-0051" /></a>'
      document.getElementById('my_btn').disabled = true
    }
  }
}

