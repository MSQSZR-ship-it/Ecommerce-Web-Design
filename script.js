
// ==================== DATA DARI JAVA.JS ====================
// Data 10 gerai utama + 2 gerai lokal
const allRestaurantsData = {
    "Sofinaz": {
        cuisine: "Malaysian • Rice",
        rating: 4.8,
        time: "15-25 min",
        fee: "Free",
        promo: "20% OFF",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1080",
        category: "rice",
        items: [
         { id: "sof_1", name: "Nasi Putih", price: 1.50, img: "ASSETS/MenuKedai/sof_1-nasi-putih.jpg" },
        { id: "sof_2", name: "Ayam Goreng", price: 3.00, img: "ASSETS/MenuKedai/sof-2.jpg" },
        { id: "sof_3", name: "Sayur Campur", price: 4.00, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
        { id: "sof_4", name: "Ikan Bakar", price: 12.00, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
        { id: "sof_5", name: "Telur Dadar", price: 2.00, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400" },
        { id: "sof_6", name: "Sambal Belacan", price: 1.00, img: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=400" },
        { id: "sof_7", name: "Sup Ayam", price: 7.00, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
        { id: "sof_8", name: "Nasi Campur", price: 8.50, img: "ASSETS/MenuKedai/sof-3.jpg" },
        { id: "sof_9", name: "Daging Kicap", price: 9.00, img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400" },
        { id: "sof_10", name: "Ulam-ulaman", price: 3.00, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400" }
        ]
    },
    
    "A & A": {
        cuisine: "Indian • Mamak",
        rating: 4.7,
        time: "20-30 min",
        fee: "RM 1.50",
        promo: "Buy 1 Get 1",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1080",
        category: "fastfood",
        items: [
        { id: "aa_1", name: "Ayam Kicap", price: 3.00, img: "ASSETS/MenuKedai/aa-1.jpg" },
        { id: "aa_2", name: "Ayam Masak Merah", price: 3.00, img: "ASSETS/MenuKedai/aa-2.jpg" },
        { id: "aa_3", name: "Mee Goreng Mamak", price: 6.50, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400" },
        { id: "aa_4", name: "Nasi Kandar", price: 17.00, img: "ASSETS/MenuKedai/aa-4.jpg" },
        { id: "aa_5", name: "Nasi Goreng Ayam", price: 7.50, img: "ASSETS/MenuKedai/aa-5.jpg" },
        { id: "aa_6", name: "Nasi Goreng Seafood", price: 9.00, img: "ASSETS/MenuKedai/aa-6.jpg" },
        { id: "aa_7", name: "Maggi Goreng", price: 5.50, img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400" },
        { id: "aa_8", name: "Ayam Tandoori", price: 7.50, img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400" },
        { id: "aa_9", name: "Nasi Briyani", price: 12.00, img: "ASSETS/MenuKedai/aa-9.jpg" },
        { id: "aa_10", name: "Nasi Bujang", price: 4.00, img: "ASSETS/MenuKedai/aa-10.jpg" }
    ]
    },
    "Kak D Pyor": {
        cuisine: "Bevargage",
        rating: 4.9,
        time: "25-35 min",
        fee: "Free",
        promo: "Free Rice",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=1080",
        category: "rice",
        items: [
        { id: "kdp_1", name: "Green Tea", price: 3.00, img: "ASSETS/MenuKedai/kdp-1.jpg" },
        { id: "kdp_2", name: "Manggo jucie", price: 3.00, img: "ASSETS/MenuKedai/kdp-2.jpg" },
        { id: "kdp_3", name: "Air Jagung", price: 3.00, img: "ASSETS/MenuKedai/kdp-3.jpg" },
        { id: "kdp_4", name: "jus Strawberry", price: 3.00, img: "ASSETS/MenuKedai/kdp-4.jpg" },
        { id: "kdp_5", name: "Air Apple Hijau", price: 3.00, img: "ASSETS/MenuKedai/kdp-5.png" },
        { id: "kdp_6", name: "Air Anggur", price: 3.00, img: "ASSETS/MenuKedai/kdp-6.avif" },
        { id: "kdp_7", name: "Honeydew juice", price: 3.00, img: "ASSETS/MenuKedai/kdp-7.webp" },
        { id: "kdp_8", name: "Milo Ice", price: 3.00, img: "ASSETS/MenuKedai/kdp-8.png" },
        { id: "kdp_9", name: "Nescafe ice", price: 3.00, img: "ASSETS/MenuKedai/kdp-9.webp" },
        { id: "kdp_10", name: "Keladi Juice", price: 3.00, img: "ASSETS/MenuKedai/kdp-10.jpg" },   
    ]
    },
    
    "Mozella Burger": {
        cuisine: "American • Fast Food",
        rating: 4.6,
        time: "30-40 min",
        fee: "RM 2.50",
        promo: null,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1080",
        category: "fastfood",
        items: [
        { id: "mb_1", name: "Burger Telur", price: 3.50, img: "ASSETS/MenuKedai/mb-1.jpg" },
        { id: "mb_2", name: "Burger Ayam", price: 5.00, img: "ASSETS/MenuKedai/mb-2.jpg" },
        { id: "mb_3", name: "Burger Daging", price: 5.00, img: "ASSETS/MenuKedai/mb-3.jpg" },
        { id: "mb_4", name: "Burger Ayam Special", price: 6.00, img: "ASSETS/MenuKedai/mb-4.jpg" },
        { id: "mb_5", name: "Burger Daging Special", price: 6.00, img: "ASSETS/MenuKedai/mb-5.jpg" },
        { id: "mb_6", name: "Roti John Telur", price: 7.50, img: "ASSETS/MenuKedai/mb-6.png" },
        { id: "mb_7", name: "Roti John Ayam", price: 8.50, img: "ASSETS/MenuKedai/mb-7.jpg" },
        { id: "mb_8", name: "Roti John Daging", price: 8.50, img: "ASSETS/MenuKedai/mb-8.jpg" },
        { id: "mb_9", name: "Kentang Goreng", price: 3.00, img: "ASSETS/MenuKedai/mb-9.jpeg" },
        { id: "mb_10", name: "Full set", price: 15.00, img: "ASSETS/MenuKedai/mb-10.webp" },      
    ]
    },
    "Kesumba": {
        cuisine: "Local • UMSKAL",
        rating: 4.9,
        time: "10-15 min",
        fee: "Free",
        promo: "Student Deal",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600",
        category: "rice",
         items: [
        { id: "kb_1", name: "ice Lemon Tea", price: 4.00, img: "ASSETS/MenuKedai/kb-1.webp" },
        { id: "kb_2", name: "Kopi O", price: 3.00, img: "ASSETS/MenuKedai/kb-2.jpg" },
        { id: "kb_3", name: "Teh c Special", price: 6.00, img: "ASSETS/MenuKedai/kb-3.jpg" },
        { id: "kb_4", name: "Cheese Cake", price: 8.00, img: "ASSETS/MenuKedai/kb-4.jpg" },
        { id: "kb_5", name: "pudding", price: 6.00, img: "ASSETS/MenuKedai/kb-5.jpg" },
        { id: "kb_6", name: "Roti Sosej", price: 7.00, img: "ASSETS/MenuKedai/kb-6.jpg" },
        { id: "kb_7", name: "Kek Batik", price: 10.00, img: "ASSETS/MenuKedai/kb-7.jpg" },
        { id: "kb_8", name: "Salad", price: 7.00, img: "ASSETS/MenuKedai/kb-8.jpg" },
        { id: "kb_9", name: "ABC", price: 7.00, img: "ASSETS/MenuKedai/kb-9.jpg" },
        { id: "kb_10", name: "Waffle", price: 8.00, img: "ASSETS/MenuKedai/kb-10.jpg" }       
        ]
    }
};
 
// Data untuk Popular Restaurants (4 gerai pertama)
const popularRestaurants = Object.keys(allRestaurantsData)
    .slice(0, 4)
    .map(key => ({
        id: key.toLowerCase().replace(/\s+/g, '_'),
        name: key,
        cuisine: allRestaurantsData[key].cuisine,
        rating: allRestaurantsData[key].rating,
        time: allRestaurantsData[key].time,
        fee: allRestaurantsData[key].fee,
        promo: allRestaurantsData[key].promo,
        image: allRestaurantsData[key].image,
        category: allRestaurantsData[key].category
    }));

// Data untuk Menu Items (gabung semua items dari semua gerai dengan TYPE yang spesifik)
const allMenuItems = [];
Object.keys(allRestaurantsData).forEach(restaurant => {
    allRestaurantsData[restaurant].items.forEach(item => {
        allMenuItems.push({
            ...item,
            restaurant: restaurant,
            category: allRestaurantsData[restaurant].category,
            itemType: item.type // type spesifik makanan
        });
    });
});

// Cart variable
let cart = JSON.parse(localStorage.getItem('D_GourMeals_Cart')) || [];

// ==================== FUNCTIONS UNTUK INDEX.HTML ====================
function renderPopular() {
    const container = document.getElementById('popular-container');
    if(!container) return;
    
    container.innerHTML = popularRestaurants.map(res => `
        <div class="card" onclick="goToRestaurant('${res.name}')">
            ${res.promo ? `<div class="promo-tag">${res.promo}</div>` : ''}
            <div class="rating-tag"><i class="fas fa-star" style="color:#fbbf24;"></i> ${res.rating}</div>
            <img src="${res.image}" alt="${res.name}" style="width:100%; height:200px; object-fit:cover; border-radius: 15px 15px 0 0;">
            <div class="card-info">
                <h3>${res.name}</h3>
                <p style="color:#6B7280; font-size:14px;">${res.cuisine}</p>
                <div style="display:flex; justify-content:space-between; margin-top:10px; font-size:13px; color:#6B7280;">
                    <span><i class="far fa-clock"></i> ${res.time}</span>
                    <span><i class="fas fa-bicycle"></i> ${res.fee}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// FUNCTION BARU: Pergi ke restaurant tertentu dalam menu.html
window.goToRestaurant = function(restaurantName) {
    // Simpan restaurant yang dipilih ke localStorage
    localStorage.setItem('selected_store_for_menu', restaurantName);
    
    // Redirect ke menu.html
    window.location.href = 'GERAI/Menu.html';
};

window.filterMenu = function(category, element) {
    // Update active category
    document.querySelectorAll('.cat-card').forEach(card => card.classList.remove('active'));
    if(element) element.classList.add('active');

    const container = document.getElementById('menu-container');
    if(!container) return;

    // Filter items berdasarkan TYPE makanan yang lebih spesifik
    let filteredItems = [];
    const itemsPerCategory = 10; // 10 menu setiap kategori
    
    switch(category) {
        case 'all':
            // Ambil 10 item pertama dari semua gerai
            filteredItems = allMenuItems.slice(0, itemsPerCategory);
            break;
            
        case 'rice':
            // Makanan jenis rice/nasi
            filteredItems = allMenuItems
                .filter(item => {
                    // Rice termasuk: nasi, nasi lemak, nasi goreng, nasi kandar, nasi briyani
                    const name = item.name.toLowerCase();
                    return name.includes('nasi') || 
                           name.includes('rice') || 
                           name.includes('briyani') ||
                           name.includes('kandar');
                })
                .slice(0, itemsPerCategory);
            break;
            
        case 'noodles':
            // Makanan jenis noodles/mi/pasta
            filteredItems = allMenuItems
                .filter(item => {
                    const name = item.name.toLowerCase();
                    return name.includes('mee') || 
                           name.includes('noodle') || 
                           name.includes('mi ') ||
                           name.includes('pasta') ||
                           name.includes('spaghetti') ||
                           name.includes('laksa') ||
                           name.includes('maggi');
                })
                .slice(0, itemsPerCategory);
            break;
            
        case 'fastfood':
            // Makanan jenis burger, snack, fast food
            filteredItems = allMenuItems
                .filter(item => {
                    const name = item.name.toLowerCase();
                    return name.includes('burger') || 
                           name.includes('fries') || 
                           name.includes('nugget') ||
                           name.includes('hot dog') ||
                           name.includes('pizza') ||
                           name.includes('sandwich') ||
                            name.includes('roti') ||
                            name.includes('kentang') ||
                           name.includes('wrap') ||
                           item.itemType === 'burger' || 
                           item.itemType === 'snack' || 
                           item.itemType === 'bread';
                })
                .slice(0, itemsPerCategory);
            break;
            
        case 'drinks':
            // Minuman semua jenis
            filteredItems = allMenuItems
                .filter(item => {
                    const name = item.name.toLowerCase();
                    return name.includes('teh') || 
                           name.includes('kopi') || 
                           name.includes('milo') ||
                           name.includes('jus') || 
                            name.includes('juice') || 
                           name.includes('sirap') || 
                           name.includes('air') ||
                            name.includes('tea') ||
                           name.includes('drink') ||
                           name.includes('soda') ||
                           name.includes('cola') ||
                           name.includes('limau') ||
                           name.includes('smoothie') ||
                           name.includes('ais') ||
                           item.itemType === 'drink';
                })
                .slice(0, itemsPerCategory);
            break;
            
        case 'dessert':
            // Makanan manis/kuih/dessert
            filteredItems = allMenuItems
                .filter(item => {
                    const name = item.name.toLowerCase();
                    return name.includes('cake') || 
                           name.includes('kuih') || 
                           name.includes('dessert') ||
                           name.includes('ice cream') || 
                           name.includes('waffle') || 
                           name.includes('pancake') ||
                            name.includes('cokelat') ||
                            name.includes('snack') ||
                            name.includes('gula-gula') ||
                           name.includes('cendol') ||
                           name.includes('abc') ||
                           name.includes('kek') ||
                           name.includes('puding') ||
                           name.includes('jelly') ||
                           item.itemType === 'dessert';
                })
                .slice(0, itemsPerCategory);
            break;
            
        default:
            filteredItems = allMenuItems.slice(0, itemsPerCategory);
    }

    // Jika kurang dari 10, tambah random items dari kategori lain
    if (filteredItems.length < itemsPerCategory && category !== 'all') {
        const needed = itemsPerCategory - filteredItems.length;
        const otherItems = allMenuItems
            .filter(item => !filteredItems.some(f => f.id === item.id))
            .slice(0, needed);
        filteredItems = [...filteredItems, ...otherItems];
    }

    // Render results
    container.innerHTML = filteredItems.length > 0 ? filteredItems.map(item => `
        <div class="card">
            <div class="rating-tag"><i class="fas fa-star" style="color:#fbbf24;"></i> 4.8</div>
            <img src="${item.img || item.image}" alt="${item.name}" style="width:100%; height:200px; object-fit:cover; border-radius: 15px 15px 0 0;">
            <div class="card-info">
                <h3 style="margin-bottom:5px;">${item.name}</h3>
                <p style="color:#6B7280; font-size:14px;">${item.restaurant}</p>
                <p style="font-weight:bold; color:#10b981; font-size:1.1rem; margin: 8px 0;">RM ${item.price.toFixed(2)}</p>
                <button class="btn-add-cart" onclick="addToCartFromMenu('${item.id}')">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('') : '<p style="grid-column: 1/-1; text-align:center; padding: 40px; color: #6B7280;">Tiada menu dalam kategori ini buat masa ini.</p>';
};

// ==================== CART FUNCTIONS (KONSISTEN) ====================
function saveCart() {
    localStorage.setItem('D_GourMeals_Cart', JSON.stringify(cart));
}

function openCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar) cartSidebar.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
}

function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
}

// Update cart UI - FIXED VERSION
function updateCartUI() {
    console.log("🔄 updateCartUI called");
    
    // Ambil cart TERKINI dari localStorage (bukan dari variable cart)
    const currentCart = JSON.parse(localStorage.getItem('D_GourMeals_Cart')) || [];
    const totalQuantity = currentCart.reduce((sum, item) => sum + item.quantity, 0);
    
    console.log("📦 Cart items:", currentCart.length, "Total quantity:", totalQuantity);
    
    // 1. UPDATE CART COUNT
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        countEl.textContent = totalQuantity;
        countEl.style.display = totalQuantity > 0 ? 'inline-block' : 'none';
        console.log("✅ Cart count updated:", totalQuantity);
    }
    
    // 2. UPDATE MOBILE DOT
    const mobileDot = document.getElementById('mobile-noti-dot');
    if (mobileDot) {
        mobileDot.style.display = totalQuantity > 0 ? 'block' : 'none';
        console.log("✅ Mobile dot updated");
    }
    
    // 3. UPDATE LOCATION DISPLAY - CHECK SEMUA KEYS
    const cartAddrDisplay = document.getElementById('cart-display-address');
    const heroLocInput = document.getElementById('user-location-input');
    
    // Debug: Check semua storage keys
    console.log("🔍 Checking localStorage keys:");
    console.log("- umskal_delivery_location:", localStorage.getItem('umskal_delivery_location'));
    console.log("- delivery_location:", localStorage.getItem('delivery_location'));
    
    // Cari location dari SEMUA possible keys
    let savedLoc = "Pilih Lokasi...";
    const possibleKeys = ['umskal_delivery_location', 'delivery_location', 'user_location'];
    
    for (const key of possibleKeys) {
        const loc = localStorage.getItem(key);
        if (loc && loc !== "Pilih Lokasi..." && loc !== "Set Lokasi...") {
            savedLoc = loc;
            console.log(`✅ Found location in ${key}:`, loc);
            break;
        }
    }
    
    console.log("📍 Final location to display:", savedLoc);
    
    // Update cart sidebar location
    if (cartAddrDisplay) {
        cartAddrDisplay.textContent = savedLoc;
        console.log("✅ Cart address element updated");
    }
    
    // Update hero section location input
    if (heroLocInput) {
        heroLocInput.value = savedLoc !== "Pilih Lokasi..." ? savedLoc : "";
        console.log("✅ Hero location input updated");
    }
    
    // 4. UPDATE CART ITEMS DISPLAY
    const cartItemsWrapper = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    
    if (cartItemsWrapper && totalEl) {
        if (currentCart.length === 0) {
            cartItemsWrapper.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
            totalEl.textContent = 'RM 0.00';
        } else {
            cartItemsWrapper.innerHTML = currentCart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image || item.img}" alt="${item.name}" 
                         onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'">
                    <div style="flex:1">
                        <h4 style="margin:0; font-size:14px;">${item.name}</h4>
                        <p style="margin:5px 0; color:#ffa600; font-weight:bold;">RM ${(item.price * item.quantity).toFixed(2)}</p>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <button onclick="changeQty('${item.id}', -1)" class="qty-btn">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="changeQty('${item.id}', 1)" class="qty-btn">+</button>
                        </div>
                    </div>
                </div>
            `).join('');

            const total = currentCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            totalEl.textContent = `RM ${total.toFixed(2)}`;
        }
    }
    
    console.log("✅ updateCartUI completed successfully");
}


// Function untuk menu items
window.addToCartFromMenu = function(itemId) {
    const item = allMenuItems.find(m => m.id === itemId);
    if (!item) {
        console.error("Item not found:", itemId);
        return;
    }
    
    // Jika ada universal cart system, guna itu
    if (typeof universalAddToCart === 'function') {
        universalAddToCart(item.id, item.name, item.price, item.img || item.image);
        return;
    }
    
    // Fallback untuk compatibility
    const existing = cart.find(c => c.id === itemId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ 
            ...item, 
            image: item.img || item.image,
            quantity: 1 
        });
    }
    
    saveCart();
    updateCartUI();
    
    // Show notification
    if (typeof showNotification === 'function') {
        showNotification(`${item.name} added to cart!`);
    }
};

window.changeQty = function(id, delta) {
    // Jika ada universal cart system, guna itu
    if (typeof changeCartQty === 'function') {
        changeCartQty(id, delta);
        return;
    }
    
    // Fallback untuk compatibility
    const itemIndex = cart.findIndex(c => c.id === id);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += delta;
        
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        saveCart();
        updateCartUI();
    }
};

window.deleteCartItem = function(id) {
    if (confirm("Remove this item from cart?")) {
        cart = cart.filter(c => c.id !== id);
        saveCart();
        updateCartUI();
        
        // Show notification jika ada
        if (typeof showNotification === 'function') {
            showNotification("Item removed from cart!");
        }
    }
};

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        color: var(--text-main);
        padding: 15px 25px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 9999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        border: 2px solid var(--main-color);
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// UPDATE MOBILE DOT FUNCTION
function updateMobileDot() {
    const mobileDot = document.getElementById('mobile-noti-dot');
    if (!mobileDot) {
        console.error("Mobile dot element not found!");
        return;
    }
    
    const cart = JSON.parse(localStorage.getItem('D_GourMeals_Cart')) || [];
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // UPDATE DOT
    mobileDot.style.display = totalQuantity > 0 ? 'block' : 'none';
    
    // DEBUG LOG
    console.log("🟢 Mobile dot updated:", {
        totalQuantity: totalQuantity,
        display: mobileDot.style.display
    });
}

// ==================== EVENT LISTENERS (TAMBAH DALAM DOMContentLoaded) ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log("D GourMeals - Initializing with new data...");



// DEBUG: Check semua elements
    console.log("🔍 Debug elements:");
    console.log("- cart-display-address:", document.getElementById('cart-display-address'));
    console.log("- user-location-input:", document.getElementById('user-location-input'));
    console.log("- cart-count:", document.getElementById('cart-count'));
    
    // DEBUG: Check localStorage
    console.log("📦 localStorage contents:");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(`  ${key}:`, localStorage.getItem(key));
    }



// ========== INISIALISASI DROPDOWN MENUS ==========
    console.log("✅ Initializing dropdown menus...");
    
    // Event delegation untuk dropdowns (jika belum ada)
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // 1. Handle dropdown toggles
        if (target.matches('.dropbtn') || target.closest('.dropbtn')) {
            event.preventDefault();
            event.stopPropagation();
            
            const dropbtn = target.matches('.dropbtn') ? target : target.closest('.dropbtn');
            const currentDropdown = dropbtn.nextElementSibling;
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-content.show').forEach(dropdown => {
                if (dropdown !== currentDropdown) {
                    dropdown.classList.remove('show');
                }
            });
            
            // Toggle current dropdown
            currentDropdown.classList.toggle('show');
        }
        
        // 2. Close dropdowns when clicking outside
        if (!target.matches('.dropbtn') && !target.closest('.dropbtn') && !target.closest('.dropdown-content')) {
            document.querySelectorAll('.dropdown-content.show').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });


    
    // Render popular restaurants
    renderPopular();
    
    // Initial category filter (paparkan semua)
    const firstCatCard = document.querySelector('.cat-card');
    if (firstCatCard && typeof filterMenu === 'function') {
        filterMenu('all', firstCatCard);
    }
    
    // 📍 Location Logic
    const locationInput = document.getElementById('user-location-input');
    const saveLocBtn = document.getElementById('save-location-btn');

    if (locationInput) {
        locationInput.value = localStorage.getItem('umskal_delivery_location') || "";
        locationInput.addEventListener('click', () => {
            window.location.href = 'location.html';
        });
    }
    
    if (saveLocBtn) {
        saveLocBtn.addEventListener('click', () => {
            window.location.href = 'location.html';
        });
    }

    // 📱 Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 🛒 Cart Event Listeners
    const cartNavLink = document.getElementById('cart-nav-link');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmCancel = document.getElementById('confirm-cancel');
    const modal = document.getElementById('custom-confirm');

    if (cartNavLink) {
        cartNavLink.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });
    }

    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            const cart = JSON.parse(localStorage.getItem('D_GourMeals_Cart')) || [];
            if (cart.length > 0 && modal) {
                modal.style.display = 'flex';
            }
        });
    }

    if (confirmYes) {
        confirmYes.addEventListener('click', function() {
            localStorage.setItem('D_GourMeals_Cart', JSON.stringify([]));
            updateCartUI();
            if (modal) modal.style.display = 'none';
        });
    }

    if (confirmCancel) {
        confirmCancel.addEventListener('click', function() {
            if (modal) modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // 🛒 Checkout Logic
 

    // Initial cart update
    updateCartUI();
    updateMobileDot();
    
    // Close dropdowns when window resizes
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            document.querySelectorAll('.dropdown-content.show').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
            
            // Auto-close mobile menu on desktop
            const navMenu = document.getElementById('nav-menu');
            const menuBtn = document.getElementById('mobile-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuBtn) {
                    const icon = menuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        }
    });
    
});

// Export semua functions
window.saveCart = saveCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.updateCartUI = updateCartUI;
window.addToCartFromMenu = addToCartFromMenu;
window.changeQty = changeQty;
window.deleteCartItem = deleteCartItem;
window.showNotification = showNotification;
window.updateMobileDot = updateMobileDot;
window.renderPopular = renderPopular;
window.filterMenu = filterMenu;
window.goToRestaurant = goToRestaurant;