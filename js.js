const searchIcon = document.querySelector(".search");
const searchInput = document.querySelector(".input");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close ");
const button = document.querySelector(".btn ");

searchIcon.addEventListener("click", function () {
  searchInput.classList.toggle("transform");
});
button.addEventListener("click", function () {
  popup.style.visibility = "visible";
  popup.style.transform = "scale(1)";
});
close.addEventListener("click", function () {
  popup.style.visibility = "hidden";
  popup.style.transform = "scale(.2)";
});
