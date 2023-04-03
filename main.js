// Starting pokemon that will appear in the upper left side 
let pokeArr = ["gardevoir","lopunny","primarina"]
//pokemon in the header tag
let randomPokemon = document.getElementById("randomPokemon")
let randomShinyPokemon = document.getElementById("randomShinyPokemon")
// array pf pokemon that will appear on the left and right side of the page 
let starterPokemonsters = [3,6,9,12,15,18]
let playerPokemons = document.querySelectorAll(".playerPokemon")
let trainerPokemons = document.querySelectorAll(".trainerPokemon")
// Adding click event listner to each pokeball
let gardevoir = document.querySelector("#gardevoir")
let lopunny = document.querySelector("#lopunny")
let primarina = document.querySelector("#primarina")
// selectng the row where all the pokeball containers are in
let pokeballContainer = document.querySelector("#pokeballContainer")
// Empty array for seven random id numbers for poekmon
let randomSevenNumbers =[]
let count = 0
// Wait for the webpage to load
window.onload = () => {
  const random = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((json) => {
      let pokeShiny = json.sprites.front_shiny
      randomPokemon.src = `${pokeShiny}`
    })
    .catch((error) => {
      // You can do what you like with the error here.
      console.log(error);
    });
  }
  // Array of seven random id numbers for poekmon
  for (let index = 0; index < 7; index++) {
    let randomPokemonId = Math.ceil(Math.random() * 1010)
    randomSevenNumbers.push(randomPokemonId)
  }
  // each pokeball has an event listener 
gardevoir.addEventListener("click",(event) => {
  count++
  if (count <= 1){
  // the pokeball images are centered in the middle and then will will be spearted after a click 
  pokeballContainer.classList.remove("justify-content-center")
  pokeballContainer.classList.add("justify-content-between")
  // the pokeballs get a tranpaernat background
  gardevoir.src = "clearBackground.png"
  lopunny.src = "fight.gif"
  primarina.src = "clearBackground.png"
  // the upper right pokemon will get the approiate pokemon 
  random(pokeArr[0]) 
  // Right side: of the webpage has 1 random rival trainer and 6 random pokemons
  for (let index = 0; index < randomSevenNumbers.length; index++) {
    const element = randomSevenNumbers[index];
    let trainPoke = trainerPokemons[index]
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}/`)
    .then((response) => response.json())
    .then((json) => {
      let poke = json.sprites.front_default
      trainPoke.src = `${poke}`

    })
    .catch((error) => {
      console.log(error);
    });
  }
  // Left Side: Six predefined pokemon which will be used by the trainer pokemon
  for (let index = 0; index < starterPokemonsters.length; index++) {
    const element = starterPokemonsters[index];
    let trainPoke = playerPokemons[index]
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}/`)
    .then((response) => response.json())
    .then((json) => {
      let poke = json.sprites.front_default
      trainPoke.src = `${poke}`

    })
    .catch((error) => {
      console.log(error);
    });
  }
  // changing the trainerPokemon HTML collection to an array
  let arrOfTrainerPokemon = Array.prototype.slice.call(trainerPokemons)
  let sixPokemon = arrOfTrainerPokemon.slice(1)
  // Each pokemon on the left has a click event listner 
  for (let index = 0; index < playerPokemons.length; index++) {
      const element = playerPokemons[index];
      element.addEventListener("click", (event) => {
      let pokeRandomNumber = Math.floor(Math.random() * 6)
      gardevoir.src = event.target.src
      primarina.src = sixPokemon[pokeRandomNumber].src
      
    })
  }
  }
})
lopunny.addEventListener("click",(event) => {
  count++
  if (count <= 1){
  // the pokeball images are centered in the middle and then will will be spearted after a click 
  pokeballContainer.classList.remove("justify-content-center")
  pokeballContainer.classList.add("justify-content-between")
  // the pokeballs get a tranpaernat background
  gardevoir.src = "clearBackground.png"
  lopunny.src = "fight.gif"
  primarina.src = "clearBackground.png"
  // the upper right pokemon will get the approiate pokemon 
  random(pokeArr[1]) 
  // Right side: of the webpage has 1 random rival trainer and 6 random pokemons
  for (let index = 0; index < randomSevenNumbers.length; index++) {
    const element = randomSevenNumbers[index];
    let trainPoke = trainerPokemons[index]
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}/`)
    .then((response) => response.json())
    .then((json) => {
      let poke = json.sprites.front_default
      trainPoke.src = `${poke}`

    })
    .catch((error) => {
      console.log(error);
    });
  }
  // Left Side: Six predefined pokemon which will be used by the trainer pokemon
  for (let index = 0; index < starterPokemonsters.length; index++) {
    const element = starterPokemonsters[index];
    let trainPoke = playerPokemons[index]
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}/`)
    .then((response) => response.json())
    .then((json) => {
      let poke = json.sprites.front_default
      trainPoke.src = `${poke}`

    })
    .catch((error) => {
      console.log(error);
    });
  }
  // changing the trainerPokemon HTML collection to an array
  let arrOfTrainerPokemon = Array.prototype.slice.call(trainerPokemons)
  let sixPokemon = arrOfTrainerPokemon.slice(1)
  // Each pokemon on the left has a click event listner 
  for (let index = 0; index < playerPokemons.length; index++) {
      const element = playerPokemons[index];
      element.addEventListener("click", (event) => {
      let pokeRandomNumber = Math.floor(Math.random() * 6)
      gardevoir.src = event.target.src
      primarina.src = sixPokemon[pokeRandomNumber].src
      
    })
  }
  }

})
primarina.addEventListener("click",(event) => {
  count++
  if (count <= 1){
  // the pokeball images are centered in the middle and then will will be spearted after a click 
  pokeballContainer.classList.remove("justify-content-center")
  pokeballContainer.classList.add("justify-content-between")
  // the pokeballs get a tranpaernat background
  gardevoir.src = "clearBackground.png"
  lopunny.src = "fight.gif"
  primarina.src = "clearBackground.png"
  // the upper right pokemon will get the approiate pokemon 
  random(pokeArr[2]) 
  // Right side: of the webpage has 1 random rival trainer and 6 random pokemons
  for (let index = 0; index < randomSevenNumbers.length; index++) {
    const element = randomSevenNumbers[index];
    let trainPoke = trainerPokemons[index]
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}/`)
    .then((response) => response.json())
    .then((json) => {
      let poke = json.sprites.front_default
      trainPoke.src = `${poke}`

    })
    .catch((error) => {
      console.log(error);
    });
  }
  // Left Side: Six predefined pokemon which will be used by the trainer pokemon
  for (let index = 0; index < starterPokemonsters.length; index++) {
    const element = starterPokemonsters[index];
    let trainPoke = playerPokemons[index]
    fetch(`https://pokeapi.co/api/v2/pokemon/${element}/`)
    .then((response) => response.json())
    .then((json) => {
      let poke = json.sprites.front_default
      trainPoke.src = `${poke}`

    })
    .catch((error) => {
      console.log(error);
    });
  }
  // changing the trainerPokemon HTML collection to an array
  let arrOfTrainerPokemon = Array.prototype.slice.call(trainerPokemons)
  let sixPokemon = arrOfTrainerPokemon.slice(1)
  // Each pokemon on the left has a click event listner 
  for (let index = 0; index < playerPokemons.length; index++) {
      const element = playerPokemons[index];
      element.addEventListener("click", (event) => {
      let pokeRandomNumber = Math.floor(Math.random() * 6)
      gardevoir.src = event.target.src
      primarina.src = sixPokemon[pokeRandomNumber].src
      
    })
  }
  }

})


}




