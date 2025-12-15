// product-detail.js
// Product dataset
const products = [
    {
        id: 1, 
        title: "Elegant Dot Basket", 
        price: "$45.00", 
        desc: "Premium handmade basket crafted with meticulous attention to detail. This versatile piece combines functionality with aesthetic appeal, featuring a distinctive dot pattern that adds character to any space. Perfect for storage or as a decorative accent in living rooms, bedrooms, or entryways.", 
        img: "images/product1.jpg",
        category: "Home Decor",
        sku: "KRG-001"
    },
    {
        id: 2, 
        title: "Vintage Box Set", 
        price: "$90.00", 
        desc: "Exquisite vintage wooden box set that brings timeless charm to your interior. Each box is crafted from quality wood with a distressed finish that tells a story. Ideal for organizing small items, jewelry, or keepsakes while adding rustic elegance to your decor.", 
        img: "images/product2.jpg",
        category: "Storage",
        sku: "KRG-002"
    },
    {
        id: 3, 
        title: "Rounded Wall Mirror", 
        price: "$38.00", 
        desc: "Minimalist round mirror with clean lines and simple elegance. This versatile piece enhances any room by reflecting light and creating the illusion of more space. The sleek frame complements both modern and traditional interiors, making it a perfect addition to hallways, bathrooms, or bedrooms.", 
        img: "images/product3.jpg",
        category: "Decor",
        sku: "KRG-003"
    },
    {
        id: 4, 
        title: "Wooden Bed", 
        price: "$85.00", 
        desc: "Solid premium wood bed frame built for comfort and durability. This sturdy piece features clean lines and natural wood grain that brings warmth to your bedroom. Designed to support restful sleep while serving as a beautiful focal point in your personal sanctuary.", 
        img: "images/product4.jpg",
        category: "Furniture",
        sku: "KRG-004"
    },
    {
        id: 5, 
        title: "Solid Oak Drawer", 
        price: "$120.00", 
        desc: "High-quality oak drawer combining functionality with sophisticated design. Crafted from solid oak wood, this piece offers ample storage while showcasing the natural beauty of wood grain. The smooth-gliding drawers and timeless construction make it a lasting investment for your home.", 
        img: "images/product5.jpg",
        category: "Furniture",
        sku: "KRG-005"
    },
    {
        id: 6, 
        title: "Classic Side Table", 
        price: "$68.00", 
        desc: "Modern side table that perfectly balances form and function. This versatile piece features clean lines and a sturdy construction, making it ideal for holding lamps, books, or decorative items. Its compact design fits seamlessly beside sofas, beds, or in small spaces.", 
        img: "images/product6.jpg",
        category: "Furniture",
        sku: "KRG-006"
    },
    {
        id: 7, 
        title: "Scandinavian Chair", 
        price: "$99.00", 
        desc: "Elegant Scandinavian design chair that epitomizes Nordic simplicity and comfort. Featuring clean lines, natural wood, and ergonomic design, this chair brings both style and functionality to dining rooms, offices, or living spaces. A timeless piece that never goes out of style.", 
        img: "images/product7.jpg",
        category: "Furniture",
        sku: "KRG-007"
    },
    {
        id: 8, 
        title: "Minimal Bench", 
        price: "$74.00", 
        desc: "Minimalist wooden bench with streamlined design and sturdy construction. This versatile seating solution works beautifully in entryways, at the foot of beds, or as extra seating in dining areas. The simple aesthetic allows it to blend seamlessly with various interior styles.", 
        img: "images/product8.png",
        category: "Furniture",
        sku: "KRG-008"
    },
];

// Get product id from URL
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id")) || 1;
const p = products.find(x => x.id === id) || products[0];

// Fill page
document.getElementById("detail-image").src = p.img;
document.getElementById("detail-title").textContent = p.title;
document.getElementById("detail-price").textContent = p.price;
document.getElementById("detail-rating").textContent = "★★★★★";
document.getElementById("detail-desc").textContent = p.desc;
document.getElementById("product-sku").textContent = p.sku;

// Update category
document.querySelector(".product-category").textContent = p.category;

/* CART: store count in localStorage */
function getCartCount() {
    return parseInt(localStorage.getItem("cartCount") || "0", 10);
}

function setCartCount(n) {
    localStorage.setItem("cartCount", String(n));
}

/* Add to cart button */
document.getElementById("addCartBtn").addEventListener("click", () => {
    // Increment cart count
    let c = getCartCount();
    c = c + 1;
    setCartCount(c);

    // Store cart items
    const cartItemsRaw = localStorage.getItem("cartItems");
    const cartItems = cartItemsRaw ? JSON.parse(cartItemsRaw) : [];
    cartItems.push({id: p.id, title: p.title, price: p.price});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Show feedback
    const btn = document.getElementById("addCartBtn");
    btn.textContent = "Added! ✓";
    btn.style.background = "#4caf50";
    
    // Redirect after 1 second
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
});

/* Wishlist button */
/* Wishlist button */
document.querySelector(".wishlist-btn").addEventListener("click", () => {
    // Get current wishlist count
    let wishlistCount = parseInt(localStorage.getItem("wishlistCount") || "0", 10);
    
    // Get wishlist items
    const wishlistItemsRaw = localStorage.getItem("wishlistItems");
    const wishlistItems = wishlistItemsRaw ? JSON.parse(wishlistItemsRaw) : [];
    
    // Check if item already in wishlist
    const exists = wishlistItems.find(item => item.id === p.id);
    
    if (exists) {
        alert("This item is already in your wishlist!");
    } else {
        // Add to wishlist
        wishlistItems.push({id: p.id, title: p.title, price: p.price, img: p.img});
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
        
        // Increment count
        wishlistCount++;
        localStorage.setItem("wishlistCount", String(wishlistCount));
        
        // Visual feedback
        const btn = document.querySelector(".wishlist-btn");
        btn.style.background = "#e74c3c";
        btn.style.borderColor = "#e74c3c";
        btn.querySelector("svg").style.fill = "#fff";
        btn.querySelector("svg").style.stroke = "#fff";
        
        alert("Added to wishlist!");
        
        // Reset button after 2 seconds
        setTimeout(() => {
            btn.style.background = "rgba(201, 169, 97, 0.08)";
            btn.style.borderColor = "rgba(201, 169, 97, 0.2)";
            btn.querySelector("svg").style.fill = "none";
            btn.querySelector("svg").style.stroke = "currentColor";
        }, 2000);
    }
});