'use strict';

var currentSlide = "1";
var slideSwitcher = document.querySelector(".slide-switcher");
var iceSlide = document.querySelectorAll(".ice-slider__item");
var slideSwitcherItem = document.querySelectorAll(".slide-switcher__item");

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




var loginIcon = document.querySelector(".login__icon");
var loginForm = document.querySelector(".login__form");
var loginEmail = loginForm.querySelector("[name=email]");
var loginPassword = loginForm.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("loginEmail");
} catch (err) {
  isStorageSupport = false;
}

loginIcon.addEventListener("focus", function (evt) {
  evt.preventDefault();
  loginForm.classList.add("modal-show");
  if (storage) {
    loginEmail.value = storage;
    password.focus();
  } else {
    loginEmail.focus();
  }
});

/* loginForm.addEventListener("blur", function (evt) {
  evt.preventDefault();
  loginForm.classList.remove("modal-show");
}); */

loginForm.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  }
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginEmail.value || !loginPassword.value) {
    evt.preventDefault();
    loginForm.classList.remove("modal-error");
    loginForm.offsetWidth = loginForm.offsetWidth;
    loginForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("loginEmail", loginEmail.value);
    }
  }
});



/*

var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";
try {
storage = localStorage.getItem("login");
} catch (err) {
isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
if (storage) {
login.value = storage;
password.focus();
} else {
login.focus();
}
});
close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
if (!login.value || !password.value) {
evt.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
} else {
if (isStorageSupport) {
localStorage.setItem("login", login.value);
}
}
});
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
if (popup.classList.contains("modal-show")) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
}
}
});
</script>
 */
