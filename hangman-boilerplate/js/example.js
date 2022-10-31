let pokemons = [

    'charmander',
    'squirtle',
    'bulbasaur',
    'charizard',
    'blastoise',
    'pidgey',
    'pikachu',
    'nidoking',
    'vulpix',
    'jigglypuff',
    'oddish',
    'meowth',
    'diglett',
    'abra',
    'gengar',
    'onix',
    'electabuzz',
    'eevee',
    'articuno',
    'mew',
    'mewtwo'
]

// ALL MY BUTTONS FOR GUESSING ///////////////////////////////////
const startBtn = document.querySelector('.start')     //                START GAME BUTTON 
let aBtn = document.querySelector('.a')
let eBtn = document.querySelector('.e')
// ALL MY BUTTONS FOR GUESSING  //////////////////////////////////

/////  HTML ELEMENTS TO VIEW INFORMATION /////////////////
const hiddenPokemon = document.querySelector('h3')
/////  HTML ELEMENTS TO VIEW INFORMATION /////////////////

//////////////////////// DIFFERENT CONTAINERS FOR STORING INFO IN ///////////////
let thePokemon = '';
let converted = []
let usedLetters = []
//////////////////////// DIFFERENT CONTAINERS FOR STORING INFO IN ///////////////


startBtn.addEventListener('click', () => {
    if (converted != 0) {
        return
    }
    randomPokemon()
    console.log(thePokemon);

})

aBtn.addEventListener('click', () => {
    
    if (usedLetters[i] === 'a')
    return 
    for (i = 0; i <= thePokemon.length; i++) {
        if (thePokemon.charAt(i) == "a") {
            usedLetters.push('a')
        }
    }
    console.log(usedLetters);
    hiddenPokemon.innerHTML = usedLetters
})

////// FUNCTION TO GENERATE RANDOM POKEMON FROM ARRAY ////////// 
function randomPokemon() {     
    thePokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    for (i = 0; i < thePokemon.length; i++) {
        converted.push('_')
    }
    converted = converted.join(' ')
    hiddenPokemon.innerHTML = converted

} 