// Article database (samakan dengan data di index.html)
const articles = [
    {
        id: 1,
        img: "images/article1.png",
        title: "Comfortable Living Room Ideas",
        desc: "Design tips to make your living space warm and inviting."
    },
    {
        id: 2,
        img: "images/article2.png",
        title: "Minimal Bedroom Trends 2024",
        desc: "How to combine neutral tones with textures."
    },
    {
        id: 3,
        img: "images/article3.png",
        title: "Choosing the Right Lighting",
        desc: "Lighting tips to enhance mood and functionality."
    },
    {
        id: 4,
        img: "images/article4.jpg",
        title: "Modern Cabinet Arrangement",
        desc: "Creative ways to organize cabinets with style."
    },
    {
        id: 5,
        img: "images/article5.jpg",
        title: "Natural Wood Interior Guide",
        desc: "Using wood elements correctly for a warm ambience."
    },
    {
        id: 6,
        img: "images/article6.jpg",
        title: "Cozy Scandinavian Setup",
        desc: "Soft colors and minimal elements to perfect your room."
    }
];

// Get ID from URL
const params = new URLSearchParams(window.location.search);
const articleId = parseInt(params.get("id"));

// Select article
const article = articles.find(a => a.id === articleId);

// Populate page
if (article) {
    document.getElementById("article-img").src = article.img;
    document.getElementById("article-title").textContent = article.title;

    document.getElementById("article-desc").textContent =
        article.desc + 
        " This article provides a deeper understanding of the design approach and inspiration behind creating a balanced, beautiful room setting. Explore textures, furniture choices, and lighting styles to complete the aesthetic.";

} else {
    document.querySelector(".detail-content").innerHTML = "<h2>Article not found.</h2>";
}
