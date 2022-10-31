/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */
const startGame = document.querySelector('.startBtn')
const resetBtn = document.querySelector('.resetGame')
const displayCountry = document.querySelector('h1')
const j="js"


let countries = [
    'sweden',
    'japan',
    'norway',
    'denmark',
    'croatia',
    'italy',
    'kazakhstan',
    'zimbabwe',
    'tchad',
    'india'
]
let randomCountry = []

startGame.addEventListener('click', () => {
        
            if (randomCountry != 0) {
                return
            }
    let generateCountry = countries[Math.floor(Math.random() * countries.length)];
    console.log(generateCountry);
    randomCountry.push(generateCountry)
    displayCountry.innerHTML = generateCountry
    

})



resetBtn.addEventListener('click', () => {
        
randomCountry = []

})
