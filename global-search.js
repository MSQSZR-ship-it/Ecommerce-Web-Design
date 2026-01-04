// ==================== GLOBAL SEARCH SYSTEM (COMPATIBLE VERSION) ====================
// File: js/global-search.js
// COMPATIBLE dengan: java.js, Menujava.js, script.js, cart-system.js

console.log("🚀 GLOBAL SEARCH SYSTEM - COMPATIBLE VERSION LOADED");

// ==================== 1. DATA COLLECTION (COMPATIBLE SEMUA SUMBER) ====================

function getAllMenuItemsForSearch() {
    let allItems = [];
    
    console.log("🔍 Mengumpul data makanan dari semua sumber...");
    
    // SUMBER 1: Data dari script.js (allMenuItems) - untuk compatibility
    if (typeof allMenuItems !== 'undefined' && Array.isArray(allMenuItems)) {
        console.log(`📦 Found ${allMenuItems.length} items from script.js`);
        allMenuItems.forEach(item => {
            // Format sesuai dengan cart-system.js
            allItems.push({
                id: item.id || `script_${item.name.toLowerCase().replace(/\s+/g, '_')}`,
                name: item.name,
                price: item.price,
                image: item.img || item.image || getDefaultFoodImage(),
                store: item.restaurant || 'Popular', // dari script.js
                source: 'script',
                originalData: item
            });
        });
    }
    
    // SUMBER 2: Data dari java.js (allStores) - DATA UTAMA LENGKAP
    if (typeof allStores !== 'undefined') {
        console.log(`📦 Found ${Object.keys(allStores).length} stores from java.js`);
        Object.keys(allStores).forEach(storeName => {
            const storeItems = allStores[storeName];
            if (Array.isArray(storeItems)) {
                storeItems.forEach(item => {
                    // Format sesuai dengan cart-system.js + ada store name
                    allItems.push({
                        id: item.id || `${storeName}_${item.name.toLowerCase().replace(/\s+/g, '_')}`,
                        name: item.name,
                        price: item.price,
                        image: item.img || item.image || getDefaultFoodImage(),
                        store: storeName, // NAMA KEDAI
                        source: 'GERAI',
                        originalData: item
                    });
                });
            }
        });
    }
    
    // SUMBER 3: Data dari Menujava.js (jika ada function khusus)
    if (typeof getAllMenuItemsFromGerai === 'function') {
        try {
            const geraiItems = getAllMenuItemsFromGerai();
            console.log(`📦 Found ${geraiItems.length} items from Menujava.js`);
            geraiItems.forEach(item => {
                // Tambah jika belum ada dalam list (berdasarkan ID)
                if (!allItems.some(existing => existing.id === item.id)) {
                    allItems.push({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image || getDefaultFoodImage(),
                        store: item.store || 'Unknown',
                        source: 'Menujava',
                        category: item.category,
                        originalData: item
                    });
                }
            });
        } catch (error) {
            console.warn("⚠️ Error getting items from Menujava.js:", error);
        }
    }
    
    // SUMBER 4: Data dari script.js allRestaurantsData
    if (typeof allRestaurantsData !== 'undefined') {
        console.log(`📦 Found ${Object.keys(allRestaurantsData).length} restaurants from script.js`);
        Object.keys(allRestaurantsData).forEach(storeName => {
            const store = allRestaurantsData[storeName];
            if (store.items && Array.isArray(store.items)) {
                store.items.forEach(item => {
                    const existingId = item.id || `${storeName}_${item.name.toLowerCase().replace(/\s+/g, '_')}`;
                    if (!allItems.some(existing => existing.id === existingId)) {
                        allItems.push({
                            id: existingId,
                            name: item.name,
                            price: item.price,
                            image: item.img || item.image || getDefaultFoodImage(),
                            store: storeName,
                            source: 'script_data',
                            originalData: item
                        });
                    }
                });
            }
        });
    }
    
    console.log(`✅ Total ${allItems.length} menu items collected for search`);
    return allItems;
}

