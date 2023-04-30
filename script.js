


window.addEventListener('keydown',function(e){
    console.log('key hit',e);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    console.log(audio);

    if(!audio) return;// it wont play other keys
    audio.currentTime=0;
    key.classList.add('playing')
    audio.play();
})

function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key =>{
    key.addEventListener('transitionend',removeTransition)
})

/* let name = 'RituRAJ';
console.log(name.length-1);                                                                
console.log(name[name.length-1]);

let name1 = 'RituRAJ';

let newname =name1.toUpperCase()
// let newname = console.log(toUpperCase(name));
console.log(newname); */