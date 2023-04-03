//
let movieForm = document.querySelector("#movieForm")
let error = document.querySelector("h4")
let movieBox = document.querySelector("#movieBox")
let count = 0

window.onload = () => {
  movieForm.addEventListener("submit", (event) => {
    count++
        event.preventDefault()
        let movieType = event.target.movie.value.toLowerCase()
        const symbols = /[^\w]/g
        if(movieType.split(" ")[0].length < 3 || movieType.split(" ")[0].search(symbols) >= 0){
            error.innerHTML = "More than 3 Letters <br> And no symbols"
        } else {
            error.innerHTML = "Movie Search"
        fetch(`http://www.omdbapi.com/?apikey=5e8cd208&s=${movieType}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            let searchResults = json.Search
            let needToRemove = document.querySelectorAll(".remove")
            if(count > 1){
                for (let index = 0; index < needToRemove.length; index++) {
                    const element = needToRemove[index];
                    element.remove()
                    
                }
            }
            if(searchResults === undefined){
            error.innerHTML = "No Search Results, Please Try again"
            } else {
            error.innerHTML = `Total Movies: ${json.totalResults} <br> Only displaying the top 10`
                for (let index = 0; index < searchResults.length; index++) {
                    const element = searchResults[index];
                    let lowerCased = element.Title.toLowerCase()
                    if(lowerCased.indexOf(movieType) === 0){
                        let movieSearched = document.createElement("div")
                        movieSearched.classList.add("col-md-4")
                        movieSearched.classList.add("col-sm-4")
                        movieSearched.classList.add("col-lg-4")
                        movieSearched.classList.add("remove")
                        movieSearched.classList.add("movieBoxes")
                        let poster = document.createElement("img")
                        poster.alt = element.Title
                        poster.classList.add("poster")
                        poster.src = element.Poster
                        let title = document.createElement("p")
                        title.innerHTML = `<strong>Title:</strong> ${element.Title}`
                        let type = document.createElement("p")
                        type.innerHTML = `<strong>Type:</strong> ${element.Type}`
                        let year = document.createElement("p")
                        year.innerHTML = `<strong>Year:</strong> ${element.Year}`
                        let imdbID = document.createElement("p")
                        imdbID.innerHTML = `<strong>ImdbID:</strong> ${element.imdbID}`
                        movieSearched.append(poster)
                        movieSearched.append(title)
                        movieSearched.append(type)
                        movieSearched.append(year)
                        movieSearched.append(imdbID)
                        movieBox.append(movieSearched)
                    }
                }
                for (let index = 0; index < searchResults.length; index++) {
                    const element = searchResults[index];
                    let lowerCased = element.Title.toLowerCase()
                    if(lowerCased.indexOf(movieType) !== 0){
                        let movieSearched = document.createElement("div")
                        movieSearched.classList.add("col-md-4")
                        movieSearched.classList.add("col-sm-4")
                        movieSearched.classList.add("col-lg-4")
                        movieSearched.classList.add("remove")
                        movieSearched.classList.add("movieBoxes")
                        let poster = document.createElement("img")
                        poster.alt = element.Title
                        poster.classList.add("poster")
                        poster.src = element.Poster
                        let title = document.createElement("p")
                        title.innerHTML = `<strong>Title:</strong> ${element.Title}`
                        let type = document.createElement("p")
                        type.innerHTML = `<strong>Type:</strong> ${element.Type}`
                        let year = document.createElement("p")
                        year.innerHTML = `<strong>Year:</strong> ${element.Year}`
                        let imdbID = document.createElement("p")
                        imdbID.innerHTML = `<strong>ImdbID:</strong> ${element.imdbID}`
                        movieSearched.append(poster)
                        movieSearched.append(title)
                        movieSearched.append(type)
                        movieSearched.append(year)
                        movieSearched.append(imdbID)
                        movieBox.append(movieSearched)
                    }
                }
            }

        })
        .catch((error) => {
            console.log(error);
        });
        }
        event.target.movie.value = ""

    })
}
  