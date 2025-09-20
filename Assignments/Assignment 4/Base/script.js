// ChatGPT Conversation Links:
// 1.
// 2.
// Add as many links as needed

const fileInput = document.getElementById("moviefile");
const yearFilter = document.getElementById("movie-year");
const directorFilter = document.getElementById("movie-director");
const orderFilter = document.getElementById("movie-order");
const searchInput = document.getElementById("movie-search");
const movieContainer = document.getElementById("movie-posters");

let movies = [];

// File Change
fileInput.addEventListener("change", function (e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        let contents =  e.target.result;
        let json = JSON.parse(contents);
        movies = json.movies;
        populateMovieContainer(movies);
        populateFilters(movies);
    }
    reader.onerror = function (e) {
        console.error("Error reading file", e);
    };
    reader.readAsText(file);
});

function populateMovieContainer(moviesToDisplay) {
    movieContainer.innerHTML = "";
    moviesToDisplay.forEach(movie => {
        let movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        let movieImage = document.createElement("img");
        movieImage.src = `images/${movie.posterUrl}`;
        movieImage.alt = movie.title;
        movieImage.width = 250;
        movieImage.height = 375;
        movieCard.appendChild(movieImage);
        movieCard.innerHTML += `
            <h3>${movie.title}</h3>
            <p>${movie.director}</p>
            <p>${movie.releaseDate} | ${movie.imdbRating}</p>
        `;

        movieContainer.appendChild(movieCard);
    })
}

function populateFilters(movies) {
    let years =  [ ...new Set(movies.map(movie => movie.releaseDate.split(' ')[2]))];
    years.forEach(year => {
        let option = document.createElement("option");
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    let directors = [...new Set(movies.map(movie => movie.director))];
    directors.forEach(director => {
        let option = document.createElement("option");
        option.textContent = director;
        directorFilter.appendChild(option);
    });
}

// Filters
yearFilter.addEventListener("change", function () {
    applyFilters();
});
directorFilter.addEventListener("change", function () {
    applyFilters();
});
orderFilter.addEventListener("change", function () {
    applyFilters();
});

// Search
searchInput.addEventListener("input", function () {
    applyFilters();
});

function applyFilters() {
    let filteredMovies = [...movies];
    if (searchInput.value.length > 0) {
        yearFilter.value = "All Years";
        directorFilter.value = "All Directors";
        orderFilter.value = "Default";
    }

    if (yearFilter.value !== "All Years") {
        filteredMovies = filteredMovies.filter(movie => movie.releaseDate.includes(yearFilter.value));
    }
    if (directorFilter.value !== "All Directors") {
        filteredMovies = filteredMovies.filter(movie => movie.director === directorFilter.value);
    }
    if (orderFilter.value === "Ascending") {
        filteredMovies = filteredMovies.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    } else if (orderFilter.value === "Descending") {
        filteredMovies = filteredMovies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }
    let searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    }
    populateMovieContainer(filteredMovies);
}

