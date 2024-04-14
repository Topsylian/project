"use strict";
/*The code below is to fetch the api data in an asynchronous way*/

async function fetchMovies() {
  try {
    const result = await fetch(
      "https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies"
    );
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(
      `Getting data from api resulted in an error and ${error.message}`
    );
  }
}

//saving the return Promise into a variable called promise to make use of the return data.

let promise = fetchMovies();

let mainMovieTitle = document.querySelector(".title > h1");
let mainImage = document.querySelector(".mainCard > img");
let mainDate = document.querySelector(".movie-year");
let mainRating = document.querySelector(".movie-rate");
let mainPlot = document.querySelector(".movie-plot > p");
let mainPopularity = document.querySelector(".popularity");

//Declare variable that display other movie title, genre, runtime, votes, and language.

let nowPlayingMovie = document.querySelector(".now-playing-movie-box");
let popularMovie = document.querySelector(".popular-movie");

promise
  .then(function (data) {
    let dataLen = data.length;
    let frameLen = 21; //number of videos in the home page;
    console.log(data[0]);
    //Using the first data from the promise object for the mainFrame by showcasing the images from the api.
    //setting the default image to display;
    mainImage.src = data[0].profile_picture_url;
    //setting the movie title to the main movie frame
    mainMovieTitle.innerText = data[0].original_title;
    //setting the movie story to the main movie frame
    mainPlot.innerText = data[0].overview;
    //setting the movie popularity to the main movie frame
    mainPopularity.innerText = `Popularity: ${data[0].popularity}`;
    //setting the movie date to the main movie frame
    mainDate.innerText = `Release Date: ${data[0].release_date}`;
    //create element for each movie object from the Api data
    for (let j = 0; j < 20; j++) {
      function nowPlayingMoviesList() {
        let movies = document.createElement("div");
        let movieContent = document.createElement("div");
        let movieImageBox = document.createElement("a");
        let movieImage = document.createElement("img");
        let movieDetails = document.createElement("div");
        let movieTitle = document.createElement("h4");
        let movieDate = document.createElement("p");
        let moviePopularity = document.createElement("p");
        //styling movie box
        movies.style.width = "23%";
        movies.style.height = "400px";
        movies.style.borderRadius = "10px";
        movies.style.background = "rgb(80, 80, 80)";
        movies.setAttribute("href", "./page/card.html");
        movies.style.textDecoration = "none";
        //styling movie content box
        movieContent.style.width = "100%";
        movieContent.style.height = "100%";
        movieContent.style.borderRadius = "10px";
        movieContent.style.display = "flex";
        movieContent.style.flexDirection = "column";
        //styling movie image box
        movieImageBox.style.width = "100%";
        movieImageBox.style.height = "300px";
        movieImageBox.style.background = "rgb(33, 33, 33, 0.5)";
        movieImageBox.setAttribute("href", `${data[j].profile_picture_url}`);
        movieImageBox.style.textDecoration = "none";
        //styling movie image
        movieImage.style.width = "100%";
        movieImage.style.height = "300px";
        movieImage.style.objectFit = "cover";
        movieImage.style.borderRadius = "10px 10px 0px 0px";
        movieImage.src = data[j].profile_picture_url;
        //styling movie details
        movieDetails.style.width = "100%";
        movieDetails.style.background = "rgb(33, 33, 33, 0.5)";
        movieDetails.style.height = "100%";
        movieDetails.style.borderRadius = "0px 0px 10px 10px";
        movieDetails.style.padding = "12px";
        movieDetails.style.display = "flex";
        movieDetails.style.flexDirection = "column";
        movieDetails.style.gap = "5px";
        //styling movie title
        movieTitle.style.width = "100%";
        movieTitle.innerHTML = data[j].original_title;
        //styling movie title
        movieDate.style.width = "100%";
        movieDate.innerHTML = `Release Date: ${data[j].release_date}`;
        //styling movie title
        moviePopularity.style.width = "100%";
        moviePopularity.innerHTML = `Popularity: ${data[j].popularity}`;
    
        //Appending the elements to make each movie frame
        nowPlayingMovie.appendChild(movies);
        movies.appendChild(movieContent);
        movieContent.appendChild(movieImageBox);
        movieImageBox.appendChild(movieImage);
        movieContent.appendChild(movieDetails);
        movieDetails.appendChild(movieTitle);
        movieDetails.appendChild(movieDate);
        movieDetails.appendChild(moviePopularity);
      }
      
      nowPlayingMoviesList();
    }
  })
  .catch(function (err) {
    console.log(`The error is ${err}`);
  });

"https://moviesfrees.netlify.app/movie_overview/693134"

