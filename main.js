const hamberger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");
hamberger.addEventListener("click", function () {
  opacity.classList.add("tigger");
});

const opacity = document.querySelector(".opacity");
const close = document.querySelector(".close");
close.addEventListener("click", function () {
  opacity.classList.remove("tigger");
});
