function startCountdown(minutes) {
  let totalSeconds = minutes * 60;
  const minEl = document.getElementById('timer-min');
  const secEl = document.getElementById('timer-sec');

  function updateTimer() {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    minEl.textContent = String(m).padStart(2, '0');
    secEl.textContent = String(s).padStart(2, '0');

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      clearInterval(interval);
    }
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  startCountdown(7);
});

function startCountdown(minutes) {
  let totalSeconds = minutes * 60;
  const minEl = document.getElementById('timer-min');
  const secEl = document.getElementById('timer-sec');

  function updateTimer() {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    minEl.textContent = String(m).padStart(2, '0');
    secEl.textContent = String(s).padStart(2, '0');

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      clearInterval(interval);
    }
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  startCountdown(7);
});

// ===== CARROSSEL DE PRATOS =====
let carouselIndex = 0;
const totalSlides = 9; // ajuste este número se usar menos de 15 fotos
let visibleSlides = window.innerWidth <= 768 ? 1 : 3;
let carouselInterval;

function updateCarousel() {
  const track = document.getElementById('pratos-track');
  if (!track) return;
  const slideWidth = 100 / visibleSlides;
  track.style.transform = `translateX(-${carouselIndex * slideWidth}%)`;
}

function moveCarousel(direction) {
  const maxIndex = totalSlides - visibleSlides;
  carouselIndex += direction;

  if (carouselIndex > maxIndex) carouselIndex = 0;
  if (carouselIndex < 0) carouselIndex = maxIndex;

  updateCarousel();
  resetAutoplay();
}

function resetAutoplay() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => moveCarousel(1), 4000);
}

window.addEventListener('resize', function () {
  visibleSlides = window.innerWidth <= 768 ? 1 : 3;
  carouselIndex = 0;
  updateCarousel();
});

document.addEventListener('DOMContentLoaded', function () {
  updateCarousel();
  resetAutoplay();
});

// ===== FAQ ACCORDION =====
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = button.nextElementSibling;
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('active');
    el.querySelector('.faq-answer').style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ===== SUMÁRIO ACCORDION =====
function toggleSumario(button) {
  const item = button.parentElement;
  const answer = button.nextElementSibling;
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.sumario-item').forEach(el => {
    el.classList.remove('active');
    el.querySelector('.sumario-answer').style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}