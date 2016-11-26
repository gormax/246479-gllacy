
var link = document.querySelector(".contact-btn");
var popup_background = document.querySelector(".feedback-background");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".close-btn");
var login = popup.querySelector(".name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup_background.classList.add("background-visible");
  popup.classList.add("popup-window");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup_background.classList.remove("background-visible");
  popup.classList.remove("popup-window");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-window")) {
      popup_background.classList.remove("background-visible");
      popup.classList.remove("popup-window");
    }
  }
});
