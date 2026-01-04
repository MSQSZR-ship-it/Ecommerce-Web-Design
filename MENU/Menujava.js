// ==================== MENU CATEGORY DISPLAY SYSTEM ====================
// File: MENU/Menujava.js
// Menggunakan data dari GERAI/java.js TANPA mengubah fungsi sedia ada
// Setiap makanan TUNJUK dengan jelas dari gerai mana berdasarkan ID

console.log("🚀 MENU/Menujava.js LOADING - Using GERAI/java.js Data");

// ==================== 1. CATEGORY CLASSIFICATION ====================
// Mengklasifikasikan makanan berdasarkan NAMA (tidak ubah struktur data asal)
const categoryClassifier = {
    // Breakfast items
    breakfast: [
        'nasi lemak','nasi','ayam', 'roti', 'telur', 'capati', 'tosai', 'kuih',
        'dim sum', 'pancake', 'bubur', 'sarapan', 'breakfast',
        'nasi goreng kampung', 'mee goreng mamak', 'kuey teow',
        'roti john', 'tosai masala', 'roti canai', 'roti boom',
        'roti pisang', 'nasi lemak bungkus', 'kopi o', 'teh o',
        'kuih-muih', 'kuih lapis', 'kuih seri muka'
    ],
    
    // Vegan items  
    vegan: [
        'sayur', 'salad', 'tofu', 'gado', 'ulam',
        'falafel', 'quinoa', 'green bowl', 'buddha bowl',
        'salad sayuran', 'tofu stir fry', 'quinoa salad',
        'mushroom soup', 'vegan pizza', 'vegan burger',
        'gado-gado', 'ulam-ulaman', 'sayur campur',
        'tahu tempe', 'coleslaw'
    ],
    
    // Beverage/Drinks items
    drinks: [
        'teh', 'kopi', 'jus', 'air', 'milo', 'sirap',
        'cendol', 'smoothie', 'lemon', 'kelapa', 'jeruk',
        'soda', 'cola', 'limau', 'bandung', 'neslo',
        'teh tarik', 'teh ais', 'kopi tarik', 'milo ais',
        'air kelapa', 'jus tembikai', 'jus alpukat',
        'orange juice', 'lemon tea', 'coconut shake',
        'es teh', 'es jeruk', 'sirap bandung', 'coca cola',
        'sirup limau', 'teh limau', 'teh o limau',
        'english tea', 'fruit juice', 'coffee latte'
    ],
    
    // Dessert items
    dessert: [
        'ais', 'cendol', 'kek', 'puding', 'waffle', 'ice cream',
        'donut', 'kuih lapis', 'cheesecake', 'brownies',
        'abc', 'ais kacang', 'sundae', 'waffle belgian',
        'kuih seri muka', 'cendol durian', 'kek coklat',
        'puding caramel', 'ice cream cone', 'sundae',
        'cheese cake', 'waffle', 'abc special', 'donut glazed'
    ],
    
    // Lunch & Dinner items (default)
    lunch: [
        'ayam','nasi', 'ikan', 'daging', 'sate', 'rendang', 'kari',
        'sup', 'soto', 'laksa', 'mee rebus', 'nasi kandar',
        'nasi briyani', 'nasi kerabu', 'bakso', 'burger','goreng',
        'pasta', 'steak', 'bbq', 'grilled', 'murtabak',
        'ayam penyet', 'ayam bakar', 'ikan bakar', 'sate ayam',
        'soto ayam', 'nasi ayam', 'ayam percik', 'rendang daging',
        'kari kepala ikan', 'nasi goreng cina', 'mee sup',
        'laksa johor', 'murtabak special', 'nasi campur',
        'ayam goreng', 'ikan bakar', 'daging kicap',
        'sup ayam', 'sup tulang', 'mee ayam',
        'ayam tandoori', 'nasi briyani', 'whopper burger',
        'cheese burger', 'french fries', 'onion rings',
        'chicken nuggets', 'fish burger', 'pasta carbonara',
        'grilled chicken', 'fish and chips', 'lamb chop',
        'beef steak', 'bbq wings', 'grilled fish',
        'mee rebus', 'laksa', 'rojak mamak',
        'pisang goreng', 'keropok lekor'
    ]
};

