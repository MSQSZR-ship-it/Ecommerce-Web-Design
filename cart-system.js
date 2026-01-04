// ==================== UNIVERSAL CART SYSTEM ====================
// File: cart-system.js (Guna di SEMUA HTML pages)

const CART_STORAGE_KEY = 'D_GourMeals_Cart_v5'; // Updated version

// ==================== CART FUNCTIONS ====================

// 1. UNIVERSAL ADD TO CART FUNCTION
function universalAddToCart(productId, productName, productPrice, productImage) {
    console.log("🛒 Adding to cart:", productName);
    
    let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    
    // Check jika item sudah ada
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    
    // Save ke localStorage
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    
    // Update UI
    updateCartUIEverywhere();
    
    // Show notification
    showCartNotification(`${productName} added to cart!`);
    
    // Auto open cart sidebar (optional)
    setTimeout(() => {
        if (typeof openCart === 'function') openCart();
    }, 300);
}

// 2. UPDATE CART UI DI SEMUA TEMPAT
function updateCartUIEverywhere() {
    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // 1. Update SEMUA elemen .cart-count (Desktop & Sidebar)
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = totalQuantity;
        el.style.display = totalQuantity > 0 ? 'inline-block' : 'none';
    });
    
    // 2. Update Mobile Dot (Burger Menu)
    const mobileDot = document.getElementById('mobile-noti-dot');
    if (mobileDot) {
        mobileDot.style.display = totalQuantity > 0 ? 'block' : 'none';
    }

    // 3. Render Cart Sidebar/Page jika ada
    if (document.getElementById('cart-items-container')) {
        renderCartPage();
    }
}
// 3. RENDER CART PAGE WITH DELETE BUTTONS (UPDATED DESIGN)
function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    
    if (!container || !totalEl) return;
    
    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        totalEl.textContent = 'RM 0.00';
        return;
    }
    
    let total = 0;
    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'">
                <div style="flex:1">
                    <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 8px;">
                        <h4 style="margin:0; font-size:14px; color: var(--text-main);">${item.name}</h4>
                        <button class="cart-item-delete" onclick="showDeleteConfirm('${item.id}', '${item.name.replace(/'/g, "\\'")}')" 
                                title="Remove item">
                            <i class="fas fa-trash-alt" style="font-size: 14px;"></i>
                        </button>
                    </div>
                    <p style="margin:5px 0 12px 0; color: var(--text-gray); font-size: 13px;">
                        RM ${item.price.toFixed(2)} each
                    </p>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <button onclick="changeCartQty('${item.id}', -1)" class="qty-btn">-</button>
                        <span style="min-width:25px; text-align:center; font-weight:bold; color: var(--text-main);">${item.quantity}</span>
                        <button onclick="changeCartQty('${item.id}', 1)" class="qty-btn">+</button>
                        <span style="margin-left: auto; color: var(--second-color); font-weight: 800; font-size: 15px;">
                            RM ${itemTotal.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    totalEl.textContent = `RM ${total.toFixed(2)}`;
}

// 4. SHOW DELETE CONFIRMATION POPUP (NEW - DESIGN MATCH STYLE.CSS)
function showDeleteConfirm(itemId, itemName) {
    // Create custom confirmation popup
    const existingPopup = document.getElementById('delete-item-confirm');
    if (existingPopup) existingPopup.remove();
    
    const popup = document.createElement('div');
    popup.id = 'delete-item-confirm';
    popup.className = 'confirm-overlay';
    popup.style.display = 'flex';
    
    popup.innerHTML = `
        <div class="confirm-box">
            <div class="confirm-icon">
                <i class="fas fa-trash-alt"></i>
            </div>
            <h3>Remove Item?</h3>
            <p>Are you sure you want to remove "<strong>${itemName}</strong>" from your cart?</p>
            <div class="confirm-btns">
                <button id="delete-cancel" class="btn-no">Cancel</button>
                <button id="delete-confirm" class="btn-yes" data-id="${itemId}">Yes, Remove</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Add event listeners
    document.getElementById('delete-cancel').addEventListener('click', () => {
        popup.remove();
    });
    
    document.getElementById('delete-confirm').addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        removeCartItem(id);
        popup.remove();
    });
    
    // Close when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.remove();
        }
    });
}

// 5. REMOVE ITEM FUNCTION
function removeCartItem(itemId) {
    let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    cart = cart.filter(item => item.id !== itemId);
    
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartUIEverywhere();
    
    // Show notification with your style
    showCartNotification("Item removed from cart!");
}

// 6. CHANGE QUANTITY FUNCTION
function changeCartQty(itemId, delta) {
    let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += delta;
        
        if (cart[itemIndex].quantity <= 0) {
            // Show delete confirmation instead of browser confirm
            const itemName = cart[itemIndex].name;
            showDeleteConfirm(itemId, itemName);
            return;
        }
        
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        updateCartUIEverywhere();
    }
}

// 7. CLEAR CART FUNCTION
function clearCart() {
    // This will use your existing modal from style.css
    const modal = document.getElementById('custom-confirm');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// 8. CART NOTIFICATION (MATCH YOUR STYLE)
function showCartNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.cart-notification');
    if (existing) existing.remove();
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="color: var(--second-color);"></i>
        <span>${message}</span>
    `;
    
    // Add styles matching your design
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
        animation: slideIn 0.3s ease;
        font-weight: 600;
        border: 2px solid var(--main-color);
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 2 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.2s ease';
        setTimeout(() => notification.remove(), 200);
    }, 2000);
}

