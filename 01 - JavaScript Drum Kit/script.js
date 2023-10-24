// adds .playing class
// when we click

console.log('hello')

const element = document.getElementsByClassName('key');
// const clickedButton = document.addEventListener("click", );

// console.log(clickedButton);


window.addEventListener('keydown', ((key) => {
  // console.log(key.keyCode)
  const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`)
  const keyPress = document.querySelector(`div[data-key="${key.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0; //rewinder
  audio.play()
  // console.log(keyPress.classList);
  keyPress.classList.add('playing')
  setTimeout (() => {
    keyPress.classList.remove('playing')
  }, 300);

}))
