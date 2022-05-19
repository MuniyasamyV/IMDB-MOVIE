var API_KEY = "3a37651c";
var searchBoxElement = document.getElementById("searchBox")
var movieNameElement = document.getElementById("movie_name")
var movieImgElement = document.getElementById("movie_image")
var movieImdbElement = document.getElementById("imdb_rate")

var getMovieUrlByID = function(movieID){
    return `http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`
};

var getMovieUrlByName = function(movieName){
    return `http://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`
};
async function fetchMovie(type, data) {
    try {
        var url = type == "id" ? getMovieUrlByID(data) : getMovieUrlByName(data);
        var movieFetchObject = await fetch(url);
        var movieData = await movieFetchObject.json();
        return movieData;
    }
    catch (e){
        console.log("error in fetch the movie")
    }
}

function main() {
    console.log("main module loaded");
    searchBoxElement.addEventListener("change", function(event) {
        var searchValue = event.target.value;
        console.log("searching...",searchValue)
        fetchMovie("name", searchValue).then(function (movieData)
        {
            console.log("got movie data", movieData)
            movieNameElement.innerText = movieData.Title;
            movieImgElement.setAttribute('src',movieData.Poster);
            movieImdbElement.innerText =movieData.imdbRating
        });

    });
}

main()

