//select all <p> element inside div.box
let boxList = document.querySelectorAll("p");

//add eventListener to each box
boxList.forEach((box) => {
    box.addEventListener('mousedown', (event) => MouseKeyDown(box));
    box.addEventListener('mouseup', (event) => MouseKeyUp(box));
});

//select all <p> with class="key"
let keyList = document.querySelectorAll("p.key");

//add eventListener when pressing down the key 
window.addEventListener('keydown', (e) => {
    let keyChar = e.key;
    keyList.forEach((Key) => {
        let keyValue = Key.textContent.toLowerCase();
        if (keyChar === keyValue) {
            MouseKeyDown(Key);
        }
    });    
});

//add eventListener for Key Up
window.addEventListener('keyup', (event) => {
    let keyChar = event.key;
    keyList.forEach((Key) => {
        let keyValue = Key.textContent.toLowerCase();
        if (keyChar === keyValue) {
            MouseKeyUp(Key);
        }
    });    
});
//function for pressing the mouse or key, and playing audio
MouseKeyDown = (element) => {
    element.parentNode.classList.add('yellowHighlight');
    let thisAudio = element.parentNode.querySelector('audio');
    thisAudio.play();
} 
//function for key up
MouseKeyUp = (element) => {
    element.parentNode.classList.remove('yellowHighlight');
}  




