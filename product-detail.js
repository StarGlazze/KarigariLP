// product-detail.js
// Small product dataset (mirror of landing page)
const products = [
    {id:1, title:"Elegant Dot Basket", price:"$45.00", desc:"Premium handmade basket.", img:"images/product1.jpg"},
    {id:2, title:"Vintage Box Set", price:"$90.00", desc:"Vintage wooden box.", img:"images/product2.jpg"},
    {id:3, title:"Rounded Wall Mirror", price:"$38.00", desc:"Minimal round mirror.", img:"images/product3.jpg"},
    {id:4, title:"Wooden Bed", price:"$85.00", desc:"Solid premium wood.", img:"images/product4.jpg"},
    {id:5, title:"Solid Oak Drawer", price:"$120.00", desc:"High quality oak drawer.", img:"images/product5.jpg"},
    {id:6, title:"Classic Side Table", price:"$68.00", desc:"Modern side table.", img:"images/product6.jpg"},
    {id:7, title:"Scandinavian Chair", price:"$99.00", desc:"Elegant Scandinavian design.", img:"images/product7.jpg"},
    {id:8, title:"Minimal Bench", price:"$74.00", desc:"Minimalist wooden bench.", img:"images/product8.png"},
];

// get product id from URL (default to 1)
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id")) || 1;
const p = products.find(x => x.id === id) || products[0];

// fill page
document.getElementById("detail-image").src = p.img;
document.getElementById("detail-title").textContent = p.title;
document.getElementById("detail-price").textContent = p.price;
document.getElementById("detail-rating").textContent = "★★★★★";

// description: make it 1 paragraph (longer)
const longDesc = `${p.title} is crafted with exceptional attention to detail. This piece blends durable materials with timeless design to create both functionality and refined aesthetics. Ideal for modern or classic interiors, it elevates your living space with subtle craftsmanship and practical usability. Each item is finished to ensure long-lasting appeal and beauty, making it a dependable choice for everyday use and decor alike.`;
document.getElementById("detail-desc").textContent = longDesc;

/* CART: store count in localStorage key 'cartCount' and optionally 'cartItems' */
function getCartCount(){
    return parseInt(localStorage.getItem("cartCount") || "0", 10);
}
function setCartCount(n){
    localStorage.setItem("cartCount", String(n));
}

/* Add to cart button */
document.getElementById("addCartBtn").addEventListener("click", () => {
    // increment
    let c = getCartCount();
    c = c + 1;
    setCartCount(c);

    // optional: persist items list in localStorage as simple array
    const cartItemsRaw = localStorage.getItem("cartItems");
    const cartItems = cartItemsRaw ? JSON.parse(cartItemsRaw) : [];
    cartItems.push({id: p.id, title: p.title, price: p.price});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // redirect langsung ke landing page
    window.location.href = "index.html";
});