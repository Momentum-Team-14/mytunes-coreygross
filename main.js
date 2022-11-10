let resultDiv = document.querySelector('#results')
let searchDiv = document.querySelector('.searchBox')

let searchUrl = "https://itunes.apple.com/search?term="
let searchForm = document.querySelector(".search")




searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let searchDisplay = document.querySelector("input")
    let searchUrlAnswer = `${searchUrl}${searchDisplay.value}&limit=28`
    
    fetch(searchUrlAnswer, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    //response is whatever the above returns
    .then(function (response) {
        return response.json()
    })
    //date is whatever the above code returns, in this case, response.json
    .then(function (data) {
        let songs = data.results
        console.log(songs)
        showSearchResults(songs)
        // for (let song of songs);
    })
    
})


function showSearchResults(resultsArray) {
    for (let result of resultsArray) {
        let searchResultsDiv = document.createElement("div");
        searchResultsDiv.classList.add("searchResults")

        let imageDiv = document.createElement("img");
        imageDiv.classList.add("image")
        imageDiv.src = result.artworkUrl100

        let songTitleDiv = document.createElement("div");
        songTitleDiv.classList.add("songTitle")
        songTitleDiv.innerText = `${result.trackName}`

        let bandNameDiv = document.createElement("div");
        bandNameDiv.classList.add("bandName")
        bandNameDiv.innerText = `${result.artistName}`

        let audioTag = document.createElement('audio');
        audioTag.classList.add("audio")
        audioTag.src = result.previewUrl
        audioTag.controls = true

        searchResultsDiv.addEventListener('click', () => {
            audioTag.src = result.previewUrl
            audioTag.controls = true 
            audioTag.autoplay = true
        })


   
        searchResultsDiv.appendChild(imageDiv)
        searchResultsDiv.appendChild(songTitleDiv)
        searchResultsDiv.appendChild(bandNameDiv)
        searchResultsDiv.appendChild (audioTag) 
        resultDiv.appendChild(searchResultsDiv)

    }
}




