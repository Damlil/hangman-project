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
let keys = 'abcdefghijklmnopqrst'

startGame.addEventListener('click', () => {
        
            if (randomCountry != 0) {
                return
            }
    let generateCountry = countries[Math.floor(Math.random() * countries.length)];
    
    randomCountry.push(generateCountry)



    displayCountry.innerHTML = generateCountry
    

})

resetBtn.addEventListener('click', () => { 
    
    randomCountry = []

}
)

let word = 'hkjdgdfrgerfd';
let wordArr = []

    //  1.   With a loop Check how many letters the random generated word contains.

    for(let i = 0; i < word.length; i++){
        wordArr.push(word[i])
    }
    console.log(wordArr)


    for(let i = 0; i<wordArr.length; i++){
        let el = `<li>${wordArr[i]}</li>`
        document.querySelector('.word').insertAdjacentHTML('beforeend', el)
    }

    //  2.   Based on how many letters word contains,  replace them with undescores  ( _ )
    //  3.   


