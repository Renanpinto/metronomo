console.log("bagulhos")
const batida = new Audio();
batida.src = './efeitos/pulo.wav'

const num = document.getElementById("bpm")
const h1 = document.querySelector('h1')
const play = document.getElementById('play')
let bpm;
let timer;
let isPlaying = false;
bpm = (60 * 1000) / 40

num.addEventListener('input', function () {
  document.querySelector('h1').innerHTML = this.value + "bpm"
  bpm = (60 * 1000) / parseInt(this.value);
})

num.addEventListener('change', function () {
  if (isPlaying) {
    clearInterval(timer)
    console.log(bpm)
    timer = tick(bpm)
  }
});

play.addEventListener('click', function () {
  if (isPlaying) {
    play.innerHTML = 'Play'
    clearInterval(timer)
  } else {
    play.innerHTML = 'Stop'
    //clearInterval(timer)
    console.log(bpm)
    timer = tick(bpm)
  }
  isPlaying = !isPlaying;
})

function tick(bpm) {
  return setInterval(() => {
    console.log('ta');
    batida.play();
  }, bpm);
}
