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

// ===== CARROSSEL DE VÍDEOS VIP (sem autoplay) =====
let vipVideoIndex = 0;
const totalVipVideoSlides = 4;
let vipVideoVisibleSlides = window.innerWidth <= 768 ? 1 : 3;

function updateVipVideoCarousel() {
  const track = document.getElementById('vip-video-track');
  if (!track) return;
  const slideWidth = 100 / vipVideoVisibleSlides;
  track.style.transform = `translateX(-${vipVideoIndex * slideWidth}%)`;
}

function moveVipVideoCarousel(direction) {
  const maxIndex = Math.max(totalVipVideoSlides - vipVideoVisibleSlides, 0);
  vipVideoIndex += direction;

  if (vipVideoIndex > maxIndex) vipVideoIndex = 0;
  if (vipVideoIndex < 0) vipVideoIndex = maxIndex;

  updateVipVideoCarousel();
}

window.addEventListener('resize', function () {
  vipVideoVisibleSlides = window.innerWidth <= 768 ? 1 : 3;
  vipVideoIndex = 0;
  updateVipVideoCarousel();
});

document.addEventListener('DOMContentLoaded', function () {
  updateVipVideoCarousel();
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

// === Meta Pixel: rastreamento de InitiateCheckout ===
document.addEventListener('DOMContentLoaded', function () {
  const botoesCompra = document.querySelectorAll('.btn-cta');

  botoesCompra.forEach(function (botao) {
    botao.addEventListener('click', function (e) {
      // Só dispara o evento para links que vão pro checkout (Hotmart)
      const destino = botao.getAttribute('href');
      if (destino && destino.includes('pay.hotmart.com')) {

        if (typeof fbq === 'function') {
          fbq('track', 'InitiateCheckout');
        }

        // Pequeno delay pra garantir que o pixel dispare antes do redirecionamento,
        // já que o link abre na mesma aba
        e.preventDefault();
        setTimeout(function () {
          window.location.href = destino;
        }, 150);
      }
    });
  });
});