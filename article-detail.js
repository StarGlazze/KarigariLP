// Article database dengan konten sedang (1 halaman)
const articles = [
    {
        id: 1,
        img: "images/article1.png",
        title: "Comfortable Living Room Ideas",
        intro: "Design tips to make your living space warm and inviting.",
        content: `
            <h2>Creating the Perfect Atmosphere</h2>
            <p>The living room is the heart of every home—a space where families gather, guests are welcomed, and memories are made. Creating a comfortable living room goes beyond just placing furniture; it's about crafting an environment that reflects your personality while ensuring maximum comfort.</p>

            <h3>Choose the Right Color Palette</h3>
            <p>Colors have a profound impact on mood and atmosphere. For a comfortable living room, stick with neutral tones like whites, beiges, and soft grays as your foundation. Add warmth with terracotta or burnt orange accessories, and don't forget to incorporate natural elements through wooden furniture and green plants.</p>

            <h3>Furniture Layout Matters</h3>
            <p>Strategic furniture placement is crucial for both aesthetics and flow. Place your main seating to face a focal point—whether it's a fireplace, TV, or a beautiful window view. Ensure at least 30 inches of walking space between furniture pieces, and choose furniture proportional to your room size.</p>

            <div class="highlight-box">
                <p>"The key to a comfortable living room is balancing visual appeal with practical comfort. Every element should serve both form and function."</p>
            </div>

            <h3>Lighting Strategy</h3>
            <p>Layer your lighting with ambient fixtures for general illumination, table lamps for reading, and accent lighting to highlight artwork. Don't forget to maximize natural light with sheer curtains that filter light beautifully.</p>

            <h3>Add Texture and Warmth</h3>
            <p>Mix throw pillows in different patterns and sizes, add an area rug to define your seating area, and drape cozy blankets over sofas. Indoor plants, from large fiddle leaf figs to small succulents, add life and purify the air.</p>

            <h2>Final Touches</h2>
            <p>Make your living room uniquely yours with artwork that resonates with you, style some coffee table books, and display meaningful objects. Keep clutter at bay with stylish storage solutions like decorative baskets and ottomans with hidden compartments.</p>
            
            <p>Remember, the best living rooms evolve over time, reflecting your changing needs and growing personal style. Start with these foundational elements, and don't be afraid to experiment!</p>
        `
    },
    {
        id: 2,
        img: "images/article2.png",
        title: "Minimal Bedroom Trends 2024",
        intro: "How to combine neutral tones with textures.",
        content: `
            <h2>The Beauty of Minimalism</h2>
            <p>Minimal bedroom design continues to dominate 2024 trends, offering a serene retreat from our busy lives. This approach emphasizes quality over quantity, creating spaces that are both functional and beautifully calm.</p>

            <h3>Foundation of Neutral Tones</h3>
            <p>The minimal bedroom palette revolves around soothing neutral colors. Use soft whites to create an airy, spacious feeling, add warm beiges for comfort, and incorporate gentle grays for depth. Natural wood tones bring organic warmth to complete the palette.</p>

            <h3>Texture is Everything</h3>
            <p>In minimal design, texture becomes the star. Layer linen bedding for natural breathability, add bouclé accents through chairs or pillows, incorporate rattan elements in headboards, and use soft wool throws for warmth.</p>

            <div class="highlight-box">
                <p>"Minimalism isn't about having less—it's about making room for more of what matters."</p>
            </div>

            <h3>Furniture Selection</h3>
            <p>Choose platform beds with clean lines, install floating nightstands to save floor space, and opt for streamlined storage with handleless doors. One sculptural chair can serve as a statement piece without cluttering the space.</p>

            <h3>Lighting and Ambiance</h3>
            <p>Maximize natural light with sheer curtains and keep window treatments minimal. For artificial lighting, use sculptural pendant lights as art pieces, install wall sconces to save table space, and add hidden LED strips for ambient glow. Dimmer switches are essential for mood control.</p>

            <h2>Smart Organization</h2>
            <p>Keep surfaces clear with under-bed storage, closed cabinetry, and minimal nightstands. Practice selective decorating—choose one statement piece, stick to 2-3 main colors, and display only items that truly bring you joy. Embrace empty space as a design element.</p>
            
            <p>The minimal bedroom trend of 2024 is about creating a personal sanctuary that promotes rest and peace. Take these principles and adapt them to your needs!</p>
        `
    },
    {
        id: 3,
        img: "images/article3.png",
        title: "Choosing the Right Lighting",
        intro: "Lighting tips to enhance mood and functionality.",
        content: `
            <h2>The Power of Light</h2>
            <p>Lighting is often called the most important element of interior design. It affects everything from mood and productivity to the perception of color and size. Understanding how to layer different types of lighting will transform your home.</p>

            <h3>Three Types of Lighting</h3>
            <p>Ambient lighting provides general illumination through ceiling fixtures or recessed lights. Task lighting offers focused light for specific activities like desk lamps or reading lights. Accent lighting highlights architectural features through spotlights or LED strips.</p>

            <div class="highlight-box">
                <p>"Good lighting design is invisible—it enhances your space without drawing attention to itself."</p>
            </div>

            <h3>Living Room Strategy</h3>
            <p>Use a chandelier for ambient light, position floor lamps near seating areas, add table lamps for layers, and include accent lights for artwork. Dimmers are essential for controlling mood from bright gatherings to cozy movie nights.</p>

            <h3>Kitchen Lighting</h3>
            <p>Combine recessed ceiling lights for even ambient lighting, hang pendants over islands for task lighting and style, add under-cabinet lighting for food prep, and install in-cabinet lights for glass-front cabinets.</p>

            <h3>Understanding Color Temperature</h3>
            <p>Warm white (2700-3000K) creates a cozy, relaxing atmosphere ideal for bedrooms and living rooms. Neutral white (3500-4100K) offers balanced light for kitchens and bathrooms. Cool white (5000-6500K) provides energizing light for offices and task areas.</p>

            <h2>Common Mistakes to Avoid</h2>
            <p>Never rely on a single overhead light—it creates harsh shadows. Measure fixtures carefully—wrong sizes can overwhelm or disappear. Always include dimmers to control mood, ensure adequate light in task areas, and hang pendants at proper heights.</p>
            
            <p>Great lighting should enhance your life while remaining virtually invisible in its function. Start with these principles and adjust based on your specific needs!</p>
        `
    },
    {
        id: 4,
        img: "images/article4.jpg",
        title: "Modern Cabinet Arrangement",
        intro: "Creative ways to organize cabinets with style.",
        content: `
            <h2>The Art of Cabinet Organization</h2>
            <p>Modern cabinet arrangement goes beyond simple storage—it's about creating systems that are both functional and beautiful. The right approach can transform chaos into calm.</p>

            <h3>The Decluttering Foundation</h3>
            <p>Before arranging, empty everything to see what you really have. Sort items by category, assess their condition, and keep only what you love and use. If you haven't used something in a year, it's time to let it go.</p>

            <div class="highlight-box">
                <p>"An organized cabinet isn't about having less—it's about knowing exactly what you have and where to find it."</p>
            </div>

            <h3>Kitchen Zone Strategy</h3>
            <p>Create a cooking zone near the stove with pots and pans, a prep zone with cutting boards and knives near your workspace, a serving zone with plates near the dining area, and a storage zone for pantry staples together.</p>

            <h3>Maximize Vertical Space</h3>
            <p>Use shelf risers to double your usable space, install hanging racks from cabinet ceilings, utilize door organizers for spices, and choose stackable containers for uniform storage. Lazy Susans work perfectly in corner cabinets.</p>

            <h3>Bathroom Organization</h3>
            <p>Use drawer dividers for makeup and skincare, add tiered organizers under the sink, group medicine cabinet items by frequency of use, and keep only daily essentials on the counter.</p>

            <h2>Display Cabinet Styling</h2>
            <p>Turn storage into visual interest by grouping items in odd numbers, varying heights for dynamic displays, color-coordinating books or objects, and leaving breathing room between items. Don't overcrowd!</p>

            <h3>Maintenance Systems</h3>
            <p>Build lasting habits with a "one in, one out" rule, weekly 10-minute resets, clear labels for everyone, and quarterly seasonal reviews. Use matching containers, natural materials, and LED lighting to make organization beautiful.</p>
            
            <p>The best organizational system is one you'll actually use. Start small, be consistent, and adjust your approach as your needs change!</p>
        `
    },
    {
        id: 5,
        img: "images/article5.jpg",
        title: "Natural Wood Interior Guide",
        intro: "Using wood elements correctly for a warm ambience.",
        content: `
            <h2>The Timeless Appeal of Wood</h2>
            <p>Natural wood brings unmatched warmth, texture, and character to interior spaces. As a living material with unique grain patterns, wood creates connections to nature that synthetic materials simply cannot replicate.</p>

            <h3>Understanding Wood Types</h3>
            <p>Oak is durable with prominent grain, perfect for flooring. Walnut offers rich, dark sophistication. Maple creates bright, airy spaces with subtle grain. Pine provides affordable rustic charm, while teak is water-resistant and ideal for humid environments.</p>

            <div class="highlight-box">
                <p>"Wood is nature's signature in your home—each piece tells a unique story through its grain and character."</p>
            </div>

            <h3>Wood Flooring</h3>
            <p>Wide planks create a modern, open feeling. Light woods expand space visually while dark woods add drama and coziness. Choose matte finishes for natural feel or glossy for formality. Consider herringbone patterns for visual interest.</p>

            <h3>Walls and Ceilings</h3>
            <p>Create accent walls in wood for focal points. Use horizontal shiplap for farmhouse-modern charm or vertical slats for contemporary interest. Reclaimed wood adds character and sustainability. Don't forget ceilings—exposed beams or plank ceilings create cozy atmosphere.</p>

            <h3>Furniture Selection</h3>
            <p>Live edge pieces bring organic beauty, mid-century modern styles feature tapered legs in walnut, Scandinavian designs use light woods for airiness, and rustic farmhouse pieces add character with distressed finishes.</p>

            <h2>Design Principles</h2>
            <p>When mixing wood tones, vary undertones carefully, combine different finishes, use lighter woods for larger pieces, and limit to three wood tones per room. Balance wood with metal for industrial contrast, stone for natural partnership, glass for airiness, and textiles for softness.</p>

            <h3>Care and Maintenance</h3>
            <p>Dust regularly with microfiber cloths, avoid direct sunlight, control humidity between 40-60%, use coasters for protection, and periodically nourish with appropriate oils. Choose FSC certified or reclaimed wood for sustainability.</p>
            
            <p>Wood provides the perfect foundation for creating spaces that feel warm, welcoming, and authentically yours!</p>
        `
    },
    {
        id: 6,
        img: "images/article6.jpg",
        title: "Cozy Scandinavian Setup",
        intro: "Soft colors and minimal elements to perfect your room.",
        content: `
            <h2>The Philosophy of Scandinavian Design</h2>
            <p>Scandinavian design, born from the long, dark winters of Northern Europe, celebrates simplicity, functionality, and connection to nature. This approach creates spaces that are both aesthetically beautiful and deeply comfortable.</p>

            <h3>The Color Palette</h3>
            <p>Start with white walls to maximize light reflection, add soft grays for depth, incorporate muted blues for calm, use natural beiges to warm cool tones, and add small touches of black for definition and contrast.</p>

            <div class="highlight-box">
                <p>"Scandinavian design is about creating sanctuary—spaces that nurture well-being through simplicity and natural beauty."</p>
            </div>

            <h3>Flooring and Walls</h3>
            <p>Choose light wood floors in ash, birch, or light oak. Use wide planks with natural finish for modern spaciousness. Keep walls pure white with minimal artwork—one or two meaningful pieces rather than gallery walls.</p>

            <h3>Furniture Essentials</h3>
            <p>Select clean-lined pieces with organic curves, light wood in birch or beech, low-profile furniture that sits close to ground, and multifunctional items. Essential pieces include a simple neutral sofa, wooden coffee table, minimal shelving, one accent chair, and a natural dining set.</p>

            <h3>Cozy Textiles</h3>
            <p>Layer chunky knit throws in cream or gray, hang sheer linen curtains for maximum light, add wool rugs in geometric patterns, use cotton cushions in muted tones, and include sheepskin accents on chairs.</p>

            <h2>Lighting and Nature</h2>
            <p>Maximize natural light by keeping windows unobstructed with sheer curtains or bare. Use mirrors strategically, maintain white colors throughout, and keep windowsills clear. For artificial lighting, choose simple pendants, floor lamps with fabric shades, lots of candles for hygge, string lights for warmth, and table lamps with warm bulbs.</p>

            <h3>Creating Hygge</h3>
            <p>Bring nature indoors with simple plants in ceramic pots, fresh branches in vases, and natural objects like stones or shells. Create cozy corners with soft seating, keep blankets within reach, and display personal items that bring joy.</p>
            
            <p>Remember, Scandinavian design is personal and evolving. Start with these principles, then adapt them to create a space that brings you peace every day!</p>
        `
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
    document.getElementById("article-intro").textContent = article.intro;
    
    // Load full content
    document.getElementById("article-full-content").innerHTML = article.content;

} else {
    document.querySelector(".detail-content").innerHTML = "<h2>Article not found.</h2>";
}