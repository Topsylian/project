"use strict";
/*

/*let url = "https://movieapi-tau.vercel.app/movies";*/

/*
let imagesArray;

async function fetchMovies() {
  try {
    const result = await fetch("https://movieapi-tau.vercel.app/movies");
  const data = await result.json();
  console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

let promise = fetchMovies();

promise
.then(function(data) {
  for (let i = 0; i < data.length; i++) {
  myArray.push(data[i]);
  }
})
*/

let movie = [
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    images: [
      "/asset/images/movie-1.jpg",
      "/asset/images/movie-3.jpg",
      "/asset/images/movie-4.jpg",
    ],
    type: "Comedy . sciFi . 3d",
    country: "USA",
    minute: "135min"
  },
  {
    Title: "Tiger 3",
    Year: "2023",
    Rated: "PG-13",
    Released: "18 Dec 2024",
    type: "Comedy . Action",
    country: "India",
    minute: "53min"
  },
  {
    Title: "The Walking Dead",
    Year: "2023",
    Rated: "PG-13",
    Released: "18 Dec 2024",
    type: "Horror",
    country: "USA",
    minute: "93min"
  },
  {
    Title: "Dunki",
    Year: "2023",
    Rated: "PG-13",
    Released: "18 Dec 2024",
    type: "Comedy . Action",
    country: "India",
    minute: "149min"
  },
];

let mainMovieArray;

function fetchData(msg) {
  return new Promise((resolve, reject) => {
    if (typeof msg === "object") {
      resolve(msg);
    } else {
      reject("unable to activate Ija mode");
    }
  });
}

let popularMovies = document.querySelectorAll(
  ".popular-movie h4.popular-movie-title"
);

fetchData(movie)
  .then(function (data) {
    console.log(data);
    array = data[0].images;

    data.forEach(function (el) {
      popularMovies[data.indexOf(el)].innerText = el.Title;
      genre[data.indexOf(el)].innerText = el.type;
      language[data.indexOf(el)].innerText = el.country;
      minutes[data.indexOf(el)].innerText = el.minute;
    });
  })
  .catch(function (err) {
    console.log(err);
  });

let array;

let mainImage = document.querySelector(".mainCard > img");
let i = 0;
let timer = 5000;

function changeImg() {
  mainImage.src = array[i];
  i++;
  if (i >= array.length) {
    i = 0;
  }
}
let genreBox = document.querySelector(".genre-box");
let genre = document.querySelectorAll(".genre");
let language = document.querySelectorAll(".language");
let minutes = document.querySelectorAll(".minutes");

for (let k = 0; k < genre.length; k++) {
  const genreEl = genre[k];
  const minutesEl = minutes[k]
  const languageEl = language[k]

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

/*
let homeBtn = document.querySelector("a.home-link");
const menuButtons = document.querySelectorAll(".menu-box > section > a");
const menuIcons = document.querySelectorAll(".menu-box > section > a > img");

for (let i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("click", () => {
    if (menuButtons[i].getAttribute("class") === "home-link") {
			menuButtons[i].classList.add("home-link-over");
    } else if (menuButtons[i].getAttribute("class") === "favorite-link") {
      menuButtons[i].setAttribute("class", "home-link");
      menuButtons[i].setAttribute("class", "favorite-link-hover");
      menuButtons[i].style.backgroundColor = "rgb(39, 164, 35)";
		} else {
			menuButtons[i].classList.remove("home-link-hover");
    }
  });
}

for (let i = 0; i < menuIcons.length; i++) {
	menuIcons[i].src = "/asset/icon/home.png";
}


function myCounter() {
  let num = 1;

  function add() {
    return num++;
  }

  return add;
}

const result = myCounter();

console.log(result());
console.log(result());
console.log(result());
console.log(result());

function fetchData(callback) {
  setTimeout(() => {
    const data = {
      message: "Data fetched successfully!",
    };
    callback(data);
  }, 2000);
}

fetchData((result) => {
  console.log(result.message);
});

const numbers = [1, 2, 3, 4, 5];

function processArray(arr, callback) {
	let newArr = [];
	for (const number of arr) {
		newArr.push(callback(number));
	}

	return newArr;
}

function squareCallback(num) {
	return num * num;
}

const squaredNumbers = processArray(numbers, squareCallback);

console.log(squaredNumbers);
*/
