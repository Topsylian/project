"use strict";
/*The code below is to fetch the api data in an asynchronous way*/

async function fetchMovies() {
  try {
    const result = await fetch("https://movieapi-tau.vercel.app/movies");
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

let mainMovieArray;

let popularMovies = document.querySelectorAll(
  ".popular-movie h4.popular-movie-title"
);

let array;

let mainImage = document.querySelector(".mainCard > img");
let i = 0;
let timer = 5000; //the timer for switching the images inside of the big movie frame.

//Declare variable that display other movie title, genre, runtime, votes, and language.

let otherMovieImg = document.querySelectorAll(".img-wrapper > img");
let genreBox = document.querySelector(".genre-box");
let genre = document.querySelectorAll(".genre");
let country = document.querySelectorAll(".language");
let minutes = document.querySelectorAll(".minutes");
let votes = document.querySelectorAll(".imdbVotes");
let rating = document.querySelectorAll(".popular-movie-rate > .rating-number");

promise
  .then(function (data) {
    let dataLen = data.length;
    console.log(dataLen);
    //Using the first data from the promise object for the mainFrame by showcasing the images from the api.
    //setting the default image to display;
    mainImage.src = data[0].Images[0];
    //setting the movie title to the main movie frame
    mainMovieTitle.innerText = data[0].Title;
    let array = data[0].Images;
    //use the array variable to receive the pictures from the Api
    function changeImg() {
      mainImage.src = array[i];
      i++;

      if (i >= array.length) {
        //reset the count to 0 after the initial count
        i = 0;
      }
    }
    //this interval will make the slideshow slide in an auto mode with a timer set for each display.
    setInterval(changeImg, timer);
    //The data.forEach is to iterate through the Api and return the value of each object property inside of the api data.
    for (let a = 0; a < dataLen; a++) {
      console.log(a)
      otherMovieImg[a].src = data[a].Images[1];
      popularMoviesTitle[a].innerText = data[a].Title;
      genre[a].innerText = data[a].Genre;
      country[a].innerText = data[a].Language;
      minutes[a].innerText = data[a].Runtime;
      rating[a].innerText = data[a].imdbRating;
      votes[a].innerText = data[a].imdbVotes;
    }
  })
  .catch(function (err) {
    console.log(`The error is ${err}`);
  });
  
/*The code below display slideshow of genre's box information*/

for (let k = 0; k < genre.length; k++) {
  const genreEl = genre[k]; //each genre element inside of genre-box
  const minutesEl = minutes[k]; //each runtime element inside of genre-box
  const languageEl = country[k]; //each language element inside of genre-box

  //function that display the genre's innerHTML
  function changeText() {
    if (languageEl.style.left === "-50%") {
      languageEl.style.left = "0%";
      genreEl.style.top = "-100%";
      minutesEl.style.bottom = "-100%";
    } else if (minutesEl.style.bottom === "-100%") {
      languageEl.style.left = "-100%";
      genreEl.style.top = "-100%";
      minutesEl.style.bottom = "20%";
    } else {
      genreEl.style.top = "20%";
      languageEl.style.left = "-50%";
      minutesEl.style.bottom = "-100%";
    }
  }

  setInterval(changeText, 4000);
}

setInterval(changeImg, timer);

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
const remindBtnPara = document.querySelectorAll(".remind-me-later > p");
const remindBtnSpan = document.querySelectorAll(".remind-me-later > span");
//loop through each button and add click event to each element
for (let a = 0; a < remindBtn.length; a++) {
  remindBtn[a].addEventListener("click", () => {
    if (
      remindBtnPara[a].innerText === "Remind me" &&
      remindBtnSpan[a].innerText === "🔔"
    ) {
      remindBtnPara[a].innerText = `Done`;
      remindBtnSpan[a].innerText = "✔";
    } else {
      remindBtnPara[a].innerText = `Remind me`;
      remindBtnSpan[a].innerText = "🔔";
    }
  });
}

/*
        otherMovieImg[j].src = data[k].Images[0];
        popularMoviesTitle[j].innerText = data[k].Title;
        genre[j].innerText = data[k].Genre;
        language[j].innerText = data[k].Language;
        minutes[j].innerText = data[k].Runtime;
        rating[j].innerText = data[k].imdbRating;
        votes[k].innerText = data[j].imdbVotes;
*/
