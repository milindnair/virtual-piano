const WHITE_KEYS = ['a', 's', 'd', 'f', 'z', 'x', 'c']
const BLACK_KEYS = ['l', 'p', 'j', 'h', 'g']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.White.key')
const blackKeys = document.querySelectorAll('.key.Black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    /* Getting the audio element that corresponds to the key that was clicked. */
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}