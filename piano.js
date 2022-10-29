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

const player = document.querySelector('.player_audio');
const playerDisplay = document.querySelector('.player_display');

const changeTempo = function () {
  player.playbackRate = tempoInput.value;
  tempoDisplay.textContent = tempoInput.value;
};

const changeSongURL = function (e) { 
  let filename = player.src.split('\\').pop().split('/').pop();
  playerDisplay.textContent = filename;
}

const changeSongFile = function (e) {
  const target = e.currentTarget;
  const file = target.files[0];
  let reader;

  if (target.files && file) {
    reader = new FileReader();
    reader.onload = function (e) {
      player.setAttribute('src', e.target.result);
      playerDisplay.textContent = file.name;
      // player.play(); // auto play on load
    }
    reader.readAsDataURL(file);
  }
};

// Or upload an MP3:
const uploadInput = document.getElementById('upload_input');
uploadInput.addEventListener('change', changeSongFile, false);


// Playback tempo 
const tempoInput = document.getElementById('tempo_input');
tempoInput.addEventListener("change", changeTempo, false);
const tempoDisplay = document.querySelector('.tempo_display');
tempoDisplay.textContent = tempoInput.value;



// Chords from:

const player_chords = document.getElementById('player-chords');
// player.src = urlInput.value;
changeSongURL();
changeTempo();