function getAllRestaurantsForSearch() {
    let allRestaurants = [];
    
    // SUMBER 1: Data dari script.js (allRestaurantsData)
    if (typeof allRestaurantsData !== 'undefined') {
        Object.keys(allRestaurantsData).forEach(name => {
            const r = allRestaurantsData[name];
            allRestaurants.push({
                name: name,
                cuisine: r.cuisine || 'Various',
                time: r.time || '20-30 min',
                fee: r.fee || 'Free',
                image: r.image || getDefaultRestaurantImage(),
                rating: r.rating || 4.5,
                promo: r.promo || null,
                category: r.category || 'general'
            });
        });
    }
    
    // Data dari java.js (allStores) 
    if (typeof allStores !== 'undefined') {
        Object.keys(allStores).forEach(storeName => {
            if (!allRestaurants.some(r => r.name === storeName)) {
                const firstItem = allStores[storeName]?.[0];
                allRestaurants.push({
                    name: storeName,
                    cuisine: getCuisineFromStoreName(storeName),
                    time: '15-25 min',
                    fee: 'Free',
                    image: firstItem?.img || firstItem?.image || getDefaultRestaurantImage(),
                    rating: 4.5,
                    promo: null,
                    category: 'local'
                });
            }
        });
    }
     
    // Data popularRestaurants dari script.js
    if (typeof popularRestaurants !== 'undefined' && Array.isArray(popularRestaurants)) {
        popularRestaurants.forEach(res => {
            if (!allRestaurants.some(r => r.name === res.name)) {
                allRestaurants.push({
                    name: res.name,
                    cuisine: res.cuisine || 'Various',
                    time: res.time || '20-30 min',
                    fee: res.fee || 'Free',
                    image: res.image || getDefaultRestaurantImage(),
                    rating: res.rating || 4.5,
                    promo: res.promo || null,
                    category: res.category || 'popular'
                });
            }
        });
    }
    
    return allRestaurants;
}

// Helper functions
function getDefaultFoodImage() {
    return 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&crop=center';
}

function getDefaultRestaurantImage() {
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop';
}

function getCuisineFromStoreName(storeName) {
    const cuisines = {
        'Sofinaz': 'Malaysian • Rice',
        'A & A': 'Indian • Mamak',
        'Ayam Bakar': 'Indonesian • Grilled',
        'Nasi Lemak': 'Malaysian • Traditional',
        'Burger King': 'American • Fast Food',
        'Roti Padu': 'Indian • Bread',
        'Indah Cafe': 'Western • Cafe',
        'Barbeque': 'Western • BBQ',
        'Gerai Mantap': 'Malaysian • Mixed',
        'Gerai Pak Tam': 'Malaysian • Traditional',
        'Gerai Kak Nab': 'Local • UMSKAL',
        'Sate Labuan': 'Local • Satay'
    };
    
    return cuisines[storeName] || 'Local • Various';
}

// ==================== 2. SEARCH LOGIC ====================

function performGlobalSearch(query) {
    const term = query.toLowerCase().trim();
    if (!term || term.length < 2) return { dishes: [], restaurants: [], total: 0 };
    
    const items = getAllMenuItemsForSearch();
    const stores = getAllRestaurantsForSearch();
    
    // Search in dishes: nama makanan ATAU nama kedai
    const dishResults = items.filter(item => {
        const itemName = item.name.toLowerCase();
        const storeName = item.store.toLowerCase();
        return itemName.includes(term) || storeName.includes(term);
    });
    
    // Search in restaurants: nama kedai ATAU cuisine
    const storeResults = stores.filter(store => {
        const storeName = store.name.toLowerCase();
        const storeCuisine = store.cuisine.toLowerCase();
        return storeName.includes(term) || storeCuisine.includes(term);
    });
    
    console.log(`🔍 Search "${query}": ${dishResults.length} dishes, ${storeResults.length} restaurants`);
    
    return {
        dishes: dishResults,
        restaurants: storeResults,
        total: dishResults.length + storeResults.length
    };
}

// ==================== 3. UI GENERATOR (COMPATIBLE DESIGN) ====================

