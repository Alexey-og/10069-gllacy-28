'use strict';

var search_icon = document.querySelector(".search__icon");
var search_form = document.querySelector(".search__form");
var search_input = document.querySelector(".search__input");

search_icon.addEventListener("focus", function(evt) {
  evt.preventDefault;
  /* search_icon.style.backgroundColor = "#ffffff"; */
  /* search_icon.style.backgroundImage = "url('../img/icon-search-black.svg')"; */
  search_form.style.display = "flex";
  search_input.focus();
});

search_input.addEventListener("focusout", function(evt) {
  evt.preventDefault;
  search_form.style.display = "none";
});

window.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {
    evt.preventDefault;
    search_form.style.display = "none";
  };
});




var feedbackButton = document.querySelector(".gllacy-contacts__button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});
