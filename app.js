console.log("bagulhos")
const batida = new Audio();
batida.src = './efeitos/click.wav'

const num = document.getElementById("bpm")
const h1 = document.querySelector('h1')
const play = document.getElementById('play')
let bpm;
let timer;
bpm = (60 * 1000)/40

num.addEventListener('change', function () {
  document.querySelector('h1').innerHTML = this.value + "bpm"
  bpm = (60 * 1000)/parseInt(this.value);
})

play.addEventListener('click', function () {
  clearInterval(timer)
  console.log(bpm)
  timer = setInterval(() => {
    batida.play()
  }, bpm)
})

// function myFunction() {
//   const num = document.getElementById("bpm").value;
//   const bpm = num / 60
//   setInterval(() => {
//     batida.play()
//     console.log(bpm);
//   }, 10 * 1000);
// }


// function loop() {
//   myFunction()

//   frames += 100000000
//   requestAnimationFrame(loop);
// }
// loop();