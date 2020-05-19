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