function createSearchModal() {
    if (document.getElementById('global-search-modal')) return;
    
    console.log("🛠️ Creating search modal...");

    const modalHTML = `
    <div id="global-search-modal" class="modal-overlay-fixed">
        <div id="modal-container-fixed">
            <!-- BUTTON KELUAR -->
            <div class="section-exit-container">
                <button onclick="closeSearchModal()" class="section-exit-btn" title="Keluar dari carian">
                    <i class="fas fa-arrow-left"></i>
                    <span>Keluar</span>
                </button>
            </div>

            <!-- HEADER SEARCH BAR -->
            <div class="modal-header-sticky">
                <div class="header-search-flex">
                    <div class="search-input-wrapper-fixed">
                        <i class="fas fa-search search-icon-orange"></i>
                        <input type="text" 
                               id="modal-search-input" 
                               placeholder="Cari menu atau restoran..." 
                               autocomplete="off"
                               onkeyup="updateModalSearch(this.value)">
                    </div>
                    <button onclick="clearSearchInput()" class="btn-clear-fixed" title="Kosongkan carian">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <!-- TABS CARIAN -->
                <div id="modal-search-tabs" class="tabs-scrollable-fixed"></div>
            </div>

            <!-- KEPUTUSAN CARIAN -->
            <div id="modal-search-results" class="results-scroll-area">
                <div class="empty-state-fixed">
                    <i class="fas fa-search"></i>
                    <p>Cari makanan atau restoran</p>
                    <small class="search-hint">Contoh: Nasi Lemak, Burger, Ayam Bakar</small>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    addSearchModalStyles();
    
    // CREATE FLOATING SEARCH BUTTON (MOBILE)
    if (!document.querySelector('.floating-search-trigger')) {
        const floatBtn = document.createElement('button');
        floatBtn.className = 'floating-search-trigger';
        floatBtn.innerHTML = '<i class="fas fa-search"></i>';
        floatBtn.onclick = showSearchModal;
        floatBtn.setAttribute('aria-label', 'Buka carian');
        document.body.appendChild(floatBtn);
    }
    
    console.log("✅ Search modal created successfully");
}

function addSearchModalStyles() {
    const style = document.createElement('style');
    style.id = 'global-search-styles';
    style.innerHTML = `
        /* BUTTON KELUAR SECTION */
        .section-exit-container {
            padding: 12px 15px 0 15px;
            background: white;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .section-exit-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #f5f5f5;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 8px 15px;
            color: #666;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            border: none;
            font-family: inherit;
        }
        
        .section-exit-btn:hover {
            background: #ff4757;
            border-color: #ff4757;
            color: white;
        }
        
        /* OVERLAY FULLSCREEN */
        .modal-overlay-fixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.85);
            z-index: 999999;
            display: none;
            justify-content: center;
            align-items: flex-start;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* MAIN CONTAINER */
        #modal-container-fixed {
            background: white;
            width: 100%;
            max-width: 900px;
            border-radius: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            box-shadow: 0 -5px 30px rgba(0,0,0,0.2);
        }

        /* HEADER STICKY */
        .modal-header-sticky {
            padding: 15px;
            background: white;
            z-index: 10;
            position: sticky;
            top: 0;
            border-bottom: 1px solid #eee;
        }

        .header-search-flex {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* SEARCH INPUT */
        .search-input-wrapper-fixed {
            position: relative;
            flex: 1;
        }

        .search-icon-orange {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #ff6b00;
            font-size: 18px;
            z-index: 1;
        }

        #modal-search-input {
            width: 100%;
            padding: 16px 20px 16px 50px;
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            outline: none;
            font-size: 16px;
            transition: all 0.2s;
            background: #f9f9f9;
            box-sizing: border-box;
            font-family: inherit;
        }

        #modal-search-input:focus {
            border-color: #ff6b00;
            background: white;
            box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
        }

        /* BUTTON CLEAR */
        .btn-clear-fixed {
            background: #f0f0f0;
            color: #777;
            border: none;
            width: 48px;
            height: 48px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 18px;
            display: none;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: all 0.2s;
            font-family: inherit;
        }
        
        .btn-clear-fixed:hover {
            background: #ff6b00;
            color: white;
        }

        /* SEARCH TABS */
        .tabs-scrollable-fixed {
            display: none;
            gap: 8px;
            margin-top: 15px;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 5px;
            scrollbar-width: none;
        }
        
        .tabs-scrollable-fixed::-webkit-scrollbar {
            display: none;
        }

        .tab-btn {
            padding: 8px 20px;
            border-radius: 20px;
            border: 1.5px solid #e0e0e0;
            background: white;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            flex-shrink: 0;
            color: #555;
            font-family: inherit;
            border: none;
        }

        .tab-btn:hover {
            border-color: #ff6b00;
            color: #ff6b00;
        }

        .tab-btn.active {
            background: #ff6b00;
            border-color: #ff6b00;
            color: white;
        }

        /* RESULTS AREA */
        .results-scroll-area {
            flex: 1;
            overflow-y: auto;
            padding: 20px 15px;
            background: #f8f8f8;
        }

        /* SEARCH RESULTS GRID */
        .search-results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 15px;
        }

        .search-card-new {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
            display: flex;
            flex-direction: column;
            transition: all 0.2s;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            position: relative;
        }
        
        .search-card-new:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-color: #ff6b00;
        }

        .search-card-new img {
            width: 100%;
            height: 130px;
            object-fit: cover;
            background: #f0f0f0;
        }

        .store-badge {
            font-size: 10px;
            background: #ff6b00;
            color: white;
            padding: 3px 8px;
            border-radius: 4px;
            font-weight: bold;
            align-self: flex-start;
            margin-bottom: 8px;
            display: inline-block;
        }
        
        .restaurant-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(255, 107, 0, 0.95);
            color: white;
            font-size: 10px;
            padding: 4px 10px;
            border-radius: 4px;
            font-weight: bold;
            z-index: 1;
        }

        /* BUTTON TAMBAH KE CART */
        .btn-add-fix {
            background: #28a745;
            color: white;
            border: none;
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 14px;
            margin-top: auto;
            font-family: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .btn-add-fix:hover {
            background: #218838;
        }
        
        .btn-add-fix.success {
            background: #1e7e34;
        }

        /* EMPTY STATE */
        .empty-state-fixed {
            text-align: center;
            padding: 60px 20px;
            color: #888;
        }
        
        .empty-state-fixed i {
            font-size: 48px;
            margin-bottom: 15px;
            color: #ddd;
        }
        
        .empty-state-fixed p {
            font-size: 18px;
            color: #555;
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .search-hint {
            font-size: 14px;
            color: #999;
        }

        /* FLOATING SEARCH BUTTON (MOBILE) */
        .floating-search-trigger {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: #ff6b00;
            color: white;
            border-radius: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            box-shadow: 0 5px 15px rgba(255, 107, 0, 0.4);
            z-index: 9998;
            cursor: pointer;
            border: 3px solid white;
            transition: all 0.3s;
            border: none;
        }
        
        .floating-search-trigger:hover {
            transform: scale(1.05);
            background: #ff7b00;
        }

        /* MOBILE OPTIMIZATIONS */
        @media (max-width: 768px) {
            .floating-search-trigger {
                display: flex;
            }
            
            #modal-container-fixed {
                height: 100vh;
                border-radius: 0;
                max-width: 100%;
            }
            
            #modal-search-input {
                padding: 18px 20px 18px 55px;
                font-size: 17px;
            }
            
            .search-icon-orange {
                left: 20px;
                font-size: 20px;
            }
            
            .btn-clear-fixed {
                width: 50px;
                height: 50px;
            }
            
            .search-results-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
            }
            
            .search-card-new img {
                height: 110px;
            }
            
            .section-exit-container {
                padding: 10px 15px 0 15px;
            }
            
            .results-scroll-area {
                padding: 15px 12px;
            }
        }

        @media (max-width: 360px) {
            .search-results-grid {
                grid-template-columns: 1fr;
            }
            
            .floating-search-trigger {
                bottom: 80px;
                right: 15px;
                width: 55px;
                height: 55px;
                font-size: 20px;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== 4. SEARCH FUNCTIONS ====================

function updateModalSearch(query) {
    const resultsDiv = document.getElementById('modal-search-results');
    const tabsDiv = document.getElementById('modal-search-tabs');
    const clearBtn = document.querySelector('.btn-clear-fixed');
    
    // Show/hide clear button
    if (clearBtn) {
        clearBtn.style.display = query.trim().length > 0 ? 'flex' : 'none';
    }
    
    if (query.trim().length < 2) {
        tabsDiv.style.display = 'none';
        resultsDiv.innerHTML = `
            <div class="empty-state-fixed">
                <i class="fas fa-keyboard"></i>
                <p>Taip sekurang-kurangnya 2 huruf...</p>
                <small class="search-hint">Contoh: "nasi", "ayam", "burger"</small>
            </div>`;
        return;
    }

    const results = performGlobalSearch(query);
    tabsDiv.style.display = 'flex';
    tabsDiv.innerHTML = `
        <button onclick="switchModalTab('all', '${query.replace(/'/g, "\\'")}')" class="tab-btn active">
            Semua (${results.total})
        </button>
        <button onclick="switchModalTab('dishes', '${query.replace(/'/g, "\\'")}')" class="tab-btn">
            Menu (${results.dishes.length})
        </button>
        <button onclick="switchModalTab('restaurants', '${query.replace(/'/g, "\\'")}')" class="tab-btn">
            Kedai (${results.restaurants.length})
        </button>
    `;

    renderModalSearchResults(query, 'all');
}

function renderModalSearchResults(query, tab) {
    const results = performGlobalSearch(query);
    const resultsDiv = document.getElementById('modal-search-results');
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    if (results.total === 0) {
        resultsDiv.innerHTML = `
            <div class="empty-state-fixed">
                <i class="fas fa-search-slash"></i>
                <p>Tiada hasil ditemukan untuk "${query}"</p>
                <small class="search-hint">Cuba dengan kata kunci yang berbeza</small>
            </div>`;
        return;
    }

    let html = `<div class="search-results-grid">`;

    // RENDER DISHES (MENU ITEMS)
    if (tab === 'all' || tab === 'dishes') {
        results.dishes.forEach(item => {
            let imgSrc = item.image;
            if (!imgSrc.includes('http') && !imgSrc.includes('../')) {
                imgSrc = (item.source === 'GERAI') ? `ASSETS/${imgSrc}` : imgSrc;
            }
            
            // Escape untuk onclick
            const safeName = item.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const safeStore = item.store.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            const safeImg = imgSrc.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            
            html += `
            <div class="search-card-new">
                <img src="${imgSrc}" 
                     onerror="this.src='${getDefaultFoodImage()}'" 
                     alt="${item.name}">
                <div style="padding: 12px; display: flex; flex-direction: column; flex: 1;">
                    <span class="store-badge">${item.store}</span>
                    <h4 style="margin: 5px 0; font-size: 14px; font-weight: 600; line-height: 1.3; flex: 1; color: #333;">
                        ${item.name}
                    </h4>
                    <div style="font-weight: bold; color: #222; font-size: 16px; margin: 8px 0;">
                        RM ${parseFloat(item.price).toFixed(2)}
                    </div>
                    <button class="btn-add-fix" 
                            onclick="addToCartFromSearch('${item.id}', '${safeName}', ${item.price}, '${safeImg}', '${safeStore}')">
                        <i class="fas fa-plus"></i> Tambah
                    </button>
                </div>
            </div>`;
        });
    }

    // RENDER RESTAURANTS (KEDAI)
    if (tab === 'all' || tab === 'restaurants') {
        results.restaurants.forEach(res => {
            const safeName = res.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
            
            html += `
            <div class="search-card-new" 
                 onclick="goToRestaurantFromSearch('${safeName}')" 
                 style="cursor: pointer; border: 2px solid #ff6b00;">
                <div class="restaurant-badge">KEDAI</div>
                <img src="${res.image}" 
                     onerror="this.src='${getDefaultRestaurantImage()}'"
                     alt="${res.name}">
                <div style="padding: 12px;">
                    <h4 style="margin: 5px 0; font-size: 14px; font-weight: 600; color: #333;">
                        ${res.name}
                    </h4>
                    <p style="font-size: 12px; color: #666; margin: 4px 0;">
                        <i class="fas fa-utensils"></i> ${res.cuisine}
                    </p>
                    <div style="display: flex; justify-content: space-between; font-size: 11px; color: #888; margin-top: 8px;">
                        <span><i class="fas fa-clock"></i> ${res.time}</span>
                        <span><i class="fas fa-truck"></i> ${res.fee}</span>
                    </div>
                </div>
            </div>`;
        });
    }

    html += `</div>`;
    resultsDiv.innerHTML = html;
}

// ==================== 5. CART INTEGRATION (COMPATIBLE SEMUA SISTEM) ====================

function addToCartFromSearch(itemId, itemName, price, imageUrl, storeName) {
    console.log(`🛒 Adding to cart from search: ${itemName} from ${storeName}`);
    
    const event = window.event || {};
    const button = event.target?.closest('.btn-add-fix') || event.target;
    
    // OPTION 1: Gunakan cart-system.js (UNIVERSAL - PREFERRED)
    if (typeof universalAddToCart === 'function') {
        console.log("✅ Using universalAddToCart from cart-system.js");
        universalAddToCart(itemId, itemName, price, imageUrl);
        showSearchNotification(`${itemName} dari ${storeName} ditambah ke troli!`, button);
        return;
    }
    
    // OPTION 2: Gunakan addItemToCart dari java.js
    if (typeof addItemToCart === 'function') {
        console.log("✅ Using addItemToCart from java.js");
        addItemToCart(itemName, price, imageUrl, itemId);
        showSearchNotification(`${itemName} dari ${storeName} ditambah ke troli!`, button);
        return;
    }
    
    // OPTION 3: Gunakan addMenuItemToCart dari Menujava.js
    if (typeof addMenuItemToCart === 'function') {
        console.log("✅ Using addMenuItemToCart from Menujava.js");
        addMenuItemToCart(itemId, itemName, price, imageUrl, storeName);
        showSearchNotification(`${itemName} dari ${storeName} ditambah ke troli!`, button);
        return;
    }
    
    // OPTION 4: Gunakan addToCartFromMenu dari script.js
    if (typeof addToCartFromMenu === 'function') {
        console.log("✅ Using addToCartFromMenu from script.js");
        addToCartFromMenu(itemId);
        showSearchNotification(`${itemName} dari ${storeName} ditambah ke troli!`, button);
        return;
    }
    
    // FALLBACK: Direct localStorage (compatible dengan cart-system.js)
    console.log("⚠️ Using fallback cart system");
    const CART_KEY = 'D_GourMeals_Cart_v5'; // Sama dengan cart-system.js
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
            store: storeName, // Simpan nama kedai
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    
    // Update UI menggunakan system yang ada
    if (typeof updateCartUIEverywhere === 'function') {
        updateCartUIEverywhere();
    } else if (typeof updateCartUI === 'function') {
        updateCartUI();
    } else if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
    
    showSearchNotification(`${itemName} dari ${storeName} ditambah ke troli!`, button);
}

function showSearchNotification(message, button = null) {
    if (button) {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Berjaya!';
        button.classList.add('success');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('success');
        }, 1000);
    }
    
    // Juga tunjuk notification popup jika ada function
    if (typeof showCartNotification === 'function') {
        showCartNotification(message);
    } else if (typeof showNotification === 'function') {
        showNotification(message);
    } else if (typeof showCategoryNotification === 'function') {
        showCategoryNotification(message);
    }
}

