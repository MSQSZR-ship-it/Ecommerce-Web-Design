// ==================== DATA 10 GERAI x 10 MENU (FULL VERSION) ====================


const restaurantData = {
    "Sofinaz": [
        { id: "sof_1", name: "Nasi Putih", price: 1.50, img: "../ASSETS/MenuKedai/sof_1-nasi-putih.jpg" },
        { id: "sof_2", name: "Ayam Goreng", price: 3.00, img: "../ASSETS/MenuKedai/sof-2.jpg" },
        { id: "sof_3", name: "Sayur Campur", price: 4.00, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
        { id: "sof_4", name: "Ikan Bakar", price: 12.00, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
        { id: "sof_5", name: "Telur Dadar", price: 2.00, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400" },
        { id: "sof_6", name: "Sambal Belacan", price: 1.00, img: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=400" },
        { id: "sof_7", name: "Sup Ayam", price: 7.00, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
        { id: "sof_8", name: "Nasi Campur", price: 8.50, img: "../ASSETS/MenuKedai/sof-3.jpg" },
        { id: "sof_9", name: "Daging Kicap", price: 9.00, img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400" },
        { id: "sof_10", name: "Ulam-ulaman", price: 3.00, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400" }
    
    ],
    "A & A": [
        { id: "aa_1", name: "Ayam Kicap", price: 3.00, img: "../ASSETS/MenuKedai/aa-1.jpg" },
        { id: "aa_2", name: "Ayam Masak Merah", price: 3.00, img: "../ASSETS/MenuKedai/aa-2.jpg" },
        { id: "aa_3", name: "Mee Goreng Mamak", price: 6.50, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400" },
        { id: "aa_4", name: "Nasi Kandar", price: 17.00, img: "../ASSETS/MenuKedai/aa-4.jpg" },
        { id: "aa_5", name: "Nasi Goreng Ayam", price: 7.50, img: "../ASSETS/MenuKedai/aa-5.jpg" },
        { id: "aa_6", name: "Nasi Goreng Seafood", price: 9.00, img: "../ASSETS/MenuKedai/aa-6.jpg" },
        { id: "aa_7", name: "Maggi Goreng", price: 5.50, img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400" },
        { id: "aa_8", name: "Ayam Tandoori", price: 7.50, img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400" },
        { id: "aa_9", name: "Nasi Briyani", price: 12.00, img: "../ASSETS/MenuKedai/aa-9.jpg" },
        { id: "aa_10", name: "Nasi Bujang", price: 4.00, img: "../ASSETS/MenuKedai/aa-10.jpg" }
   
    ],
    "Pak Asan": [
        { id: "pa_1", name: "Ayam Bakar Madu", price: 12.00, img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400" },
        { id: "pa_2", name: "Nasi Lalap", price: 10.00, img: "../ASSETS/MenuKedai/pa-2.jpg" },
        { id: "pa_3", name: "Lele Penyet", price: 9.00, img: "../ASSETS/MenuKedai/pa-3.jpg" },
        { id: "pa_4", name: "Sate Ayam", price: 8.00, img: "../ASSETS/MenuKedai/pa-4.webp" },
        { id: "pa_5", name: "Soto Ayam", price: 7.00, img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400" },
        { id: "pa_6", name: "Tahu Tempe", price: 4.00, img: "../ASSETS/MenuKedai/pa-6.jpg" },
        { id: "pa_7", name: "Nasi Ayam Butter Milk", price: 8.00, img: "../ASSETS/MenuKedai/pa-7.jpg" },
        { id: "pa_8", name: "Gado-gado", price: 7.50, img: "../ASSETS/MenuKedai/pa-8.webp" },
        { id: "pa_9", name: "Nasi Kerabu", price: 8.00, img: "../ASSETS/MenuKedai/pa-9.jpg" },
        { id: "pa_10", name: "Nasi Goreng Pataya", price: 1.00, img: "../ASSETS/MenuKedai/pa-10.jpg" }
    ],
    "Mozella Burger": [
        { id: "mb_1", name: "Burger Telur", price: 3.50, img: "../ASSETS/MenuKedai/mb-1.jpg" },
        { id: "mb_2", name: "Burger Ayam", price: 5.00, img: "../ASSETS/MenuKedai/mb-2.jpg" },
        { id: "mb_3", name: "Burger Daging", price: 5.00, img: "../ASSETS/MenuKedai/mb-3.jpg" },
        { id: "mb_4", name: "Burger Ayam Special", price: 6.00, img: "../ASSETS/MenuKedai/mb-4.jpg" },
        { id: "mb_5", name: "Burger Daging Special", price: 6.00, img: "../ASSETS/MenuKedai/mb-5.jpg" },
        { id: "mb_6", name: "Roti John Telur", price: 7.50, img: "../ASSETS/MenuKedai/mb-6.png" },
        { id: "mb_7", name: "Roti John Ayam", price: 8.50, img: "../ASSETS/MenuKedai/mb-7.jpg" },
        { id: "mb_8", name: "Roti John Daging", price: 8.50, img: "../ASSETS/MenuKedai/mb-8.jpg" },
        { id: "mb_9", name: "Kentang Goreng", price: 3.00, img: "../ASSETS/MenuKedai/mb-9.jpeg" },
        { id: "mb_10", name: "Full set", price: 15.00, img: "../ASSETS/MenuKedai/mb-10.webp" }
   
    ],
    "Nasi Ayam": [
        { id: "na_1", name: "Ayam Geprek", price: 9.00, img: "../ASSETS/MenuKedai/na-1.png" },
        { id: "na_2", name: "Mee Ayam", price: 6.00, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400" },
        { id: "na_3", name: "Ayam Penyet", price: 10.00, img: "../ASSETS/MenuKedai/na-3.jpg" },
        { id: "na_4", name: "Sup Tulang", price: 12.00, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
        { id: "na_5", name: "Ayam Paprik ", price: 9.00, img: "../ASSETS/MenuKedai/na-5.jpg" },
        { id: "na_6", name: "Mee Hun Goreng", price: 5.50, img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400" },
        { id: "na_7", name: "Indomie Goreng", price: 4.50, img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400" },
        { id: "na_8", name: "Nasi Hujan Panas", price: 9.50, img: "../ASSETS/MenuKedai/na-8.jpg" },
        { id: "na_9", name: "Satay Daging", price: 10.00, img: "../ASSETS/MenuKedai/na-10.jpg" },
        { id: "na_10", name: "Nasi Goreng Cina", price: 7.00, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" }
    ], 
    "Chiken Chop": [
        { id: "cc_1", name: "Whopper Burger", price: 15.00, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400" },
        { id: "cc_2", name: "Cheese Burger", price: 10.00, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
        { id: "cc_3", name: "French Fries", price: 6.00, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400" },
        { id: "cc_4", name: "Onion Rings", price: 7.00, img: "../ASSETS/MenuKedai/cc-4.jpg" },
        { id: "cc_5", name: "Coca Cola", price: 3.50, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
        { id: "cc_6", name: "Chicken Nuggets", price: 6.00, img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
        { id: "cc_7", name: "Nuggets", price: 4.00, img: "../ASSETS/MenuKedai/cc-7.jpg" },
        { id: "cc_8", name: "Roti john Daging", price: 9.00, img: "../ASSETS/MenuKedai/cc-8.jpg" },
        { id: "cc_9", name: "chiken chop", price: 10.50, img: "../ASSETS/MenuKedai/cc-9.jpg" },
        { id: "cc_10", name: "Roti John Special", price: 10.00, img: "../ASSETS/MenuKedai/cc-10.jpg" }
    ],
    "Kak D Pyor": [
        { id: "kdp_1", name: "Green Tea", price: 3.00, img: "../ASSETS/MenuKedai/kdp-1.jpg" },
        { id: "kdp_2", name: "Manggo jucie", price: 3.00, img: "../ASSETS/MenuKedai/kdp-2.jpg" },
        { id: "kdp_3", name: "Air Jagung", price: 3.00, img: "../ASSETS/MenuKedai/kdp-3.jpg" },
        { id: "kdp_4", name: "jus Strawberry", price: 3.00, img: "../ASSETS/MenuKedai/kdp-4.jpg" },
        { id: "kdp_5", name: "Air Apple Hijau", price: 3.00, img: "../ASSETS/MenuKedai/kdp-5.png" },
        { id: "kdp_6", name: "Air Anggur", price: 3.00, img: "../ASSETS/MenuKedai/kdp-6.avif" },
        { id: "kdp_7", name: "Honeydew juice", price: 3.00, img: "../ASSETS/MenuKedai/kdp-7.webp" },
        { id: "kdp_8", name: "Milo Ice", price: 3.00, img: "../ASSETS/MenuKedai/kdp-8.png" },
        { id: "kdp_9", name: "Nescafe ice", price: 3.00, img: "../ASSETS/MenuKedai/kdp-9.webp" },
        { id: "kdp_10", name: "Keladi Juice", price: 3.00, img: "../ASSETS/MenuKedai/kdp-10.jpg" }
    ],
    
    "Kesumba": [
        { id: "kb_1", name: "ice Lemon Tea", price: 4.00, img: "../ASSETS/MenuKedai/kb-1.webp" },
        { id: "kb_2", name: "Kopi O", price: 3.00, img: "../ASSETS/MenuKedai/kb-2.jpg" },
        { id: "kb_3", name: "Teh c Special", price: 6.00, img: "../ASSETS/MenuKedai/kb-3.jpg" },
        { id: "kb_4", name: "Cheese Cake", price: 8.00, img: "../ASSETS/MenuKedai/kb-4.jpg" },
        { id: "kb_5", name: "pudding", price: 6.00, img: "../ASSETS/MenuKedai/kb-5.jpg" },
        { id: "kb_6", name: "Roti Sosej", price: 7.00, img: "../ASSETS/MenuKedai/kb-6.jpg" },
        { id: "kb_7", name: "Kek Batik", price: 10.00, img: "../ASSETS/MenuKedai/kb-7.jpg" },
        { id: "kb_8", name: "Salad", price: 7.00, img: "../ASSETS/MenuKedai/kb-8.jpg" },
        { id: "kb_9", name: "ABC", price: 7.00, img: "../ASSETS/MenuKedai/kb-9.jpg" },
        { id: "kb_10", name: "Waffle", price: 8.00, img: "../ASSETS/MenuKedai/kb-10.jpg" }
    ],
    "Two Guys Mart": [
        { id: "tgm_1", name: "Ice Cream vanilla", price: 5.00, img: "../ASSETS/MenuKedai/tgm-1.jpg" },
        { id: "tgm_2", name: "Ice Creem KitKat", price: 5.00, img: "../ASSETS/MenuKedai/tgm-2.png" },
        { id: "tgm_3", name: "Maggi Kari", price: 5.00, img: "../ASSETS/MenuKedai/tgm-3.avif" },
        { id: "tgm_4", name: "Mi Sedap Goreng", price: 6.00, img: "../ASSETS/MenuKedai/tgm-4.jpg" },
        { id: "tgm_5", name: "Mi Sedap Soto", price: 6.00, img: "../ASSETS/MenuKedai/tgm-5.jpg" },
        { id: "tgm_6", name: "Maggi Tomyam", price: 5.00, img: "../ASSETS/MenuKedai/tgm-6.avif" },
        { id: "tgm_7", name: "Coca-Cola", price: 3.00, img: "../ASSETS/MenuKedai/tgm-7.jpg" },
        { id: "tgm_8", name: "Pepsi", price: 2.50, img: "../ASSETS/MenuKedai/tgm-8.webp" },
        { id: "tgm_9", name: "Zus", price: 4.00, img: "../ASSETS/MenuKedai/tgm-9.webp" },
        { id: "tgm_10", name: "F&N", price: 1.80, img: "../ASSETS/MenuKedai/tgm-10.jpg" }
    ],
    "not Available yet slot 10": [
        { id: "", name: "", price: 0.00, image: "" }
    ],
};

// Data Gerai Lokal
const localRestaurants = {
    "not Available yet slot 11": [
    { id: "", name: "", price: 0.00, image: "" }
    ],
    "not Available yet slot 12": [
    { id: "", name: "", price: 0.00, image: "" }
    ],

};

// Gabungkan Semua Gerai
const allStores = { ...restaurantData, ...localRestaurants }; 



// ==================== CART INTEGRATION ====================
// Function untuk tambah ke cart (COMPATIBLE DENGAN CART-SYSTEM.JS)
function addItemToCart(itemName, price, imgUrl, itemId = null) {
    // Generate ID jika tidak ada
    const finalId = itemId || 'item_' + itemName.toLowerCase().replace(/\s+/g, '_');
    
    console.log("🛒 Adding to cart:", itemName);
    
    // Panggil universal cart system jika ada
    if (typeof universalAddToCart === 'function') {
        universalAddToCart(finalId, itemName, price, imgUrl);
        return;
    }
    
    // Fallback: Simpan ke localStorage
    let cart = JSON.parse(localStorage.getItem('D_GourMeals_Cart')) || [];
    const existing = cart.find(item => item.id === finalId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: finalId,
            name: itemName,
            price: price,
            image: imgUrl,
            quantity: 1
        });
    }
    
    localStorage.setItem('D_GourMeals_Cart', JSON.stringify(cart));
    
    // Update cart UI
    updateCartCount();
    
    // Show notification
    showNotification(itemName + " added to cart!");
}

// Update cart count display
function updateCartCount() {
    // PENTING: Key mesti sama dengan cart-system.js (v5)
    const CART_KEY = 'D_GourMeals_Cart_v5'; 
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update Badge Nombor
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
    
    // Update Dot Merah (Mobile)
    const mobileDot = document.getElementById('mobile-noti-dot');
    if (mobileDot) {
        // Kalau ada barang, tunjuk dot. Kalau kosong, sorok.
        mobileDot.style.display = totalItems > 0 ? 'block' : 'none';
        
        // Tambah CSS sikit supaya dot tu nampak (Sebab kadang style dia hilang)
        if (totalItems > 0) {
            mobileDot.style.background = '#ff4d4d'; // Warna merah
            mobileDot.style.width = '10px';
            mobileDot.style.height = '10px';
            mobileDot.style.borderRadius = '50%';
            mobileDot.style.position = 'absolute';
        }
    }
}

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ==================== RENDER FUNCTIONS ====================
function renderStores(dataToDisplay = allStores) {
    const grid = document.getElementById('all-restaurants-grid');
    if (!grid) return;
    
    document.getElementById('view-title').innerText = "All Restaurants";
    
    // Gunakan dataToDisplay, bukan Object.keys(allStores)
    const storesToShow = Object.keys(dataToDisplay);
    
    document.getElementById('view-subtitle').innerText = storesToShow.length + " restaurants available";
    document.getElementById('filter-section').style.display = "flex";
    document.getElementById('back-btn-container').innerHTML = "";

    let html = "";
    storesToShow.forEach(store => {
        const firstItem = dataToDisplay[store][0]; // Ambil dari data yang dihantar
        const img = firstItem.img || firstItem.image;
        
        // Rating simulasi (supaya nampak beza bila sort)
        // Kalau kau ada data rating betul dalam array, guna yang tu.
        const rating = store.length > 8 ? "4.9" : "4.5"; 

        html += `
            <div class="card" onclick="viewMenu('${store}')">
                <div class="card-header">
                    <div class="promo-badge">Free Delivery</div>
                    <div class="rating-badge"><i class="fas fa-star"></i> ${rating}</div>
                    <img src="${img}" alt="${store}">
                </div>
                <div class="card-info">
                    <h3>${store}</h3>
                    <p class="card-tags">Western • Fast Food</p>
                    <div class="card-footer">
                        <span><i class="far fa-clock"></i> 15-25 min</span>
                        <span>Free</span>
                    </div>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
    updateCartCount();
}

function viewMenu(storeName) {
    const grid = document.getElementById('all-restaurants-grid');
    if (!grid) return;
    
    document.getElementById('view-title').innerText = storeName;
    document.getElementById('view-subtitle').style.display = "none";
    document.getElementById('filter-section').style.display = "none";

    document.getElementById('back-btn-container').innerHTML = `
        <button class="btn-back-modern" onclick="renderStores()">
            <i class="fas fa-arrow-left"></i> Back to All Restaurants
        </button>
    `;

    const menus = allStores[storeName];
    let html = "";
    
    menus.forEach((item) => {
        const itemImg = item.img || item.image;
        const itemId = item.id;
        
        html += `
            <div class="card">
                <div class="card-header">
                    <div class="rating-tag"><i class="fas fa-star"></i> 4.8</div>
                    <img src="${itemImg}" alt="${item.name}">
                </div>
                <div class="card-info">
                    <h3>${item.name}</h3>
                    <p class="card-tags">Delicious Choice</p>
                    <div style="font-weight:800; color:#10b981; margin-bottom:10px;">RM ${item.price.toFixed(2)}</div>
                    <button class="btn-add-cart" onclick="addItemToCart('${item.name}', ${item.price}, '${itemImg}', '${itemId}')">
                        <i class="fas fa-plus"></i> Tambah ke Cart
                    </button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
    
    // Update cart count
    updateCartCount();
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// ==================== SORTING FUNCTIONS ====================
let currentSort = 'all';

function sortStores(type, btnElement) {
    // Update active button warna orange
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    let storeKeys = Object.keys(allStores);
    let sortedData = {};

    if (type === 'name') {
        storeKeys.sort(); // A-Z
    } 
    else if (type === 'rating') {
        // Kita sort berdasarkan panjang nama sebagai simulasi rating 
        // (Sebab data kau tak ada field rating dalam array)
        storeKeys.sort((a, b) => b.length - a.length); 
    } 
    else if (type === 'delivery') {
        // Simulasi: Labuan paling depan
        storeKeys.sort((a, b) => a.includes("Labuan") ? -1 : 1);
    }

    // Masukkan balik dalam object baru mengikut susunan keys yang dah di-sort
    storeKeys.forEach(key => {
        sortedData[key] = allStores[key];
    });

    // PENTING: Hantar sortedData ke renderStores
    renderStores(type === 'all' ? allStores : sortedData);
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    // Check jika kita di page yang ada restaurant grid
    if (document.getElementById('all-restaurants-grid')) {
        renderStores();
    }

    
    
    // Update cart count on page load
    updateCartCount();

 // TAMBAH INI: Auto-load restaurant jika ada dalam localStorage
    const autoStore = localStorage.getItem('selected_store_for_menu');
    if (autoStore && typeof viewMenu === 'function') {
        console.log("Auto-loading restaurant:", autoStore);
        viewMenu(autoStore); // Panggil fungsi dari Java.js
        localStorage.removeItem('selected_store_for_menu'); // Clear selepas guna
    }


});

// Export functions
window.addItemToCart = addItemToCart;
window.updateCartCount = updateCartCount;
window.renderStores = renderStores;
window.viewMenu = viewMenu;
window.sortStores = sortStores;