const naruto = document.querySelector(".naruto")
const background = document.querySelector(".background");
let isJumping = false
let position = 0;


function handleKeyUp (event){
    if (event.keyCode === 38 || event.keyCode === 32 ){
        if (!isJumping) {
          jump(); 
          createShuriken();
          clearScreen();
        }        
    }
}

function jump () {
    
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 250){
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                   position -= 20;
                naruto.style.bottom = position + "px"; 
                }

            },25);
        } else {
            // subindo
            position += 20;
            naruto.style.bottom = position + "px";
        }
    },20);

}

function createShuriken () {
    const shuriken = document.createElement('div');
    let shurikenPosition = 1300;
    let randomTime = Math.random() * 6000;

    shuriken.classList.add('shuriken');
    shuriken.style.left = 1300 + 'px';
    background.appendChild(shuriken);

    let leftInterval = setInterval(() => {
        if (shurikenPosition < -100) {
            clearInterval(leftInterval);
            background.removeChild(shuriken);
        } else if (shurikenPosition > 0 && shurikenPosition < 100 && position < 100) {
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = `<h1>Game Over!</h1><br>
           <div class="narutoGif"> <video autoplay muted loop id="video" src="/naruto-game/img-naruto/narutoGif.mp4"></video></div>`

        } else {
            shurikenPosition -= 10;
            shuriken.style.left = shurikenPosition + "px"; 
        }
    },20);

    setTimeout(createShuriken, randomTime);
}

function clearScreen () {
    let h2 = document.querySelector('h2');

    h2.innerHTML = ' ... ';    
}


document.addEventListener('keyup', handleKeyUp);