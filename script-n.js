const naruto = document.getElementById("naruto");
const shuriken = document.getElementById("shuriken");

function jump () {
    if (naruto.classList != "jump") {
      naruto.classList.add('jump');

    setTimeout(function () {
        naruto.classList.remove('jump');
    }, 300);  
 } 

}

let isAlive = setInterval(function () {
    // get current naruto Y position
    let narutoTop = parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));

    // get current shuriken X position
    let shurikenLeft = parseInt(window.getComputedStyle(shuriken).getPropertyValue("left")); 

    // detect collision
    if (shurikenLeft < 50 && shurikenLeft > 0 && narutoTop >= 140) {

        alert('Game Over!')
    }
}, 10);

document.addEventListener('keydown', function (event) {
    jump();
})

/*
const naruto = document.querySelect('.naruto')
const background = document.querySelector('.background');
let isJumping = false
let position = 0;

function handleKeyUp (event){
    if (event.keyCode === 32){
        if (!isJumping) {
          jump();  
        }
        
    }
}
function jump () {
    
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
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

            },20);
        } else {
            // subindo
            position += 20;
            naruto.style.bottom = position + "px";
        }
    },20);

}
function createShuriken () {
    const shuriken = document.createElement('div');
    let shurikenPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime)

    shuriken.classList.add('shuriken');
    shuriken.style.left = 1000 + 'px';
    background.appendChild(shuriken);

    let leftInterval = setInterval(() => {
        if (shurikenPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(shuriken);
        } else if (shurikenPosition > 0 && shurikenPosition < 60 && position < 60) {
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Game Over!</h1>'

        } else {
            shurikenPosition -= 10;
            shuriken.style.left = shurikenPosition + "px"; 
        }
    },20);

    setTimeout(createShuriken, randomTime)
}

createShuriken();
document.addEventListener('keyup', handleKeyUp)*/