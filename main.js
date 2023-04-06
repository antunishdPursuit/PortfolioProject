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
let countTwo = 0
// changing the text below the pokemon
let changeText = document.getElementById("changeText")
// Text after click 
let player = 0
let enemy = 0
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
        countTwo = 0
      let pokeRandomNumber = Math.floor(Math.random() * 6)
      gardevoir.src = event.target.src
      primarina.src = sixPokemon[pokeRandomNumber].src
      //Added mouseover event lisnter to simulate a pokemon battle
      lopunny.src = "fight.gif"
      lopunny.addEventListener("mouseover", event => {
          countTwo++
        let flip = Math.ceil(Math.random() *2)
        if(countTwo <= 1){
          flip === 1 ? player++ : enemy++
          changeText.innerHTML =  `Player:${enemy} Vs Enemy: ${player} => Win Condition: First to six! <br><strong>Instructions:</strong> <br> Now we will showcase the mouseover event listner. <br> After clicking on one of the pokemon on the left side, the chosen pokemon will move to the middle as well as a random pokemon from the right side.  <br> Move your mouse over the fight gif and it will show you who won the pokemon battle. <br> Click on another pokemon from the left to have another pokemon battle`
          if (flip === 1){
            lopunny.src = "right.png"
            gardevoir.src = "defeat.gif"
          } else {
            lopunny.src = "left.png"
            primarina.src = "defeat.gif"
          }
        }
        
      })
    })
  }
  // Change the text below pokeballs
  changeText.innerHTML = `Player: 0 Vs Enemy: 0 <br><strong>Instructions:</strong> <br> Now we will showcase the mouseover event listner. <br> After clicking on one of the pokemon on the left side, the chosen pokemon will move to the middle as well as a random pokemon from the right side.  <br> Move your mouse over the fight gif and it will show you who won the pokemon battle. <br> Click on another pokemon from the left to have another pokemon battle`
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
        countTwo = 0
      let pokeRandomNumber = Math.floor(Math.random() * 6)
      gardevoir.src = event.target.src
      primarina.src = sixPokemon[pokeRandomNumber].src
        //Added mouseover event lisnter to simulate a pokemon battle     
        lopunny.src = "fight.gif"
        lopunny.addEventListener("mouseover", event => {
            countTwo++
          let flip = Math.ceil(Math.random() *2)
          if(countTwo <= 1){
            flip === 1 ? player++ : enemy++
            changeText.innerHTML =  `Player:${enemy} Vs Enemy: ${player} => Win Condition: First to six! <br><strong>Instructions:</strong> <br> Now we will showcase the mouseover event listner. <br> After clicking on one of the pokemon on the left side, the chosen pokemon will move to the middle as well as a random pokemon from the right side.  <br> Move your mouse over the fight gif and it will show you who won the pokemon battle. <br> Click on another pokemon from the left to have another pokemon battle`
            if (flip === 1){
              lopunny.src = "right.png"
              gardevoir.src = "defeat.gif"
            } else {
              lopunny.src = "left.png"
              primarina.src = "defeat.gif"
            }
          }
          
        })

    })
  }
    // Change the text below pokeballs
    changeText.innerHTML = `Player: 0 Vs Enemy: 0 <br><strong>Instructions:</strong> <br> Now we will showcase the mouseover event listner. <br> After clicking on one of the pokemon on the left side, the chosen pokemon will move to the middle as well as a random pokemon from the right side.  <br> Move your mouse over the fight gif and it will show you who won the pokemon battle. <br> Click on another pokemon from the left to have another pokemon battle`
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
        countTwo = 0
        // changeText.innerHTML = textAfterClick
        let pokeRandomNumber = Math.floor(Math.random() * 6)
        gardevoir.src = event.target.src
        primarina.src = sixPokemon[pokeRandomNumber].src
        //Added mouseover event lisnter to simulate a pokemon battle
        lopunny.src = "fight.gif"
        lopunny.addEventListener("mouseover", event => {
            countTwo++
          let flip = Math.ceil(Math.random() *2)
          if(countTwo <= 1){
            flip === 1 ? player++ : enemy++
            changeText.innerHTML =  `Player:${enemy} Vs Enemy: ${player} => Win Condition: First to six! <br><strong>Instructions:</strong> <br> Now we will showcase the mouseover event listner. <br> After clicking on one of the pokemon on the left side, the chosen pokemon will move to the middle as well as a random pokemon from the right side.  <br> Move your mouse over the fight gif and it will show you who won the pokemon battle. <br> Click on another pokemon from the left to have another pokemon battle`
            if (flip === 1){
              lopunny.src = "right.png"
              gardevoir.src = "defeat.gif"
            } else {
              lopunny.src = "left.png"
              primarina.src = "defeat.gif"
            }
          }
          
        })
    })
  }
    // Change the text below pokeballs
    changeText.innerHTML =  `Player: 0 Vs Enemy: 0 <br><strong>Instructions:</strong> <br> Now we will showcase the mouseover event listner. <br> After clicking on one of the pokemon on the left side, the chosen pokemon will move to the middle as well as a random pokemon from the right side.  <br> Move your mouse over the fight gif and it will show you who won the pokemon battle. <br> Click on another pokemon from the left to have another pokemon battle`
  }
})

}




