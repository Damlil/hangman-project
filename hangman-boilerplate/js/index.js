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
let keys = 'abcdefghijklmnopqrst'

startGame.addEventListener('click', () => {
        
            if (randomCountry != 0) {
                return
            }
    let generateCountry = countries[Math.floor(Math.random() * countries.length)];
    
    randomCountry.push(generateCountry)

   displayRandom()

    displayCountry.innerHTML = generateCountry
    

})

resetBtn.addEventListener('click', () => { 
    
    randomCountry = []

}
)




    //  1.   With a loop Check how many letters the random generated word contains.
    //  2.   Based on how many letters word contains,  replace them with undescores  ( _ )
    //  3.   