// 9. ADD CART STYLES (MINIMAL - ONLY WHAT'S NEEDED)
function addCartStyles() {
    if (document.getElementById('cart-system-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'cart-system-styles';
    style.textContent = `
        /* Delete Button Style */
        .cart-item-delete {
            background: none;
            border: none;
            color: #ef4444;
            cursor: pointer;
            padding: 6px 10px;
            border-radius: 8px;
            transition: all 0.2s;
            font-size: 14px;
        }
        
        .cart-item-delete:hover {
            background: #fee2e2;
        }
        
        /* Quantity Button Style */
        .qty-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid #e5e7eb;
            background: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
            color: var(--text-main);
            transition: all 0.2s;
        }
        
        .qty-btn:hover {
            background: var(--main-color);
            border-color: var(--second-color);
        }
        
        /* Notification Animations */
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        /* Delete Confirm Popup Custom */
        #delete-item-confirm .confirm-box {
            max-width: 400px;
        }
        
        #delete-item-confirm .confirm-icon {
            color: #ef4444;
        }
    `;
    
    document.head.appendChild(style);
}


// 10. INITIALIZE ON PAGE LOAD
document.addEventListener('DOMContentLoaded', function() {
    console.log("🔄 Cart System Initializing...");
    
    // Add minimal cart styles
    addCartStyles();
    
    // Update cart UI
    updateCartUIEverywhere();
    
    // Auto-setup cart buttons
    setupCartButtons();
    
    // Setup clear cart modal (using your existing modal)
    setupClearCartModal();
});

// 11. AUTO-SETUP CART BUTTONS
function setupCartButtons() {
    // Untuk buttons yang ada data attributes
    document.querySelectorAll('[data-cart-id]').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-cart-id');
            const name = this.getAttribute('data-cart-name');
            const price = parseFloat(this.getAttribute('data-cart-price'));
            const image = this.getAttribute('data-cart-image');
            
            universalAddToCart(id, name, price, image);
        });
    });
    
    // Untuk buttons yang guna onclick (backward compatibility)
    document.querySelectorAll('.btn-add-cart, .category-add-cart').forEach(button => {
        if (!button.hasAttribute('onclick') && !button.hasAttribute('data-cart-id')) {
            button.addEventListener('click', function() {
                const card = this.closest('.card, .category-card');
                if (card) {
                    const name = card.querySelector('h3')?.textContent || 'Item';
                    const priceText = card.querySelector('.price-tag, .category-price')?.textContent || 'RM 0.00';
                    const price = parseFloat(priceText.replace('RM', '').trim());
                    const img = card.querySelector('img')?.src || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400';
                    
                    const id = 'item_' + name.toLowerCase().replace(/\s+/g, '_');
                    universalAddToCart(id, name, price, img);
                }
            });
        }
    });
}

// 12. SETUP CLEAR CART MODAL (USING YOUR EXISTING MODAL)
function setupClearCartModal() {
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmCancel = document.getElementById('confirm-cancel');
    const modal = document.getElementById('custom-confirm');
    
    if (clearCartBtn && modal) {
        clearCartBtn.addEventListener('click', function() {
            const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
            if (cart.length > 0) {
                modal.style.display = 'flex';
            }
        });
    }
    
    if (confirmYes) {
        confirmYes.addEventListener('click', function() {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([]));
            updateCartUIEverywhere();
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
}
// TAMBAH KOD INI DI BARIS PALING AKHIR SEKALI DALAM cart-system.js
// GANTIKAN KOD DI BARIS AKHIR Sekali dalam cart-system.js
window.processCheckout = function() {
    // 1. Guna kunci v5 secara konsisten
    const cart = JSON.parse(localStorage.getItem('D_GourMeals_Cart_v5')) || [];
    
    // 2. Semak jika cart benar-benar kosong
    if (cart.length === 0) {
        alert("Cart kau kosong lagi tu, bah. Pilih makanan dulu.");
        return;
    }

    // 3. Logik Laluan Dinamik yang betul
    const currentPath = window.location.pathname;
    const isSubFolder = currentPath.includes('/MENU/') || currentPath.includes('/GERAI/');
    const pathPrefix = isSubFolder ? '../' : '';

    // 4. Pergi ke payment.html (Pastikan guna pathPrefix yang betul)
    console.log("Menuju ke Payment di: " + pathPrefix + 'A&C/payment.html');
    window.location.href = pathPrefix + 'A&C/payment.html'; 
};

// 13. EXPORT FUNCTIONS
window.universalAddToCart = universalAddToCart;
window.updateCartUIEverywhere = updateCartUIEverywhere;
window.changeCartQty = changeCartQty;
window.removeCartItem = removeCartItem;
window.clearCart = clearCart;
window.showDeleteConfirm = showDeleteConfirm;
