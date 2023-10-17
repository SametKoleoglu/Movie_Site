const arrow = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrow.forEach((element, index) => {
    const widthRatio = Math.floor(window.innerWidth / 330);
  let clickCounter = 0;
  const imageCounter = movieList[index].querySelectorAll("img").length;

  element.addEventListener("click", function () {
    clickCounter++;

    if (imageCounter - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      movieList[index].style.transform = `translateX(${
        movieList[index].computedStyleMap().get("transform")[0].x.value - 330
      }px)`;
    } 
    else {
      movieList[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});


const ball = document.querySelector(".toggle-bar");
const elements = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-bar,.movie-list-filter select,.movie-list-container");

ball.addEventListener("click",function(){
    elements.forEach((element)=>element.classList.toggle("active"));
});
