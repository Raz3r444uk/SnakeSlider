const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesCount = mainSlide.querySelectorAll("div").length;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let active = 0;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    active++;
    if (active === slidesCount) {
      active = 0;
    }
  } else if (direction === "down") {
    active--;
    if (active < 0) {
      active = slidesCount - 1;
    }
  }
  const heigth = container.clientHeight;

  mainSlide.style.transform = `translateY(-${active * heigth}px)`;
  sidebar.style.transform = `translateY(${active * heigth}px)`;
}
