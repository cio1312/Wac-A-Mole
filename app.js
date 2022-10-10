
const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');  // gets the CSS class.  so that we can add/remove the class from the HTML tag
const timeleft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitposition;
let currenttime =60;
let timerId = null;

movemole();

function movemole() {
   
    timerId = setInterval(randomsquare, 500); // call randomsquare in 500ms
}


// remove the mole from square and add it in some random place
function randomsquare() {
    square.forEach(eachsquare => { // grab all sqyares , 

        eachsquare.classList.remove('mole') // remove the mole. classList gives class-name of css.
    })
    let randomsquareposition = square[Math.floor(Math.random() * (8 - 0) + 0)];
    //console.log(randomposition);
    randomsquareposition.classList.add('mole');

hitposition = randomsquareposition.id; // storing the present random mole id in a variable.
}

square.forEach(forindividualsquare => {
    forindividualsquare.addEventListener('mousedown', () => {
       if(forindividualsquare.id == hitposition){  // if on mousedown , square clicked is the one that was present random mole id.
        result++;
        score.textContent = result;
        hitposition = null;
       }
    })       
})

// to decrease time from 60 to 0 
let countdownTimeId = setInterval(countdown, 1000); // after 1 sec countdown is called.

function countdown(){
console.log("currenttime"+currenttime)

currenttime--;
 timeleft.textContent =currenttime;

    if(currenttime == 0)
{
    clearInterval(countdownTimeId); // to stop timer function  setInterval
    clearInterval(timerId);         // to stop timer function  setInterval
    alert("GAME OVER!! Your final score is "+result)
}
    




}