// Function untuk classify kategori berdasarkan NAMA (tidak ubah data asal)
function classifyCategory(itemName) {
    if (!itemName || typeof itemName !== 'string') return 'lunch';
    
    const name = itemName.toLowerCase().trim();
    
    for (const [category, keywords] of Object.entries(categoryClassifier)) {
        for (const keyword of keywords) {
            if (name.includes(keyword)) {
                return category;
            }
        }
    }
    
    return 'lunch'; // Default category
}

// ==================== 2. GET ALL MENU ITEMS FROM GERAI DATA ====================
// Menggunakan data dari GERAI/java.js TANPA mengubahnya

function getAllMenuItemsFromGerai() {
    console.log("📦 Extracting menu items from GERAI data...");
    
    const allMenuItems = [];
    
    // Check if GERAI data is available (menggunakan allStores dari GERAI/java.js)
    if (typeof allStores === 'undefined') {
        console.error("❌ GERAI data (allStores) not loaded yet!");
        return [];
    }
    
    // Loop melalui semua gerai dari data asal
    Object.keys(allStores).forEach(storeName => {
        const storeMenu = allStores[storeName];
        
        if (!Array.isArray(storeMenu)) {
            console.warn(`⚠️ Store ${storeName} has no menu array`);
            return;
        }
        
        // Process setiap item dalam gerai
        storeMenu.forEach(menuItem => {
            // Pastikan item mempunyai semua data yang diperlukan
            if (!menuItem.name || !menuItem.price) {
                console.warn(`⚠️ Incomplete menu item in ${storeName}:`, menuItem);
                return;
            }
            
            // Classify category berdasarkan nama
            const category = classifyCategory(menuItem.name);
            
            // Create item object untuk display (TIDAK mengubah data asal)
            const displayItem = {
                // GUNA ID ASAL dari GERAI/java.js
                id: menuItem.id || `${storeName}_${menuItem.name.toLowerCase().replace(/\s+/g, '_')}`,
                name: menuItem.name,
                price: menuItem.price,
                // GUNA image/img dari data asal
                image: menuItem.img || menuItem.image || getDefaultImage(category),
                store: storeName, // Nama gerai asal
                category: category, // Kategori yang di-classify
                originalData: menuItem // Simpan data asal untuk reference
            };
            
            allMenuItems.push(displayItem);
        });
    });
    
    console.log(`✅ Extracted ${allMenuItems.length} menu items from GERAI data`);
    return allMenuItems;
}

// Helper function untuk default image jika tiada
function getDefaultImage(category) {
    const defaultImages = {
        'breakfast': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
        'lunch': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
        'drinks': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400',
        'dessert': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400',
        'vegan': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
    };
    
    return defaultImages[category] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400';
}

// ==================== 3. RENDER CATEGORY FUNCTION ====================
// Tampilkan menu berdasarkan kategori (menggunakan CSS dari Design.css)

