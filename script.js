function getLoopNumber() {
  let number = ''

  for (let i = 1; i <= 10; i++) {
    number += 'You have looped ' + i + ' times.' + '<br>'
  }
  document.getElementById('loopCounter').innerHTML = number
}

document.getElementById('loopButton').onclick = getLoopNumber
