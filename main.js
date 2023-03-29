console.log("hi")



let weatherCity = document.querySelector(".location")

weatherCity.addEventListener('submit', (event) => {
    event.preventDefault()
    let city = event.target.data.value
    let weatherData = `https://wttr.in/${city}?format=j1`
    let errorMessage = document.querySelector('p')
    fetch(weatherData)
    .then((response) => response.json())
    .then((json) => {
      // You can do what you like with the result here.
      console.log(json.current_condition[0]);
      errorMessage.textContent = "hi"
    })
    .catch((error) => {
      // You can do what you like with the error here.
      console.log(error);
      errorMessage.textContent = error

    });

    
    // console.log()
    event.target.data.value = ""
})

