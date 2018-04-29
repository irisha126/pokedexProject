let isDivHidden = true;
let revealButton = document.querySelector('.btn');
let toggleDiv = document.querySelector('.invisible');
let toggleDiv1 = document.querySelector('.visible');

revealButton.addEventListener('click',function(){
    if (isDivHidden === true) {
        toggleDiv.classList.remove('invisible');
        isDivHidden = false;
        toggleDiv1.classList.add('invisible');
    }  
}); 



class Trainer{
    constructor(name){
        this.name;
        this.pokemon = [];
    }

    all(){
        return this.pokemon;
    }
    
    get(name){
        for(let i = 0; i < this.pokemon.length;i++){
            let pokemonName=this.pokemon[i].name;
            if(pokemonName === name){
                return pokemon[i];
            }
        }
        return false;
    }
}

class Pokemon{
    constructor(id, hp, attack, defense, abilities){
        this.id = id;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
  }



 function getPokemonStats(name,id){
   axios.get('http://pokeapi.co/api/v2/pokemon/'+id+'/.json')
   .then(function(myResponse){
       let abilitiesArr = [];
       let abilitiesApi = result.data.abilities;
       for (let i = 0; i < abilitiesApi.length; i++) {
         abilitiesArr.push(abilitiesApi[i].ability.name);
       }
			
       let stats= {
         'name': result.data.name,
         'id': result.data.id,
         'hp': result.data.stats[5].base_stat,
         'attack': result.data.stats[4].base_stat,
         'defense': result.data.stats[3].base_stat,
         'abilities': abilitiesArr
       }
         irakem.pokemon.push(stats); 
   })
}


    
let irakem = new Trainer('Irakem');
let lugia = new Pokemon('lugia',249);
let blastoise = new Pokemon('blastoise',9);
let jigglypuff = new Pokemon('jigglypuff',39);

getPokemonStats('lugia',249);
getPokemonStats('blastoise',9);
getPokemonStats('jigglypuff',39);


let name = document.querySelector('.name');
let id = document.querySelector('.id');
let hp = document.querySelector('.hp');
let attack = document.querySelector('.attack');
let deffense = document.querySelector('.deffense');
let abilities = document.querySelector('.abilities');

function showStats(pokemon){
  let myPokemon = irakem.get(pokemon);
  name.innerText = myPokemon.name;
  id.innerText = myPokemon.id;
  hp.innerText = myPokemon.hp;
  attack.innerText = myPokemon.attack;
  deffense.innerText = myPokemon.defense;
  abilities.innerText = myPokemon.abilities;
}



let revealBall1 = document.querySelector('#ball1');
let revealBall2 = document.querySelector('#ball2');
let revealBall3 = document.querySelector('#ball3');

let openBall1 = document.querySelector('#openBall1');
let openBall2 = document.querySelector('#openBall2');
let openBall3 = document.querySelector('#openBall3');

let myPokemon1 = document.querySelector('#lugia');
let myPokemon2 = document.querySelector('#blastoise');
let myPokemon3 = document.querySelector('#jigglypuff');




let pokemonHidden1 = true;
revealBall1.addEventListener('click',function(){
    if(pokemonHidden1 === true){
        myPokemon1.classList.remove('invisible-pokemon');
        openBall1.classList.remove('reveal-pokemon');
        pokemonHidden1 = false;
        revealBall1.classList.add('invisible-pokemon');         
    }
});

let pokemonHidden2 = true;
revealBall2.addEventListener('click',function(){
    if(pokemonHidden2 === true){
        myPokemon2.classList.remove('invisible-pokemon');
        openBall2.classList.remove('reveal-pokemon');
        pokemonHidden2 = false;
        revealBall2.classList.add('invisible-pokemon');         
    }
});

let pokemonHidden3 = true;
revealBall3.addEventListener('click',function(){
    if(pokemonHidden3 === true){
        myPokemon3.classList.remove('invisible-pokemon');
        openBall3.classList.remove('reveal-pokemon');
        pokemonHidden3 = false;
        revealBall3.classList.add('invisible-pokemon');         
    }
});

openBall1.addEventListener('click',function(){
    if(pokemonHidden1 === false){
        myPokemon1.classList.add('invisible-pokemon');
        openBall1.classList.add('reveal-pokemon');
        pokemonHidden1 = true;
        revealBall1.classList.remove('invisible-pokemon'); 
    }
});
  

openBall2.addEventListener('click',function(){
    if(pokemonHidden2 === false){
        myPokemon2.classList.add('invisible-pokemon');
        openBall2.classList.add('reveal-pokemon');
        pokemonHidden2 = true;
        revealBall2.classList.remove('invisible-pokemon'); 
    }
});

openBall3.addEventListener('click',function(){
    if(pokemonHidden3 === false){
        myPokemon3.classList.add('invisible-pokemon');
        openBall3.classList.add('reveal-pokemon');
        pokemonHidden3 = true;
        revealBall3.classList.remove('invisible-pokemon'); 
    }
});
  
  

myPokemon1.addEventListener('mouseover',showStats);
myPokemon2.addEventListener('mouseover',showStats);
myPokemon3.addEventListener('mouseover',showStats);



