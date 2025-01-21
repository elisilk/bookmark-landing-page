/* Mobile Nav Menu */

const header = document.getElementById("header");
const primaryNavToggle = document.querySelector(
  '[aria-controls="primary-nav"]'
);
const primaryNav = document.querySelector('[id="primary-nav"]');

const handleMobileNavToggleClick = (e) => {
  const navOpened = header.getAttribute("aria-expanded");
  if (navOpened === "false") {
    header.setAttribute("aria-expanded", "true");
    primaryNav.classList.toggle("hidden");
  } else {
    header.setAttribute("aria-expanded", "false");
    primaryNav.classList.toggle("hidden");
  }
};

primaryNavToggle.addEventListener("click", handleMobileNavToggleClick);

/* Slider - Control Buttons */

const sliderControlButtons = document.querySelectorAll(
  "#slider__controls button"
);
const sliderContainer = document.querySelector("#slider");
const sliderSlides = document.querySelectorAll("#slider > *");
const sliderNumSlides = sliderSlides.length;

const sliderGetSlideIndexAtCurrentPosition = () => {
  return Array.from(sliderSlides).findIndex((slide) => {
    return sliderContainer.scrollLeft <= slide.offsetLeft;
  });
};

const sliderMoveTo = (index) => {
  // Move container scroll to the current active slide
  sliderContainer.scrollTo({
    top: 0,
    left: sliderSlides[index].offsetLeft,
    behavior: "smooth" /* or "instant" */,
  });
};

const resetControlButtons = () => {
  sliderControlButtons.forEach((button) => (button.dataset.selected = "false"));
};

const handleSliderControlButtonsClick = (e) => {
  e.preventDefault();
  if (e.target.dataset.selected !== "true") {
    resetControlButtons();
    e.target.dataset.selected = "true";
    sliderMoveTo(Number(e.target.dataset.slide) - 1);
  }
};

sliderControlButtons.forEach((button) =>
  button.addEventListener("click", handleSliderControlButtonsClick)
);

/* Slider - Intersection Observer */

const intersectionOptions = {
  root: sliderContainer,
  rootMargin: "0px",
  threshold: 1.0,
};

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log("Intersecting:", entry.target.dataset.slide);
      resetControlButtons();
      sliderControlButtons[
        Number(entry.target.dataset.slide) - 1
      ].dataset.selected = "true";
    }
  });
};

const observer = new IntersectionObserver(
  intersectionCallback,
  intersectionOptions
);

sliderSlides.forEach((slide) => {
  observer.observe(slide);
});

/* Email Form */

const form = document.getElementById("email-form");
const formEmail = document.getElementById("email");
const formSubmit = document.getElementById("email-submit-button");
const formDialog = document.getElementById("email-form-dialog");
const formDialogEmail = document.getElementById("submitted-email");

const handleDialogClose = (e) => {
  document.activeElement.blur();
};

const handleSubmit = (e) => {
  // Prevent the form from being sent by canceling the event
  e.preventDefault(e);
  if (formEmail.validity.valid) {
    const data = Object.fromEntries(new FormData(e.target));
    formDialogEmail.textContent = data["email"];
    formDialog.showModal();
    form.reset();
  } else {
    document.activeElement.blur();
  }
};

form.addEventListener("submit", handleSubmit);
formDialog.addEventListener("close", handleDialogClose);