function renderCategoryPage(categoryType, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`❌ Container #${containerId} not found`);
        return;
    }
     
    console.log(`🎯 Rendering ${categoryType} category...`);
    
    // Get all menu items dari GERAI data
    const allItems = getAllMenuItemsFromGerai();
    
    // Filter items berdasarkan kategori
    const filteredItems = allItems.filter(item => {
        // Map kategori untuk match dengan HTML config
        const categoryMap = {
            'breakfast': 'breakfast',
            'lunch': 'lunch',
            'drinks': 'drinks',
            'dessert': 'dessert',
            'vegan': 'vegan'
        };
        
        return item.category === categoryMap[categoryType] || item.category === categoryType;
    });
    
    console.log(`📊 Found ${filteredItems.length} items for ${categoryType}`);
    
    // Jika tiada items
    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="text-align:center; padding:60px 20px; color:#6b7280; grid-column:1/-1;">
                <i class="fas fa-utensils" style="font-size:48px; margin-bottom:20px; color:#d1d5db;"></i>
                <h3 style="margin-bottom:10px;">No ${categoryType} items available</h3>
                <p>Check back soon for new menu additions!</p>
            </div>`;
        return;
    }
    
    // Render items menggunakan CSS classes dari Design.css
    container.innerHTML = filteredItems.map(item => {
        // Format price
        const price = typeof item.price === 'number' ? item.price.toFixed(2) : '0.00';
        
        // Escape quotes untuk onclick
        const safeName = item.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        const safeImage = item.image.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        return `
        <div class="card">
            <div class="card-header">
                
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.src='${getDefaultImage(item.category)}'">
            </div>
            <div class="card-info">
                <h3>${item.name}</h3>
                <div style="color:#6b7280; font-size:0.9rem; margin:5px 0;">
                    <i class="fas fa-store" style="color:#0369a1;"></i> From: ${item.store}
                </div>
                <div class="price-tag">RM ${price}</div>
                <button class="btn-add-cart" 
                        onclick="addMenuItemToCart('${item.id}', '${safeName}', ${item.price}, '${safeImage}', '${item.store.replace(/'/g, "\\'")}')">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
            </div>
        </div>`;
    }).join('');
    
    console.log(`✅ Successfully rendered ${filteredItems.length} ${categoryType} items`);
}

// ==================== 4. ADD TO CART FUNCTION ====================
// Menggunakan cart system sedia ada TANPA mengubahnya

function addMenuItemToCart(itemId, itemName, price, imageUrl, storeName) {
    console.log(`🛒 Adding to cart: ${itemName} from ${storeName} (ID: ${itemId})`);
    
    // GUNA function dari GERAI/java.js jika ada
    if (typeof addItemToCart === 'function') {
        addItemToCart(itemName, price, imageUrl, itemId);
        showCategoryNotification(`${itemName} from ${storeName} added to cart!`);
        return;
    }
    
    // GUNA universal cart system jika ada
    if (typeof universalAddToCart === 'function') {
        universalAddToCart(itemId, itemName, price, imageUrl, storeName);
        showCategoryNotification(`${itemName} from ${storeName} added to cart!`);
        return;
    }
    
    // Fallback: Simpan ke localStorage dengan key yang sama
    console.log("⚠️ Using fallback cart system");
    
    const CART_KEY = 'D_GourMeals_Cart_v5';
    let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: itemName,
            price: price,
            image: imageUrl,
            store: storeName,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    
    // Update cart UI menggunakan fungsi sedia ada
    if (typeof updateCartUIEverywhere === 'function') {
        updateCartUIEverywhere();
    } else if (typeof updateCartUI === 'function') {
        updateCartUI();
    } else if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
    
    showCategoryNotification(`${itemName} from ${storeName} added to cart!`);
}



// ==================== 6. AUTO INITIALIZE ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🏁 Menu Category System Ready!");
    
    // Auto render berdasarkan URL
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();
    
    // Map page ke category type
    const pageToCategory = {
        'breakfast.html': 'breakfast',
        'lunch&dinner.html': 'lunch',
        'lunch.html': 'lunch',
        'beverage.html': 'drinks',
        'dessert.html': 'dessert',
        'vegan.html': 'vegan'
    };
    
    if (pageToCategory[currentPage]) {
        const category = pageToCategory[currentPage];
        const containerId = 'category-items-container';
        
        console.log(`📍 Auto-rendering ${category} category`);
        
        // Tunggu sebentar untuk pastikan GERAI data loaded
        setTimeout(() => {
            renderCategoryPage(category, containerId);
        }, 500);
    }
});

// ==================== 7. EXPORT FUNCTIONS ====================
// Hanya export functions yang diperlukan untuk paparan menu

window.renderCategoryPage = renderCategoryPage;
window.addMenuItemToCart = addMenuItemToCart;
window.getAllMenuItemsFromGerai = getAllMenuItemsFromGerai;

console.log("✅ MENU/Menujava.js Fully Loaded - Using GERAI/java.js Data");




