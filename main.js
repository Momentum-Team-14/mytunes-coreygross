let resultDiv = document.querySelector ('#results')

let searchUrl = "https://itunes.apple.com/search?term=the+lumineers&limit=25."

fetch (searchUrl, {
    method: 'GET',
    headers:   {'Content-Type':'application/json'}
})
//response is whatever the above returns
.then(function (response){
    return response.json()
})
//date is whatever the above code returns, in this case, response.json
.then(function (data){
    let songs = data.results
    showSearchResults(songs)
    // for (let song of songs);
})

function showSearchResults(resultsArray) {
    for (let result of resultsArray){
        let searchResultsDiv = document.createElement("div");
        searchResultsDiv.classList.add("searchResults")
        
        let imageDiv = document.createElement("img");
        imageDiv.classList.add ("image")
        imageDiv.src = result.artworkUrl100
        
        let songTitleDiv = document.createElement("div");
        songTitleDiv.classList.add ("songTitle")
        songTitleDiv.innerText = `${result.trackName}`
        
        let bandNameDiv = document.createElement("div");
        bandNameDiv.classList.add ("bandName")
        bandNameDiv.innerText = `${result.artistName}`

        searchResultsDiv.appendChild(imageDiv)
        searchResultsDiv.appendChild(songTitleDiv)
        searchResultsDiv.appendChild(bandNameDiv)
        resultDiv.appendChild(searchResultsDiv)
        
    
    }
}

