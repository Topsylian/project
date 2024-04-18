/*The code below is to fetch the api data in an asynchronous way*/

let movies;

async function fetchMovies() {
  try {
    const result = await fetch(
      "https://movieapp-zyqr.onrender.com/api/v1/nowplayingmovies"
    );
    movies = await result.json();
    //console.log(movies);
    return movies;
  } catch (error) {
    console.log(
      `Getting data from api resulted in an error and ${error.message}`
    );
  }
}

async function fetchPopular() {
  try {
    const response = await fetch(
      "https://movieapp-zyqr.onrender.com/api/v1/popular"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(
      `Getting data from api resulted in an error and ${error.message}`
    );
  }
}

//saving the return Promise into a variable called promise to make use of the return data.

//let promise = fetchMovies();

let mainMovieTitle = document.querySelector(".title > h1");
let mainImage = document.querySelector(".mainCard > img");
let mainDate = document.querySelector(".movie-year");
//let mainRating = document.querySelector(".movie-rate");
let mainPlot = document.querySelector(".movie-plot > p");
let mainPopularity = document.querySelector(".popularity");

//Declare variable that display other movie title, genre, runtime, votes, and language.

let nowPlayingMovie = document.querySelector(".now-playing-movie-box");
let popularMovie = document.querySelector(".popular-movie-box");

let frameLen = 20; //number of videos in the home page;

fetchMovies()
  .then(function (data) {
    console.log(movies);
    let dataLen = data.length;

    console.log(data[0]);
    //Using the first data from the promise object for the mainFrame by showcasing the images from the api.

    //setting the default image to display;
    mainImage.src = data[0].profile_picture_url;
    console.log(data[0]);
    //setting the movie title to the main movie frame
    mainMovieTitle.innerText = data[0].original_title;
    //setting the movie story to the main movie frame
    mainPlot.innerText = data[0].overview;
    //setting the movie popularity to the main movie frame
    mainPopularity.innerText = `Popularity: ${data[0].popularity}`;
    //setting the movie date to the main movie frame
    mainDate.innerText = `Release Date: ${data[0].release_date}`;
    //create element for each movie object from the Api data

    for (let j = 0; j < frameLen; j++) {
      function nowPlayingMoviesList() {
        let movies = document.createElement("div");
        let movieContent = document.createElement("div");
        let movieImageBox = document.createElement("a");
        let movieImage = document.createElement("img");
        let movieDetails = document.createElement("div");
        let movieTitle = document.createElement("h4");
        let movieDate = document.createElement("p");
        let moviePopularity = document.createElement("p");
        let watch = document.createElement("a");
        //styling movie box
        movies.style.width = "23%";
        movies.style.height = "400px";
        movies.style.borderRadius = "10px";
        movies.style.background = "rgb(80, 80, 80)";
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
        movieImageBox.style.display = "flex";
        movieImageBox.setAttribute("href", `./page/card.html`);
        let innerId = data[j].id;
        let innerSrc = data[j].profile_picture_url;
        let innerTitle = data[j].original_title;
        let innerPlot = data[j].overview;
        let innerDate = data[j].release_date;
        movieImageBox.addEventListener("click", () => {
          localStorage.setItem("currentId", innerId);
          localStorage.setItem("currentSrc", innerSrc);
          localStorage.setItem("currentTitle", innerTitle);
          localStorage.setItem("currentPlot", innerPlot);
          localStorage.setItem("currentReleaseDate", innerDate);
        });
        //movieImageBox.style.textDecoration = "none";
        //styling movie image
        movieImage.style.width = "100%";
        movieImage.style.height = "300px";
        movieImage.style.objectFit = "cover";
        movieImage.style.borderRadius = "10px 10px 0px 0px";
        movieImage.setAttribute("src", data[j].profile_picture_url);
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

        function handleScreenSize(media) {
          if (media.matches) {
            movies.style.width = "100%";
          }
        }

        const mediaQuery = window.matchMedia("(max-width: 440px)");
        handleScreenSize(mediaQuery);

        mediaQuery.addEventListener("change", handleScreenSize);
      }

      nowPlayingMoviesList();
    }
  })
  .catch(function (err) {
    console.log(`The error is ${err}`);
  });

fetchPopular()
  .then((data) => {
    for (let j = 0; j < frameLen; j++) {
      function popularMoviesList() {
        let movies = document.createElement("div");
        let movieContent = document.createElement("div");
        let movieImageBox = document.createElement("a");
        let movieImage = document.createElement("img");
        let movieDetails = document.createElement("div");
        let movieTitle = document.createElement("h4");
        let movieDate = document.createElement("p");
        let moviePopularity = document.createElement("p");
        let watch = document.createElement("a");
        //styling movie box
        movies.style.width = "23%";
        movies.style.height = "400px";
        movies.style.borderRadius = "10px";
        movies.style.background = "rgb(80, 80, 80)";
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
        movieImageBox.style.display = "flex";
        movieImageBox.setAttribute("href", `./page/card.html`);
        let innerId = data[j].id;
        let innerSrc = data[j].profile_picture_url;
        let innerTitle = data[j].original_title;
        let innerPlot = data[j].overview;
        let innerDate = data[j].release_date;
        movieImageBox.addEventListener("click", () => {
          localStorage.setItem("currentId", innerId);
          localStorage.setItem("currentSrc", innerSrc);
          localStorage.setItem("currentTitle", innerTitle);
          localStorage.setItem("currentPlot", innerPlot);
          localStorage.setItem("currentReleaseDate", innerDate);
        });
        //movieImageBox.style.textDecoration = "none";
        //styling movie image
        movieImage.style.width = "100%";
        movieImage.style.height = "300px";
        movieImage.style.objectFit = "cover";
        movieImage.style.borderRadius = "10px 10px 0px 0px";
        movieImage.setAttribute("src", data[j].profile_picture_url);
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
        popularMovie.appendChild(movies);
        movies.appendChild(movieContent);
        movieContent.appendChild(movieImageBox);
        movieImageBox.appendChild(movieImage);
        movieContent.appendChild(movieDetails);
        movieDetails.appendChild(movieTitle);
        movieDetails.appendChild(movieDate);
        movieDetails.appendChild(moviePopularity);

        function handleScreenSize(media) {
          if (media.matches) {
            movies.style.width = "100%";
          }
        }

        const mediaQuery = window.matchMedia("(max-width: 440px)");
        handleScreenSize(mediaQuery);

        mediaQuery.addEventListener("change", handleScreenSize);
      }
      popularMoviesList();
    }
  })
  .catch((err) => {
    console.log(err);
  });

//("https://moviesfrees.netlify.app/movie_overview/693134");

//styling the watch
/*
        watch.style.width = "100%";
        watch.style.display = "flex";
        watch.style.color = "aliceblue";
        watch.setAttribute("href", `/page/card.html`);
        watch.style.textDecoration = "none";
        watch.innerText = "Watch";
        watch.addEventListener("click", async () => {
          try {
            let showPlayer = await import('./card.js');
            showPlayer();
          } catch (error) {
            console.log(error);
          }
        });
*/

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
