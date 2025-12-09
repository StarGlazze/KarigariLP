/* SMOOTH SCROLL NAV */
document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", e => {
        const id = a.getAttribute("href");
        if (id.startsWith("#")) {
            e.preventDefault();
            document.querySelector(id).scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* HERO SLIDER */
let heroImages = ["images/product4.jpg", "images/product5.jpg", "images/product3.jpg"];
let heroIndex = 0;
const heroImg = document.querySelector(".hero-img");

function nextHero() {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImg.style.opacity = "0";
    setTimeout(() => {
        heroImg.src = heroImages[heroIndex];
        heroImg.style.opacity = "1";
    }, 250);
}
document.querySelector(".hero-next").addEventListener("click", nextHero);
setInterval(nextHero, 5000);

/* FLOAT HOVER */
function floatHover(selector) {
    document.querySelectorAll(selector).forEach(el => {
        el.addEventListener("mouseenter", () => el.style.transform = "translateY(-8px)");
        el.addEventListener("mouseleave", () => el.style.transform = "translateY(0)");
    });
}
floatHover(".cat-item");
floatHover(".promo-card");

/* FADE IN */
const fadeEls = document.querySelectorAll(".cat-item, .promo-card, .article-card");
fadeEls.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
});
const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.transition = "0.6s";
            e.target.style.opacity = 1;
            e.target.style.transform = "translateY(0)";
            fadeObs.unobserve(e.target);
        }
    });
});
fadeEls.forEach(el => fadeObs.observe(el));

// CART BADGE: show count on page load
function updateCartBadge() {
    const cartBadge = document.querySelector(".cart-badge");
    if (!cartBadge) return;
    const count = parseInt(localStorage.getItem("cartCount") || "0", 10);
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? "flex" : "none";
}

// run on load
updateCartBadge();

// Notif saat icon cart ditekan
document.querySelector(".cart-icon").addEventListener("click", () => {
    const count = parseInt(localStorage.getItem("cartCount") || "0", 10);
    showCartNotification(count);
});

// Function untuk menampilkan notifikasi gold di kanan
function showCartNotification(count) {
    // Hapus notif lama jika ada
    const oldNotif = document.querySelector(".cart-notification");
    if (oldNotif) oldNotif.remove();

    // Buat notif baru
    const notif = document.createElement("div");
    notif.className = "cart-notification";
    notif.innerHTML = count === 0 
        ? `<strong>Your cart is empty</strong>` 
        : `<strong>You have ${count} item${count > 1 ? 's' : ''} in your cart</strong>`;
    
    document.body.appendChild(notif);

    // Trigger animasi masuk
    setTimeout(() => notif.classList.add("show"), 10);

    // Auto hide setelah 3 detik
    setTimeout(() => {
        notif.classList.remove("show");
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

/* ARTICLE SLIDER */
const track = document.querySelector(".articles-track");
const prev = document.getElementById("articlePrev");
const next = document.getElementById("articleNext");

let position = 0;
const slideWidth = 350 + 24; // width card + gap
const maxSlides = 6 - 3; // total 6, tampil 3

next.addEventListener("click", () => {
    if (position < maxSlides) {
        position++;
        track.style.transform = `translateX(-${position * slideWidth}px)`;
    }
});

prev.addEventListener("click", () => {
    if (position > 0) {
        position--;
        track.style.transform = `translateX(-${position * slideWidth}px)`;
    }
});
/* ARTICLES: drag-to-scroll + snap handling (no buttons) */
(function(){
  const track = document.querySelector('.articles-track');
  if (!track) return;

  let isDown = false;
  let startX, scrollLeft;

  // pointer down
  track.addEventListener('pointerdown', (e) => {
    isDown = true;
    track.setPointerCapture(e.pointerId);
    startX = e.clientX;
    scrollLeft = track.scrollLeft;
    track.classList.add('dragging');
  });

  // pointer move
  track.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const x = e.clientX;
    const walk = (startX - x); // how much we moved
    track.scrollLeft = scrollLeft + walk;
  });

  // pointer up / leave
  const stopDrag = (e) => {
    isDown = false;
    track.classList.remove('dragging');
    try { track.releasePointerCapture(e && e.pointerId); } catch(e){ }
    // optional: snap to nearest card (browser mostly snaps due to scroll-snap)
    // we can enhance by programmatic snapping if needed later
  };
  track.addEventListener('pointerup', stopDrag);
  track.addEventListener('pointercancel', stopDrag);
  track.addEventListener('pointerleave', stopDrag);

  // keyboard arrows to move one card
  document.addEventListener('keydown', (e) => {
    if (document.activeElement && /input|textarea/i.test(document.activeElement.tagName)) return;
    if (e.key === 'ArrowRight') track.scrollBy({ left: track.clientWidth/3 + 28, behavior: 'smooth' });
    if (e.key === 'ArrowLeft') track.scrollBy({ left: - (track.clientWidth/3 + 28), behavior: 'smooth' });
  });
})();
