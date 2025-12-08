/* Smooth scroll */
document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute("href"));
        if (t) t.scrollIntoView({ behavior: "smooth" });
    });
});


/* HEADER SHADOW */
window.addEventListener("scroll", () => {
    const head = document.querySelector(".header");
    if (window.scrollY > 50) head.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    else head.style.boxShadow = "none";
});


/* HERO SLIDER */
let heroImages = [
    "images/product4.jpg",
    "images/product5.jpg",
    "images/product3.jpg"
];

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


/* HOVER FLOAT ANIMATION */
function floatHover(selector) {
    document.querySelectorAll(selector).forEach(el => {
        el.addEventListener("mouseenter", () => el.style.transform = "translateY(-8px)");
        el.addEventListener("mouseleave", () => el.style.transform = "translateY(0)");
    });
}

floatHover(".cat-item");
floatHover(".prod-card");
floatHover(".promo-card");


/* LAZY LOAD */
const imgs = document.querySelectorAll("img");

const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "0";
            entry.target.style.transition = "opacity .6s";
            setTimeout(() => entry.target.style.opacity = "1", 150);
            obs.unobserve(entry.target);
        }
    });
});

imgs.forEach(img => obs.observe(img));


/* NOTIFICATION BUBBLE */
function notify(msg) {
    const n = document.createElement("div");
    n.className = "notify";
    n.textContent = msg;
    Object.assign(n.style, {
        position: "fixed",
        right: "25px",
        top: "100px",
        background: "#c9a961",
        color: "#fff",
        padding: "15px 25px",
        borderRadius: "40px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        zIndex: "9999",
        opacity: "0",
        transition: "0.4s"
    });
    document.body.appendChild(n);
    setTimeout(() => (n.style.opacity = "1"), 30);
    setTimeout(() => {
        n.style.opacity = "0";
        setTimeout(() => n.remove(), 400);
    }, 2000);
}


/* CART COUNTER */
let cartCount = 0;
const cartBadge = document.querySelector(".cart-badge");

// Update cart badge display
function updateCartBadge() {
    if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
    }
}

// Initialize cart badge (hide if empty)
updateCartBadge();

// Add to cart on product click
document.querySelectorAll(".prod-card").forEach(card => {
    card.addEventListener("click", () => {
        cartCount++;
        updateCartBadge();
        notify(`Added to cart (${cartCount})`);
    });
});

// Cart icon click
document.querySelector(".cart-icon").addEventListener("click", () => {
    if (cartCount > 0) {
        notify(`You have ${cartCount} items in cart`);
    } else {
        notify("Your cart is empty");
    }
});


/* WISHLIST */
let wishlist = 0;
document.querySelector(".wishlist-icon").addEventListener("click", () => {
    wishlist++;
    notify(`Added to wishlist! ❤️ (${wishlist})`);
});


/* SEARCH BOX */
document.querySelector(".search-icon").addEventListener("click", () => {
    const q = prompt("Search for…");
    if (q) notify(`Searching: ${q}`);
});

/* USER ICON */
document.querySelector(".user-icon").addEventListener("click", () => {
    notify("Login / Register");
});


/* FOOTER NEWSLETTER */
const news = document.querySelector('footer input[type="email"]');
if (news) {
    news.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (news.value.includes("@")) {
                notify("Thank you for subscribing!");
                news.value = "";
            } else notify("Please enter a valid email");
        }
    });
}


/* FADE-IN ON SCROLL */
const fadeEls = document.querySelectorAll(
    ".cat-item, .prod-card, .promo-card, .article-card"
);

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

/* LANGUAGE SELECTOR */
const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', () => {
    notify('Language changed to: ' + langSelect.value);
});

/* GREETING */
console.log("%cKarigari UI Loaded ✓", "font-size:18px;color:#c9a961;font-weight:bold;");