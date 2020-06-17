'use strict';

var currentSlide = "1";
var slideSwitcher = document.querySelector(".slide-switcher");
var iceSlide = document.querySelectorAll(".ice-slider__item");
var slideSwitcherItem = document.querySelectorAll(".slide-switcher__item");

var overlay = document.querySelector(".overlay");

var ESC_KEY = 27;
var TAB_KEY = 9;
var feedbackButton = document.querySelector(".gllacy-contacts__button");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = document.querySelector(".feedback__close");
var feedbackForm = document.querySelector(".feedback__form");
var feedbackName = document.querySelector(".feedback__name");
var feedbackEmail = document.querySelector(".feedback__email");

var firstFocusableElement = document.querySelector(".feedback__close");
var lastFocusableElement = document.querySelector(".feedback__button");

var isStorageSupport = true;
var storage = "";

var openPopup = function () {
  feedbackPopup.classList.add("modal-show");
  overlay.classList.add("modal-show");
};

var closePopup = function () {
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
};

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

try {
  storage = localStorage.getItem("feedbackName");
} catch (err) {
  isStorageSupport = false;
}

if (feedbackPopup) {
  feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    openPopup();
    if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
  });

  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopup();
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopup();
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESC_KEY) {
      evt.preventDefault();
      if (feedbackPopup.classList.contains("modal-show")) {
        closePopup();
      }
    }

    if (evt.keyCode === TAB_KEY) {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        evt.preventDefault();
      }
    }

    if (evt.keyCode === TAB_KEY && evt.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        evt.preventDefault();
      }
    }
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-error");
      feedbackPopup.style.width = feedbackPopup.offsetWidth;    /*  необходимо для возможности повторно потрясти форму без перезагрузки страницы  */
      feedbackPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("feedbackName", feedbackName.value);
      }
    }
  });
}
