score = 0;
cross = true;
audio = new Audio('musicover.mp3');
audigo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e){
    console.log("kesay huwa:",e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
       dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
       dino.style.left = dinoX + 112 + 'px';
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
       dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
       dino.style.left = (dinoX - 112) + 'px';
    }
}
setInterval(() => {
     dino = document.querySelector('.dino');
     gameover = document.querySelector('.gameover');
     obstacle = document.querySelector('.obstacle');

     dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
     ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
     oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

     offsetx = Math.abs(dx - ox);
     offsety = Math.abs(dy - oy);
     
     if (offsetx < 73 && offsety < 52) {
        gameover.innerHTML = "Game over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni');
        audigo.play();
        setTimeout(() => {
            audigo.pause();
            audio.pause();
        }, 1000);
     }
     else if(offsetx < 145 &&  cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            Aanidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDer = Aanidur - 0.8;
        obstacle.style.animationDuration = newDer + 's'
        console.log("my new duration:" , newDer);
        
        }, 500);
     }
}, 10);
function updateScore(score) {
    scorecont.innerHTML = "your score :" + score
}