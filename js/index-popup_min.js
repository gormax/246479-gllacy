var link=document.querySelector(".contact-btn"),popup=document.querySelector(".feedback"),close=popup.querySelector(".close-btn"),login=popup.querySelector(".name");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("popup-window"),login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("popup-window")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("popup-window")&&popup.classList.remove("popup-window")});