function getLoopNumber() {
  let number = ''

  for (let i = 1; i <= 10; i++) {
    number += 'You have looped ' + i + ' times.' + '<br>'
  }
  document.getElementById('loopCounter').innerHTML = number
}

document.getElementById('loopButton').onclick = getLoopNumber

function callArray() {
  let names = ['John', 'Sally', 'Bob']
  alert(names[2])
}

document.getElementById('arrayButton').onclick = callArray

function callObject() {
  let nameObject = {
    firstNames: ['John', 'Sally', 'Bob'],
    lastNames: ['Doe', 'Smith', 'Marley'],
  }
  alert(Object.values(nameObject.firstNames))
}

document.getElementById('objectButton').onclick = callObject

let funnyFunctionButton = document.getElementById('funnyFunctionButton')

funnyFunctionButton.addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'blank')
})
