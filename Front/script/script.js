'use strict';

const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll('img').length;
  let clickCounter = 0;
  arrow.addEventListener('click', () => {
    clickCounter++;
    if (itemNumber - (4 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get('transform')[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = 'translateX(0)';
      clickCounter = 0;
    }
  });
});




const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.featured-movie,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.movie-list-item-title,.movie-list-item-desc");

ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})



// const apiBassUrl = "https://api.themoviedb.org/3";
// const apikey = "467debcf216a77cd7a1066718148bc9d";
// const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

// async function fetchMoviesNowPlaying() {
//     const response = await fetch(${apiBaseUrl}/movie/now_playing?api_key=${apiKey});
//     const jsonResponse = await response.json();
//     const movies = jsonResponse.results;
//     console.log(movies);
// }
// fetchMoviesNowPlaying();

// const moviesGrid = document.getElementById("movie-grid");

// function displayMovies(movies) {
//     moviesGrid.innerHTML = movies.map(movie => 
//         `<img src="${imageBaseUrl}${movie.poster_path}"/>
//         <p>⭐️${movie.vote_average}</p>
//         <h1>${movie.title}</h1>`
//     ).join("");
// }