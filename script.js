var btn = document.getElementById('get-pokemon');
var currPokemonContainer = document.getElementById("curr-pokemon");

btn.addEventListener('click', function(event){
    displayRandomPokemon();
});

function displayRandomPokemon(){
    var randomPokemon = getRandElem(pokemonList);
    // name, type, flying
    // Create container for new pokemon info
    var newPokemon = document.createElement('div');

    // Create an element to hold the name of the pokemon
    // & add that name to our container
    var pokeName = document.createElement('h3');
    pokeName.innerText = randomPokemon.name;
    newPokemon.appendChild(pokeName);

    // Create an element to hold the type of the pokemon
    // & add that type to our container
    var pokeType = document.createElement('h4');
    pokeType.innerText = randomPokemon.type;
    newPokemon.appendChild(pokeType);

    // Conditionally create an element if it is flying that says it flies
    // & add to our container
    if(randomPokemon.flying){
        var pokeFlying = document.createElement('h5');
        pokeFlying.innerText = 'Yes, I FLY!!!!';
        newPokemon.appendChild(pokeFlying);
    }

    // Actually add pokemon info to dom
    currPokemonContainer.innerHTML = newPokemon.outerHTML;
}

function getRandElem(arr){
    return arr [genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}