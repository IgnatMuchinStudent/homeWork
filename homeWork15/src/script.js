let currentState = 0;
let $wAbpot = document.querySelector('.about__inform__slider__wrapper').addEventListener('click', function(event) {
    if (currentState < 3) {
        currentState++;
        $wAbpot.style.transform = "translateX(+'currentState'*(-370) + 'px')"
    } else if (currentState > 0) {
        currentState++;
        $wAbpot.style.transform = "translateX(+'currentState'*(-370) + 'px')"
    }
});
let $wrappers = document.querySelectorAll('.says__slider__wrapper');
for (let i = 0; i <= $wrappers.length; i++);
let $arrowL = document.getElementById('1').addEventListener('click', function(event) {
    if (currentState > 0) {
        currentState--
        $wrappers[i].style.transform = "translateX(+'currentState'*(-1120) + 'px')"
    }
});
let $arrowR = document.getElementById('2').addEventListener('click', function(event) {
    if (currentState < 3) {
        currentState++;
        $wrapper[i].style.transform = "translateX(+'currentState'*(-1120) + 'px')"
    }
});