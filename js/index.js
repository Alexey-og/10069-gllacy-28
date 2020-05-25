'use strict';

var bodyColor = document.querySelector(".index-body").style.backgroundColor;
var bodyImage = document.querySelector(".index-body").style.backgroundImage;


var indexBody = document.querySelector(".index-body");
var slideButton1 = document.querySelector(".slide-switcher__item-1");
var slideButton2 = document.querySelector(".slide-switcher__item-2");
var slideButton3 = document.querySelector(".slide-switcher__item-3");
var iceSlide1 = document.querySelector(".ice-slide--1");
var iceSlide2 = document.querySelector(".ice-slide--2");
var iceSlide3 = document.querySelector(".ice-slide--3");
indexBody.style.backgroundColor = "#849D8F";
indexBody.style.backgroundImage = "url('img/ice-slide-1.png')";

slideButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  indexBody.style.backgroundColor = "#849D8F";
  indexBody.style.backgroundImage = "url('img/ice-slide-1.png')";
  /* bodyImage = "url('../img/ice-slide-1.png')"; */

  iceSlide2.classList.remove("slide-show");
  iceSlide3.classList.remove("slide-show");
  slideButton2.classList.remove("slide-switcher__item--active");
  slideButton3.classList.remove("slide-switcher__item--active");
  iceSlide1.classList.add("slide-show");
  slideButton1.classList.add("slide-switcher__item--active");
});

slideButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  indexBody.style.backgroundColor = "#8996A6";
  indexBody.style.backgroundImage = "url('img/ice-slide-2.png')";
  /* bodyImage = "url('../img/ice-slide-2.png')"; */
  /* indexBody.classList.remove("index-body--1");
  indexBody.classList.remove("index-body--3"); */
  iceSlide1.classList.remove("slide-show");
  iceSlide3.classList.remove("slide-show");
  slideButton1.classList.remove("slide-switcher__item--active");
  slideButton3.classList.remove("slide-switcher__item--active");
  iceSlide2.classList.add("slide-show");
  slideButton2.classList.add("slide-switcher__item--active");
});

slideButton3.addEventListener("click", function (evt) {
  evt.preventDefault();
  indexBody.style.backgroundColor = "#9D8B84";
  indexBody.style.backgroundImage = "url('img/ice-slide-3.png')";
  /* bodyImage = "url('../img/ice-slide-3.png')"; */
  /* indexBody.classList.remove("index-body--1");
  indexBody.classList.remove("index-body--2"); */
  iceSlide1.classList.remove("slide-show");
  iceSlide2.classList.remove("slide-show");
  slideButton1.classList.remove("slide-switcher__item--active");
  slideButton2.classList.remove("slide-switcher__item--active");
  /* indexBody.classList.add("index-body--3"); */
  iceSlide3.classList.add("slide-show");
  slideButton3.classList.add("slide-switcher__item--active");
});







document.querySelector(".gllacy-map__pin").classList.add("visually-hidden");




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

