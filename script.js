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
    }, 500);
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

/* ========== WISHLIST FUNCTIONALITY ========== */
// Wishlist Badge Update
function updateWishlistBadge() {
    const wishlistIcon = document.querySelector(".wishlist-icon");
    if (!wishlistIcon) return;
    
    const count = parseInt(localStorage.getItem("wishlistCount") || "0", 10);
    
    // Hapus badge lama jika ada
    let badge = wishlistIcon.querySelector(".wishlist-badge");
    if (!badge && count > 0) {
        badge = document.createElement("span");
        badge.className = "wishlist-badge";
        wishlistIcon.appendChild(badge);
    }
    
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? "flex" : "none";
    }
}

// Wishlist icon click - show notification
const wishlistIcon = document.querySelector(".wishlist-icon");
if (wishlistIcon) {
    wishlistIcon.addEventListener("click", () => {
        const count = parseInt(localStorage.getItem("wishlistCount") || "0", 10);
        showWishlistNotification(count);
    });
}

// Function untuk menampilkan notifikasi wishlist
function showWishlistNotification(count) {
    const oldNotif = document.querySelector(".cart-notification");
    if (oldNotif) oldNotif.remove();

    const notif = document.createElement("div");
    notif.className = "cart-notification";
    notif.innerHTML = count === 0 
        ? `<strong>Your wishlist is empty</strong>` 
        : `<strong>You have ${count} item${count > 1 ? 's' : ''} in your wishlist</strong>`;
    
    document.body.appendChild(notif);

    setTimeout(() => notif.classList.add("show"), 10);

    setTimeout(() => {
        notif.classList.remove("show");
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Initialize wishlist badge on page load
updateWishlistBadge();

/* ARTICLE SLIDER - Drag to scroll */
(function(){
    const track = document.querySelector('.articles-track');
    if (!track) return;

    let isDown = false;
    let startX, scrollLeft;

    track.addEventListener('pointerdown', (e) => {
        isDown = true;
        track.setPointerCapture(e.pointerId);
        startX = e.clientX;
        scrollLeft = track.scrollLeft;
        track.classList.add('dragging');
    });

    track.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        const x = e.clientX;
        const walk = (startX - x);
        track.scrollLeft = scrollLeft + walk;
    });

    const stopDrag = (e) => {
        isDown = false;
        track.classList.remove('dragging');
        try { track.releasePointerCapture(e && e.pointerId); } catch(e){ }
    };
    
    track.addEventListener('pointerup', stopDrag);
    track.addEventListener('pointercancel', stopDrag);
    track.addEventListener('pointerleave', stopDrag);

    document.addEventListener('keydown', (e) => {
        if (document.activeElement && /input|textarea/i.test(document.activeElement.tagName)) return;
        if (e.key === 'ArrowRight') track.scrollBy({ left: track.clientWidth/3 + 28, behavior: 'smooth' });
        if (e.key === 'ArrowLeft') track.scrollBy({ left: - (track.clientWidth/3 + 28), behavior: 'smooth' });
    });
})();

// Smooth drag scroll untuk viewport
const viewport = document.querySelector('.articles-viewport');
if (viewport) {
    let isDown = false;
    let startX;
    let scrollLeft;

    viewport.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - viewport.offsetLeft;
        scrollLeft = viewport.scrollLeft;
    });

    viewport.addEventListener('mouseleave', () => {
        isDown = false;
    });

    viewport.addEventListener('mouseup', () => {
        isDown = false;
    });

    viewport.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - viewport.offsetLeft;
        const walk = (x - startX) * 1.5; 
        viewport.scrollLeft = scrollLeft - walk;
    });
}