let homeBtn = document.querySelector("a.home-link");
const menuButtons = document.querySelectorAll(".menu-box > section > a");
const menuIcons = document.querySelectorAll(".menu-box > section > a > img");

for (let i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("mouseover", () => {
    //after hovering, the condition to check if the current icon is the default icon evaluate to true then run the code
    if (menuButtons[i].getAttribute("class") === "home-link") {
      //an event that changes the state of the icons back to default icons when each first button is mouseout
      menuButtons[i].addEventListener("mouseout", () => {
        menuIcons[i].setAttribute("src", "/asset/icon/home.png");
        menuIcons[i + 1].setAttribute("src", "./asset/icon/heart.png");
        menuIcons[i + 2].setAttribute("src", "./asset/icon/clock.png");
        menuIcons[i + 3].setAttribute("src", "./asset/icon/setting.png");
      });

      /*The code that changes default icon to hovered icon for the first element in the menu list but the other icon should remain default*/
      menuIcons[i].setAttribute("src", "./asset/icon/home-hover.png");
      menuIcons[i + 1].setAttribute("src", "./asset/icon/heart.png");
      menuIcons[i + 2].setAttribute("src", "./asset/icon/clock.png");
      menuIcons[i + 3].setAttribute("src", "./asset/icon/setting.png");
    } else if (menuButtons[i].getAttribute("class") === "favorite-link") {
      //an event that changes the state of the icons back to default icons when each second button is mouseout
      menuButtons[i].addEventListener("mouseout", () => {
        menuIcons[i - 1].setAttribute("src", "./asset/icon/home.png");
        menuIcons[i].setAttribute("src", "./asset/icon/heart.png");
        menuIcons[i + 1].setAttribute("src", "./asset/icon/clock.png");
        menuIcons[i + 2].setAttribute("src", "./asset/icon/setting.png");
      });

      /*The code that changes default icon to hovered icon for the second element in the menu list but the other icon should remain default*/
      menuIcons[i - 1].setAttribute("src", "./asset/icon/home.png");
      menuIcons[i].setAttribute("src", "./asset/icon/heart-hover.png");
      menuIcons[i + 1].setAttribute("src", "./asset/icon/clock.png");
      menuIcons[i + 2].setAttribute("src", "./asset/icon/setting.png");
    } else if (menuButtons[i].getAttribute("class") === "wishlist-link") {
      //an event that changes the state of the icons back to default icons when each first button is mouseout
      menuButtons[i].addEventListener("mouseout", () => {
        menuIcons[i - 2].setAttribute("src", "./asset/icon/home.png");
        menuIcons[i - 1].setAttribute("src", "./asset/icon/heart.png");
        menuIcons[i].setAttribute("src", "./asset/icon/clock.png");
        menuIcons[i + 1].setAttribute("src", "./asset/icon/setting.png");
      });

      /*The code that changes default icon to hovered icon for the third element in the menu list but the other icon should remain default*/
      menuIcons[i - 2].setAttribute("src", "./asset/icon/home.png");
      menuIcons[i - 1].setAttribute("src", "./asset/icon/heart.png");
      menuIcons[i].setAttribute("src", "./asset/icon/clock-hover.png");
      menuIcons[i + 1].setAttribute("src", "./asset/icon/setting.png");
    } else if (menuButtons[i].getAttribute("class") === "settings-link") {
      //an event that changes the state of the icons back to default icons when each first button is mouseout
      menuButtons[i].addEventListener("mouseout", () => {
        menuIcons[i - 3].setAttribute("src", "/asset/icon/home.png");
        menuIcons[i - 2].setAttribute("src", "./asset/icon/heart.png");
        menuIcons[i - 1].setAttribute("src", "./asset/icon/clock.png");
        menuIcons[i].setAttribute("src", "./asset/icon/setting.png");
      });

      /*The code that changes default icon to hovered icon for the fourth element in the menu list but the other icon should remain default*/
      menuIcons[i - 3].setAttribute("src", "./asset/icon/home.png");
      menuIcons[i - 2].setAttribute("src", "./asset/icon/heart.png");
      menuIcons[i - 1].setAttribute("src", "./asset/icon/clock.png");
      menuIcons[i].setAttribute("src", "./asset/icon/setting-hover.png");
    }
  });
}

//The code for the dashboard menu-icons ends here 🤒🤒

/*The code for the coming soon button that changes the innerText to a marked text that a movie is successfully added to wishlist*/

//select all remind me buttons using querySelector
const remindBtn = document.querySelectorAll(".remind-me-later");

//select all P and span that hold the 🔔 emoji inside of the remind me buttons using querySelector
