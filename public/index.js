let x = 0
const title = document.getElementById('title')
title.hidden = false
const hourglass = document.getElementById('hourglass')
function rotate (el) {
  el.style.pointerEvents = 'none';
  setTimeout(() => {
    el.style.transition = '1s';
    el.style.setProperty('--r', (x += 360) + 'deg')
  }, 400)
  setTimeout(() => { el.style.pointerEvents = el.style.transition = ''; }, 1400)
}

function showText (text) {
  title.innerHTML = ''
  text.split('').forEach((letter, index) => {
    const span = title.appendChild(document.createElement('span'))
    span.innerText = letter
    setTimeout(() => span.classList.add('vis'), index * 50 + 50)
    setTimeout(() => { span.style.top = '0'; span.classList.remove('vis') }, index * 15 + 3500)
  })
  if (text !== '._.') return
  setTimeout(() => { hourglass.style.top = '150%'; hourglass.style.pointerEvents = 'none' }, 1401)
  setTimeout(() => { hourglass.style.transition = '0s'; hourglass.style.top = ''; }, 7400)
  setTimeout(() => { hourglass.style.top = '150%'; }, 7430)
  setTimeout(() => { hourglass.style.transition = ''; }, 7510)
  setTimeout(() => { hourglass.style.pointerEvents = hourglass.style.top = ''; }, 13400)
}

const texts = ['What could be here?', 'Treasure Hacks: Soft Skill Seminar... Coming Soon...',  'But is there more to it?',
  'idk, not really, not yet.', 'There is nothing here...', 'Why are you clicking this?', 'Still going, huh?',
  'Mark the Date: February 17th', '...', "You've seen everything", 'Ok, maybe not.', 'But please stop.', "It's not worth it!",
  'Stop. Clicking. The. Hourglass.', '...', '...', '._.', 'Last warning ( ͡° ͜ʖ ͡°)'].reverse()

function showNext () {
  const text = texts.pop()
  if (text) return showText(text)
  eval(atob('bG9jYXRpb24uaHJlZj0iaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUSI='))
}

hourglass.addEventListener('click', () => { rotate(hourglass); showNext() })
showText('Hello there, visitor.')
