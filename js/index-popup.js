
var link = document.querySelector(".contact-btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".close-btn");
var login = popup.querySelector(".name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-window");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-window");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-window")) {
      popup.classList.remove("popup-window");
    }
  }
});
