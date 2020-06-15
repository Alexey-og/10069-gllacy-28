'use strict';

var currentSlide = "1";
var slideSwitcher = document.querySelector(".slide-switcher");
var iceSlide = document.querySelectorAll(".ice-slider__item");
var slideSwitcherItem = document.querySelectorAll(".slide-switcher__item");

var feedbackButton = document.querySelector(".gllacy-contacts__button");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = document.querySelector(".feedback__close");
var overlay = document.querySelector(".overlay");


if (slideSwitcher) {
  slideSwitcher.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("slide-switcher__item")) {
      document.body.classList.remove("index-body--" + currentSlide);
      iceSlide[currentSlide - 1].classList.remove("slide-show");
      slideSwitcherItem[currentSlide - 1].classList.remove("slide-switcher__item--active");

      currentSlide = evt.target.dataset.slide;

      document.body.classList.add("index-body--" + currentSlide);
      iceSlide[currentSlide - 1].classList.add("slide-show");
      slideSwitcherItem[currentSlide - 1].classList.add("slide-switcher__item--active");
    };
  });
}

if (feedbackPopup) {
  feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });

  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedbackPopup.classList.contains("modal-show")) {
        feedbackPopup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
      }
    }
  });
}















