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
changeTempo();

var icon = document.getElementById("icon");
// icon.onclick = function(){
//   document.body.classList.toggle("dark-theme");
//   console.log("HEllo");
//   if(document.body.style.backgroundColor == "$secondary-bg-color"){
//     document.getElementsByClassName(".container").style.backgroundColor = "$secondary-container-color";
//   }
// }
var cont = document.getElementsByClassName("container");
var topCont = document.getElementsByClassName("top-container");
var count = 0;
var gif = document.getElementsByTagName("img");
let link = "scss/images/gif5.webp";
let link1 = "scss/images/sun.png";
var mode = document.getElementById("mode");
icon.addEventListener("click", function()
{
  count += 1;
  // console.log(count);
  if(count % 2 == 1 )
  {    
  document.body.style.backgroundColor = "#4B0082";
  cont[0].style.backgroundColor = "#a061cf";
  cont[0].style.boxShadow = "14px 14px 48px #1e0034,-14px -14px 48px #7800d0";
  topCont[0].style.borderBottom = " 13px solid";
  console.log(gif[0]);
  gif[1].src = link;
  mode.style.color = "#ba20bf";
  mode.innerHTML="Light mode 🔅";
  gif[0].src =link1;
  
  }
  else
  {
    document.body.style.backgroundColor ="#e79d2e";
  cont[0].style.backgroundColor = "red";
  cont[0].style.boxShadow = "14px 14px 28px #5c3f12,-14px -14px 28px #fffb4a";
  topCont[0].style.borderBottom = " 13px solid rgb(227, 188, 30)";  
  gif[1].src ="scss/images/gif3.gif";
  mode.innerHTML="Dark mode 👻";
  mode.style.color = "black";
  }
}
);

