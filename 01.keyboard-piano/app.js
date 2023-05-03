function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    if(!audio){
        return; // if no audio is found for that key press
    }
    audio.currentTime = 0;
    audio.play();
}

// when the transition will end the remove transition execute
function removeTransition(e){
    if("transform"!==e.propertyName){
        return; // skip if it's not transform
    }

    this.classList.remove("playing");
}

let keys = document.querySelectorAll('.key');
// adding transition end event to each div element 
keys.forEach(key=>key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);