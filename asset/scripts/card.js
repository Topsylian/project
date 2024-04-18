//import fetchMovies from "./dashboard.js";
let storedId = localStorage.getItem("currentId");
let storedSrc = localStorage.getItem("currentSrc");
let storedTitle = localStorage.getItem("currentTitle");
let storedPlot = localStorage.getItem("currentPlot");
let storedDate = localStorage.getItem("currentDate");

function showPlayer() {
  let container = document.querySelector("main");
  let iPlayer = document.createElement("iframe");
  let optionPlayer = document.createElement("p");
  let player = document.createElement("a");
  //let imageBox = document.createElement("div");
  //let image = document.createElement("img");
  let movieDisplay = document.createElement("div");
  let movieImageBox = document.createElement("div");
  let movieImage = document.createElement("img");
  let movieDetails = document.createElement("div");
  let movieTitle = document.createElement("h1");
  let moviePlot = document.createElement("p");
  let movieDate = document.createElement("p");
  let movieDuration = document.createElement("p");
  let moviePopularity = document.createElement("p");
  let movieLanguage = document.createElement("p");

  //styling the iFrame to display the video
  iPlayer.style.width = "100%";
  iPlayer.style.height = "60vh";
  iPlayer.style.borderRadius = "10px";
  iPlayer.style.background = "rgb(138, 192, 136)";
  iPlayer.style.margin = "20px 0px";
  iPlayer.src = storedSrc;
  //styling the optionPlayer by clicking another player if the current one failed to load
  optionPlayer.style.width = "100%";
  optionPlayer.style.textAlign = "center";
  //optionPlayer.innerText =
    //"If the current player failed, click on other player";
  optionPlayer.style.marginBottom = "15px";
  //styling player
  player.style.width = "200px";
  player.style.height = "fit-content";
  player.style.padding = "15px";
  player.style.background = "rgb(80, 80, 80)";
  player.style.textAlign = "center";
  player.style.borderRadius = "10px";
  player.style.textDecoration = "none";
  player.style.color = "aliceblue";
  player.innerText = "Play video";
  player.setAttribute("href", "http://vidsrc.to/embed/movie");
  player.addEventListener("click", () => {
    player.setAttribute("href", `http://vidsrc.to/embed/movie/${storedId}`);
  });
  player.style.marginBottom = "50px";
  //styling movieDisplay
  movieDisplay.style.width = "100%";
  movieDisplay.style.height = "600px";
  movieDisplay.style.background = "rgb(80, 80, 80)";
  movieDisplay.style.borderRadius = "10px";
  movieDisplay.style.display = "flex";
  movieDisplay.style.gap = "12px";
  movieDisplay.style.flexDirection = "row";
  movieDisplay.style.margin = "20px 0px";
  //styling movieImageBox
  movieImageBox.style.width = "30%";
  movieImageBox.style.height = "300px";
  movieImageBox.style.borderRadius = "10px";
  movieImageBox.style.display = "flex";
  movieImageBox.style.background = "teal";
  //styling movieImage
  movieImage.style.width = "100%";
  movieImage.style.height = "100%";
  movieImage.style.borderRadius = "10px";
  movieImage.style.objectFit = "cover";
  movieImage.src = storedSrc;
  //styling movieDetails
  movieDetails.style.width = "80%";
  movieDetails.style.height = "100%";
  movieDetails.style.borderRadius = "10px";
  movieDetails.style.display = "flex";
  movieDetails.style.gap = "10px";
  movieDetails.style.flexDirection = "column";
  movieDetails.style.padding = "10px";
  //styling movieTitle
  movieTitle.innerText = storedTitle;
  //styling moviePlot
  moviePlot.innerText = storedPlot;
  //styling movieDate
  movieDate.innerText = storedDate;
  //styling movieLanguage
 //movieLanguage.innerText = `${storedLanguage}`;

  container.appendChild(iPlayer);
  container.appendChild(optionPlayer);
  container.appendChild(player);
  container.appendChild(movieDisplay);
  movieDisplay.appendChild(movieImageBox);
  movieDisplay.appendChild(movieDetails);
  movieImageBox.appendChild(movieImage);
  movieDetails.appendChild(movieTitle);
  movieDetails.appendChild(moviePlot);
  movieDetails.appendChild(movieDate);
  //movieDetails.appendChild(movieDuration);
  //movieDetails.appendChild(moviePopularity);
  //movieDetails.appendChild(movieLanguage);

  function handleScreenSize(media) {
    if (media.matches) {
      movieDisplay.style.flexDirection = 'column';
      movieImageBox.style.width = "100%";
      movieImageBox.style.borderRadius = "10px 10px 0px 0px";
      movieImage.style.borderRadius = "10px 10px 0px 0px";
      movieTitle.style.fontSize = "24pt";
      moviePlot.style.fontSize = "12px";
      moviePlot.style.lineHeight = "18px";
      moviePlot.style.color = "rgb(130, 130, 130)";
    }
  }

  const mediaQuery = window.matchMedia("(max-width: 440px)");
  handleScreenSize(mediaQuery);

  mediaQuery.addEventListener("change", handleScreenSize);
}

showPlayer();