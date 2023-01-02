alert('You successfully linked your JavaScript file!');



function updateProgressBar( progressbar, value) {
  value = Math.round(value);
  progressbar.querySelector(".progress__fill").style.width = `${value}%`;
  progressbar.querySelector(".progress__text").textContent = `${value}%`;
}

function updateProgressBar(progressbar, value) {
  value = Math.round(value);
  progressbar.querySelector(".progress__fill_2").style.width = `${value}%`;
  progressbar.querySelector(".progress__text_2").textContent = `${value}%`;
}


function updateProgressBar(progressbar, value) {
  value = Math.round(value);
  progressbar.querySelector(".progress__fill_3").style.width = `${value}%`;
  progressbar.querySelector(".progress__text_3").textContent = `${value}%`;
}

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 125) { // Show backToTop
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
    

  }
  else {  // Hide backToTop} 
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250); 
    } 
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function backToTop() {
  window.scrollTo(0, 0); 
}

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};