// ==================== 6. RESTAURANT NAVIGATION ====================

function goToRestaurantFromSearch(restaurantName) {
    console.log(`📍 Going to restaurant: ${restaurantName}`);
    
    // Simpan restaurant yang dipilih
    localStorage.setItem('selected_store_for_menu', restaurantName);
    
    // Gunakan function dari script.js jika ada
    if (typeof goToRestaurant === 'function') {
        goToRestaurant(restaurantName);
        return;
    }
    
    // Gunakan function dari java.js jika ada
    if (typeof viewMenu === 'function') {
        // Redirect ke GERAI/Menu.html dulu
        window.location.href = 'GERAI/Menu.html';
        // viewMenu akan dipanggil auto dalam java.js
        return;
    }
    
    // Fallback: Redirect ke menu page
    window.location.href = 'GERAI/Menu.html';
}

// ==================== 7. MODAL CONTROL FUNCTIONS ====================

window.showSearchModal = () => {
    createSearchModal();
    const modal = document.getElementById('global-search-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            const input = document.getElementById('modal-search-input');
            if (input) {
                input.focus();
                input.select();
            }
        }, 150);
    }
};

window.closeSearchModal = () => {
    const modal = document.getElementById('global-search-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

window.clearSearchInput = () => {
    const input = document.getElementById('modal-search-input');
    if (input) {
        input.value = '';
        input.focus();
        updateModalSearch('');
    }
};

window.switchModalTab = (tab, query) => {
    renderModalSearchResults(query, tab);
};

// ==================== 8. INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    console.log("🔧 Initializing Global Search System...");
    
    // Create modal on load
    createSearchModal();
    
    // Bind click events to search inputs
    const searchInputs = document.querySelectorAll('.search-container input, .search-box input, [data-search-trigger]');
    searchInputs.forEach(input => {
        input.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showSearchModal();
        });
    });
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearchModal();
        }
    });
    
    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        const modal = document.getElementById('global-search-modal');
        if (modal && e.target === modal) {
            closeSearchModal();
        }
    });
    
    console.log("✅ Global Search System Ready!");
});

// ==================== 9. EXPORT FUNCTIONS ====================

window.updateModalSearch = updateModalSearch;
window.switchModalTab = switchModalTab;
window.addToCartFromSearch = addToCartFromSearch;
window.goToRestaurantFromSearch = goToRestaurantFromSearch;
window.performGlobalSearch = performGlobalSearch;
window.getAllMenuItemsForSearch = getAllMenuItemsForSearch;