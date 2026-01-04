// ==================== GOURBOT AI v8 - ENHANCED RESPONSES ====================
// Design kekal dalam JavaScript, responses ditambah

console.log("🎨 GourBot AI v8 - Loading enhanced responses...");

// ==================== 1. DESIGN CONFIGURATION ====================

const chatDesign = {
    colors: {
        primary: '#10B981',       // Green
        secondary: '#FFA600',     // Orange  
        accent: '#3B82F6',        // Blue
        background: '#FFFFFF',
        userBg: '#10B981',
        botBg: '#F8FAFC',
        textDark: '#1F2937',
        textLight: '#6B7280',
        border: '#E5E7EB'
    },
    
    animations: {
        messageIn: 'messageSlideIn 0.3s ease',
        buttonIn: 'buttonPopIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fadeIn: 'fadeInUp 0.5s ease'
    },
    
    fonts: {
        primary: "'Inter', -apple-system, sans-serif",
        code: "'JetBrains Mono', monospace"
    }
};

// ==================== 2. ENHANCED QUICK BUTTONS DATABASE ====================

const quickButtons = {
    "afterGreeting": [
        { text: "💰 Price & Budget", icon: "fas fa-coins", query: "Berapa harga makanan?" },
        { text: "🍽️ Recommendations", icon: "fas fa-star", query: "Makanan apa yang sedap?" },
        { text: "🚚 Delivery Info", icon: "fas fa-shipping-fast", query: "Berapa lama delivery?" }
    ],
    
    "afterPriceQuery": [
        { text: "Budget Options", icon: "fas fa-wallet", query: "Menu bawah RM5 ada?" },
        { text: "Student Discount", icon: "fas fa-percentage", query: "Ada student discount?" },
        { text: "Compare Prices", icon: "fas fa-balance-scale", query: "Mahal ke makanan ni?" }
    ],
    
    "afterFoodQuery": [
        { text: "Breakfast", icon: "fas fa-sun", query: "Breakfast menu apa ada?" },
        { text: "Lunch/Dinner", icon: "fas fa-utensils", query: "Lunch menu apa best?" },
        { text: "Beverages", icon: "fas fa-glass-whiskey", query: "Minuman apa ada?" }
    ],
    
    "afterDeliveryQuery": [
        { text: "KK Alpha/Beta", icon: "fas fa-home", query: "KK Alpha sampai tak?" },
        { text: "Lecture Halls", icon: "fas fa-school", query: "Dewan kuliah sampai tak?" },
        { text: "Delivery Time", icon: "fas fa-clock", query: "Berapa lama sampai?" }
    ],
    
    // NEW: Added for more scenarios
    "afterBookingQuery": [
        { text: "Pre-order", icon: "fas fa-calendar-check", query: "Boleh pre-order?" },
        { text: "Group Order", icon: "fas fa-users", query: "Boleh order untuk group?" },
        { text: "Catering", icon: "fas fa-utensils", query: "Ada catering service?" }
    ],
    
    "afterRefundQuery": [
        { text: "Refund Policy", icon: "fas fa-undo-alt", query: "Apa refund policy?" },
        { text: "Cancel Order", icon: "fas fa-times-circle", query: "Boleh cancel order?" },
        { text: "Complaint", icon: "fas fa-exclamation-triangle", query: "Nak complain makanan?" }
    ],
    
    "afterGeneral": [
        { text: "Browse Menu", icon: "fas fa-utensils", action: "goToMenu" },
        { text: "View Cart", icon: "fas fa-shopping-cart", action: "openCart" },
        { text: "Student Help", icon: "fas fa-graduation-cap", query: "Student discount ada?" }
    ]
};

// ==================== 3. ENHANCED RESPONSE GENERATOR ====================

function generateBotResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    
    // Welcome responses
    if (msg.includes('hi') || msg.includes('hello') || msg.includes('hai') || msg.includes('hey')) {
        return {
            text: `👋 **Hello UMSKAL student!** Welcome to D GourMeals AI assistant. \n\nI can help you with:\n• 📋 **Menu browsing** & recommendations\n• 💰 **Price information** & student discounts\n• 🚚 **Delivery details** & campus locations\n• 🎓 **Student concerns** & special requests\n\nWhat would you like to know today? 😊`,
            type: 'greeting'
        };
    }
    
    // Price inquiries
    if (msg.includes('harga') || msg.includes('price') || msg.includes('berapa') || msg.includes('mahal') || msg.includes('murah')) {
        return {
            text: `💰 **PRICE INFORMATION:**\n\n🍽️ **Budget Range:** RM 1.50 - RM 5.00\n   (Roti Canai, Nasi Putih, Drinks)\n\n🎓 **Student Range:** RM 5.00 - RM 10.00\n   (Nasi Lemak, Mee Goreng, Ayam Goreng)\n\n🌟 **Premium Range:** RM 10.00 - RM 25.00\n   (Special dishes, Western food)\n\n💡 **Tip:** Most students spend RM 7-9 per meal with our 10% student discount!`,
            type: 'price'
        };
    }
    
    // Food recommendations
    if (msg.includes('sedap') || msg.includes('best') || msg.includes('recommend') || msg.includes('popular') || msg.includes('enak')) {
        return {
            text: `🍽️ **TOP RECOMMENDATIONS:**\n\n🥇 **Nasi Lemak Ayam Special** (RM 8.50)\n   ⭐ 4.9/5.0 | Gerai Kak Nab\n   _"Legendary sambal! Most ordered item on campus."_\n\n🥈 **Roti Canai + Teh Tarik Combo** (RM 3.50)\n   ⭐ 4.8/5.0 | A & A Mamak\n   _"Perfect breakfast combo. Teh Tarik is top-tier!"_\n\n🥉 **Ayam Bakar Madu** (RM 12.00)\n   ⭐ 4.9/5.0 | Ayam Bakar Special\n   _"Secret honey glaze recipe. Limited daily!"_`,
            type: 'recommendation'
        };
    }
    
    // Delivery inquiries
    if (msg.includes('deliver') || msg.includes('hantar') || msg.includes('sampai') || msg.includes('lama') || msg.includes('tempat')) {
        return {
            text: `🚚 **DELIVERY DETAILS:**\n\n⏱️ **Average Delivery Time:**\n• Residential Colleges: 15-25 minutes\n• Academic Areas: 25-35 minutes\n• Peak Hours: +10-15 minutes\n\n📍 **Delivery Locations:**\n✅ KK Alpha/Beta (FREE)\n✅ Faculty Buildings\n✅ Library Entrance\n✅ Student Center\n\n📱 **Real-time tracking** available after order!`,
            type: 'delivery'
        };
    }
    
    // Student discount
    if (msg.includes('student') || msg.includes('pelajar') || msg.includes('discount') || msg.includes('diskaun') || msg.includes('promo')) {
        return {
            text: `🎓 **STUDENT BENEFITS:**\n\n✅ **10% DISCOUNT** on all orders\n✅ **FREE Delivery** to residential colleges\n✅ **Priority Support** for academic issues\n✅ **Meal Combo Deals** available\n\n📋 **How to get discount:**\n1. Register with **.edu.my email**\n2. Verify student status\n3. Discount applies automatically\n4. Show student ID upon request\n\n💰 **Example:** Nasi Lemak RM 8.50 → **RM 7.65** with discount!`,
            type: 'student'
        };
    }
    
    // ========== NEW ENHANCED RESPONSES ==========
    
    // Refund inquiries
    if (msg.includes('refund') || msg.includes('pulang') || msg.includes('duit') || msg.includes('uang') || msg.includes('kembali')) {
        return {
            text: `🔄 **REFUND POLICY:**\n\n✅ **Eligible for Refund:**\n• Wrong order delivered\n• Food quality issues\n• Delivery over 60 minutes late\n• Cancelled before preparation\n\n❌ **Not Eligible:**\n• Changed your mind\n• Didn't like the taste\n• Forgot to collect order\n• Ordered wrong item\n\n📞 **Process:** Contact customer service within 2 hours`,
            type: 'refund'
        };
    }
    
    // Booking/Pre-order inquiries
    if (msg.includes('book') || msg.includes('booking') || msg.includes('tempah') || msg.includes('pre-order') || msg.includes('advance')) {
        return {
            text: `📅 **BOOKING & PRE-ORDER:**\n\n✅ **Pre-order Available:** Yes, up to 7 days in advance\n✅ **Group Orders:** Minimum 5 meals for discount\n✅ **Catering Services:** For events > 20 people\n\n⏰ **Cut-off Times:**\n• Breakfast: Order by 10 PM previous day\n• Lunch: Order by 10 AM same day\n• Dinner: Order by 4 PM same day\n\n📞 **Large orders:** WhatsApp +60 12-345 6789`,
            type: 'booking'
        };
    }
    
    // Location inquiries
    if (msg.includes('mana') || msg.includes('where') || msg.includes('tempat') || msg.includes('lokasi') || msg.includes('area')) {
        return {
            text: `📍 **WHERE WE DELIVER:**\n\n🏠 **RESIDENTIAL AREAS:**\n• KK Alpha & Beta (Priority)\n• KK Delta & Gamma\n• All kolej kediaman\n\n🏛️ **ACADEMIC BUILDINGS:**\n• Fakulti Perubatan\n• Fakulti Sains & Kesihatan\n• Perpustakaan\n• Dewan Kuliah\n• Student Center\n\n📌 **Not delivered to:** Staff quarters, off-campus`,
            type: 'location'
        };
    }
    
    // Operating hours
    if (msg.includes('jam') || msg.includes('time') || msg.includes('buka') || msg.includes('tutup') || msg.includes('operating')) {
        return {
            text: `⏰ **OPERATING HOURS:**\n\n🌅 **Breakfast:** 7:00 AM - 10:30 AM\n☀️ **Lunch:** 11:00 AM - 2:30 PM\n🌙 **Dinner:** 5:00 PM - 11:00 PM\n\n🚚 **Delivery Hours:**\n• Last order: 10:30 PM\n• Last delivery: 11:00 PM\n\n📅 **Weekend Special:** Open until 12:00 AM`,
            type: 'hours'
        };
    }
    
    // Menu inquiries
    if (msg.includes('menu') || msg.includes('list') || msg.includes('hidangan') || msg.includes('vegetarian') || msg.includes('vegan')) {
        return {
            text: `📋 **MENU CATEGORIES:**\n\n🍳 **Breakfast (7-10:30AM):**\n• Roti Canai varieties\n• Nasi Lemak\n• Mee Goreng\n• Toast & Eggs\n\n🍛 **Lunch/Dinner:**\n• Malay dishes\n• Chinese dishes\n• Western food\n• Vegetarian options\n\n🥤 **Beverages:**\n• Hot/Cold drinks\n• Fresh juices\n• Smoothies`,
            type: 'menu'
        };
    }
    
    // Contact inquiries
    if (msg.includes('contact') || msg.includes('customer') || msg.includes('help') || msg.includes('bantuan') || msg.includes('whatsapp')) {
        return {
            text: `📞 **CONTACT US:**\n\n💬 **Customer Service:**\n• WhatsApp: +60 12-345 6789\n• Email: support@gourmeals.edu.my\n• Telegram: @gourmeals_bot\n\n🏢 **Physical Office:**\nStudent Center, Block C\nUMSKAL Campus\n\n⏰ **Response Time:**\n• WhatsApp: <5 minutes\n• Email: <2 hours\n• Calls: 24/7 for urgent issues`,
            type: 'contact'
        };
    }
    
    // Payment inquiries
    if (msg.includes('payment') || msg.includes('bayar') || msg.includes('cara bayar') || msg.includes('method') || msg.includes('ewallet')) {
        return {
            text: `💳 **PAYMENT METHODS:**\n\n✅ **Accepted:**\n• Touch 'n Go eWallet\n• Boost\n• QR Pay (DuitNow)\n• Credit/Debit cards\n• Online banking\n\n❌ **Not Accepted:**\n• Cash on delivery\n• Cheque\n• Cryptocurrency\n\n🔒 **Secure Payment:** PCI-DSS compliant`,
            type: 'payment'
        };
    }
    
    // Thank you responses
    if (msg.includes('terima kasih') || msg.includes('thanks') || msg.includes('thank you') || msg.includes('tq')) {
        return {
            text: `🙏 **You're welcome!** Glad I could help!\n\nIf you have any more questions, don't hesitate to ask. Remember:\n✅ **Student discount:** 10% off\n✅ **Free delivery:** To residential colleges\n✅ **24/7 support:** Via WhatsApp\n\nEnjoy your meal! 😊🍽️`,
            type: 'thanks'
        };
    }
    
    // Default response
    return {
        text: `🤔 I can help you with various campus food queries! Try asking about:\n\n• **Prices:** "Berapa harga nasi lemak?"\n• **Recommendations:** "Apa makanan sedap?"\n• **Delivery:** "Berapa lama sampai KK Alpha?"\n• **Discounts:** "Ada student discount?"\n• **Hours:** "Jam berapa buka?"\n• **Menu:** "Apa menu vegetarian ada?"\n• **Booking:** "Boleh pre-order?"\n• **Refund:** "Apa refund policy?"\n\nOr use the quick buttons below for faster assistance! 😊`,
        type: 'general'
    };
}

// ==================== 4. BEAUTIFUL MESSAGE SYSTEM (SAMA) ====================

function createUserMessage(text) {
    return `
    <div class="message-wrapper user-message-wrapper">
        <div class="message-avatar user-avatar">👤</div>
        <div class="message-bubble user-bubble">
            <div class="message-text">${escapeHtml(text)}</div>
            <div class="message-time">${getFormattedTime()}</div>
        </div>
    </div>`;
}

function createBotMessage(text) {
    return `
    <div class="message-wrapper bot-message-wrapper">
        <div class="message-avatar bot-avatar">
            <div class="avatar-icon">🤖</div>
        </div>
        <div class="message-bubble bot-bubble">
            <div class="bot-header">
                <span class="bot-name">GourBot</span>
                <span class="bot-badge">AI Assistant</span>
            </div>
            <div class="message-text">${formatBotText(text)}</div>
            <div class="message-time">${getFormattedTime()}</div>
        </div>
    </div>`;
}

function createTypingIndicator() {
    return `
    <div class="typing-indicator-wrapper">
        <div class="message-avatar bot-avatar">
            <div class="avatar-icon">🤖</div>
        </div>
        <div class="typing-bubble">
            <div class="typing-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="typing-text">Thinking...</div>
        </div>
    </div>`;
}

function createQuickButtons(buttonType = "afterGeneral") {
    const buttons = quickButtons[buttonType] || quickButtons["afterGeneral"];
    
    return `
    <div class="quick-buttons-container">
        <div class="quick-buttons-title">💡 Quick options:</div>
        <div class="quick-buttons-grid">
            ${buttons.map(btn => {
                if (btn.action) {
                    return `<button class="quick-btn ${btn.icon.replace('fas fa-', '')}-btn" onclick="${btn.action}()">
                        <i class="${btn.icon}"></i>
                        <span>${btn.text}</span>
                    </button>`;
                } else {
                    return `<button class="quick-btn ${btn.icon.replace('fas fa-', '')}-btn" onclick="askQuickQuestion('${btn.query}')">
                        <i class="${btn.icon}"></i>
                        <span>${btn.text}</span>
                    </button>`;
                }
            }).join('')}
        </div>
    </div>`;
}

// ==================== 5. MESSAGE PROCESSING ====================

function addMessageToChat(text, type = 'user') {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;
    
    // Clear typing indicator if exists
    const typing = document.querySelector('.typing-indicator-wrapper');
    if (typing) typing.remove();
    
    // Add message
    if (type === 'user') {
        chatBox.innerHTML += createUserMessage(text);
        
        // Determine button type based on message
        const buttonType = determineButtonType(text);
        
        // Show typing indicator for bot response
        setTimeout(() => {
            chatBox.innerHTML += createTypingIndicator();
            chatBox.scrollTop = chatBox.scrollHeight;
            
            // Generate and show bot response
            setTimeout(() => {
                const typing = document.querySelector('.typing-indicator-wrapper');
                if (typing) typing.remove();
                
                const response = generateBotResponse(text);
                chatBox.innerHTML += createBotMessage(response.text);
                chatBox.scrollTop = chatBox.scrollHeight;
                
                // Add quick buttons after bot response
                setTimeout(() => {
                    chatBox.innerHTML += createQuickButtons(buttonType);
                    chatBox.scrollTop = chatBox.scrollHeight;
                }, 300);
                
            }, 800 + Math.random() * 600);
        }, 200);
    }
    
    chatBox.scrollTop = chatBox.scrollHeight;
}

function determineButtonType(userMessage) {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('harga') || msg.includes('price') || msg.includes('mahal') || msg.includes('murah')) {
        return 'afterPriceQuery';
    }
    
    if (msg.includes('makanan') || msg.includes('food') || msg.includes('sedap') || msg.includes('menu')) {
        return 'afterFoodQuery';
    }
    
    if (msg.includes('deliver') || msg.includes('hantar') || msg.includes('sampai') || msg.includes('lama')) {
        return 'afterDeliveryQuery';
    }
    
    // NEW: Added for new response types
    if (msg.includes('book') || msg.includes('booking') || msg.includes('tempah') || msg.includes('pre-order')) {
        return 'afterBookingQuery';
    }
    
    if (msg.includes('refund') || msg.includes('pulang') || msg.includes('duit') || msg.includes('cancel')) {
        return 'afterRefundQuery';
    }
    
    if (msg.includes('hi') || msg.includes('hello') || msg.includes('hai') || msg.length < 4) {
        return 'afterGreeting';
    }
    
    return 'afterGeneral';
}

// ==================== 6. QUICK ACTION FUNCTIONS ====================

function askQuickQuestion(question) {
    document.getElementById('user-query').value = question;
    handleChat();
}

function goToMenu() {
    window.location.href = '../index.html';
}

function openCart() {
    // Use existing cart function or create new
    if (typeof window.openCart === 'function') {
        window.openCart();
    } else {
        alert('Cart feature will be available on the main page!');
        window.location.href = '../index.html';
    }
}

function handleChat() {
    const input = document.getElementById('user-query');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessageToChat(message, 'user');
    
    // Clear input
    input.value = '';
    input.focus();
}

// ==================== 7. INITIALIZATION & STYLES (DESIGN KEKAL DALAM JS) ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🎨 GourBot AI v8 - Initializing enhanced chat...");
    
    // Add beautiful CSS (DESIGN KEKAL DALAM JAVASCRIPT)
    const style = document.createElement('style');
    style.textContent = `
        /* ========== CHAT CONTAINER ========== */
        #chat-box {
            height: 350px;
            overflow-y: auto;
            padding: 20px;
            background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
            border-radius: 20px;
            scroll-behavior: smooth;
        }
        
        /* Hide scrollbar but keep functionality */
        #chat-box::-webkit-scrollbar {
            width: 6px;
        }
        
        #chat-box::-webkit-scrollbar-track {
            background: #F1F5F9;
            border-radius: 10px;
        }
        
        #chat-box::-webkit-scrollbar-thumb {
            background: #CBD5E1;
            border-radius: 10px;
        }
        
        /* ========== MESSAGE WRAPPERS ========== */
        .message-wrapper {
            display: flex;
            margin-bottom: 20px;
            animation: ${chatDesign.animations.messageIn};
        }
        
        .user-message-wrapper {
            flex-direction: row-reverse;
        }
        
        /* ========== AVATARS ========== */
        .message-avatar {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            flex-shrink: 0;
            margin-top: 5px;
        }
        
        .user-avatar {
            background: ${chatDesign.colors.userBg};
            color: white;
            margin-left: 12px;
        }
        
        .bot-avatar {
            background: ${chatDesign.colors.secondary};
            color: white;
            margin-right: 12px;
            position: relative;
        }
        
        .avatar-icon {
            animation: bounce 2s infinite;
        }
        
        /* ========== MESSAGE BUBBLES ========== */
        .message-bubble {
            max-width: 75%;
            padding: 16px 20px;
            border-radius: 20px;
            position: relative;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        .user-bubble {
            background: ${chatDesign.colors.userBg};
            color: white;
            border-radius: 20px 20px 4px 20px;
            border: 2px solid rgba(255, 255, 255, 0.1);
        }
        
        .bot-bubble {
            background: ${chatDesign.colors.botBg};
            color: ${chatDesign.colors.textDark};
            border-radius: 4px 20px 20px 20px;
            border: 2px solid ${chatDesign.colors.border};
        }
        
        /* Bot header inside bubble */
        .bot-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .bot-name {
            font-weight: 800;
            color: ${chatDesign.colors.primary};
            font-size: 0.9rem;
        }
        
        .bot-badge {
            background: rgba(16, 185, 129, 0.1);
            color: ${chatDesign.colors.primary};
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.7rem;
            font-weight: 600;
        }
        
        /* ========== MESSAGE TEXT ========== */
        .message-text {
            line-height: 1.6;
            font-size: 0.95rem;
            white-space: pre-line;
        }
        
        .user-bubble .message-text {
            color: white;
        }
        
        .bot-bubble .message-text {
            color: ${chatDesign.colors.textDark};
        }
        
        .bot-bubble .message-text strong {
            color: ${chatDesign.colors.primary};
            font-weight: 700;
        }
        
        /* ========== MESSAGE TIME ========== */
        .message-time {
            font-size: 0.75rem;
            opacity: 0.7;
            margin-top: 8px;
            text-align: right;
        }
        
        .user-bubble .message-time {
            color: rgba(255, 255, 255, 0.8);
        }
        
        .bot-bubble .message-time {
            color: ${chatDesign.colors.textLight};
        }
        
        /* ========== TYPING INDICATOR ========== */
        .typing-indicator-wrapper {
            display: flex;
            margin-bottom: 20px;
            align-items: center;
        }
        
        .typing-bubble {
            background: ${chatDesign.colors.botBg};
            border: 2px solid ${chatDesign.colors.border};
            border-radius: 4px 20px 20px 20px;
            padding: 12px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .typing-dots {
            display: flex;
            gap: 4px;
        }
        
        .typing-dots .dot {
            width: 8px;
            height: 8px;
            background: ${chatDesign.colors.textLight};
            border-radius: 50%;
            animation: typingPulse 1.4s infinite;
        }
        
        .typing-dots .dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots .dot:nth-child(3) { animation-delay: 0.4s; }
        
        .typing-text {
            font-size: 0.85rem;
            color: ${chatDesign.colors.textLight};
            font-style: italic;
        }
        
        /* ========== QUICK BUTTONS ========== */
        .quick-buttons-container {
            margin: 25px 0;
            animation: ${chatDesign.animations.buttonIn};
        }
        
        .quick-buttons-title {
            font-size: 0.9rem;
            color: ${chatDesign.colors.textLight};
            margin-bottom: 15px;
            text-align: center;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .quick-buttons-title:before {
            content: "💡";
            font-size: 1rem;
        }
        
        .quick-buttons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
        }
        
        .quick-btn {
            background: white;
            border: 2px solid ${chatDesign.colors.border};
            border-radius: 15px;
            padding: 12px 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-family: inherit;
            font-size: 0.85rem;
            font-weight: 600;
            color: ${chatDesign.colors.textDark};
        }
        
        .quick-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }
        
        .quick-btn i {
            font-size: 1.3rem;
            margin-bottom: 4px;
        }
        
        /* Button color variations */
        .coins-btn { border-color: #F59E0B; color: #92400E; }
        .coins-btn:hover { background: #FEF3C7; }
        
        .star-btn { border-color: #EC4899; color: #9D174D; }
        .star-btn:hover { background: #FCE7F3; }
        
        .shipping-fast-btn { border-color: #3B82F6; color: #1E40AF; }
        .shipping-fast-btn:hover { background: #DBEAFE; }
        
        .wallet-btn { border-color: #10B981; color: #065F46; }
        .wallet-btn:hover { background: #D1FAE5; }
        
        .percentage-btn { border-color: #8B5CF6; color: #5B21B6; }
        .percentage-btn:hover { background: #EDE9FE; }
        
        .balance-scale-btn { border-color: #F97316; color: #9A3412; }
        .balance-scale-btn:hover { background: #FFEDD5; }
        
        .sun-btn { border-color: #FBBF24; color: #92400E; }
        .sun-btn:hover { background: #FEF3C7; }
        
        .utensils-btn { border-color: #10B981; color: #065F46; }
        .utensils-btn:hover { background: #D1FAE5; }
        
        .glass-whiskey-btn { border-color: #60A5FA; color: #1E40AF; }
        .glass-whiskey-btn:hover { background: #DBEAFE; }
        
        .home-btn { border-color: #8B5CF6; color: #5B21B6; }
        .home-btn:hover { background: #EDE9FE; }
        
        .school-btn { border-color: #14B8A6; color: #0F766E; }
        .school-btn:hover { background: #CCFBF1; }
        
        .clock-btn { border-color: #6366F1; color: #3730A3; }
        .clock-btn:hover { background: #E0E7FF; }
        
        .shopping-cart-btn { border-color: #EC4899; color: #9D174D; }
        .shopping-cart-btn:hover { background: #FCE7F3; }
        
        .graduation-cap-btn { border-color: #10B981; color: #065F46; }
        .graduation-cap-btn:hover { background: #D1FAE5; }
        
        /* NEW: Added for new buttons */
        .calendar-check-btn { border-color: #3B82F6; color: #1E40AF; }
        .calendar-check-btn:hover { background: #DBEAFE; }
        
        .users-btn { border-color: #8B5CF6; color: #5B21B6; }
        .users-btn:hover { background: #EDE9FE; }
        
        .undo-alt-btn { border-color: #EF4444; color: #991B1B; }
        .undo-alt-btn:hover { background: #FEE2E2; }
        
        .times-circle-btn { border-color: #DC2626; color: #7F1D1D; }
        .times-circle-btn:hover { background: #FEE2E2; }
        
        .exclamation-triangle-btn { border-color: #F59E0B; color: #92400E; }
        .exclamation-triangle-btn:hover { background: #FEF3C7; }
        
        /* ========== CHAT INPUT ========== */
        #user-query {
            width: 100%;
            padding: 16px 20px;
            border: 2px solid ${chatDesign.colors.border};
            border-radius: 15px;
            font-size: 1rem;
            transition: all 0.3s;
            background: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        #user-query:focus {
            outline: none;
            border-color: ${chatDesign.colors.primary};
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
        }
        
        #user-query::placeholder {
            color: ${chatDesign.colors.textLight};
        }
        
        /* ========== ANIMATIONS ========== */
        @keyframes messageSlideIn {
            from {
                opacity: 0;
                transform: translateY(15px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes buttonPopIn {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(10px);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }
        
        @keyframes typingPulse {
            0%, 60%, 100% { opacity: 0.4; }
            30% { opacity: 1; }
        }
        
        /* ========== RESPONSIVE ========== */
        @media (max-width: 768px) {
            #chat-box {
                height: 300px;
                padding: 15px;
            }
            
            .message-bubble {
                max-width: 85%;
            }
            
            .quick-buttons-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .quick-btn {
                padding: 10px 6px;
                font-size: 0.8rem;
            }
            
            .quick-btn i {
                font-size: 1.1rem;
            }
        }
        
        @media (max-width: 480px) {
            .quick-buttons-grid {
                grid-template-columns: 1fr;
            }
            
            .message-avatar {
                width: 35px;
                height: 35px;
                font-size: 1.1rem;
            }
            
            .bot-header {
                flex-direction: column;
                gap: 5px;
                align-items: flex-start;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize welcome message
    setTimeout(() => {
        const chatBox = document.getElementById('chat-box');
        if (chatBox && chatBox.children.length === 0) {
            // Add welcome message
            chatBox.innerHTML = createBotMessage(`👋 **Hello there!** I'm GourBot, your campus food assistant. \n\nI can help you with menu browsing, prices, delivery info, and student discounts. \n\nStart by saying hello or asking a question! 😊`);
            
            // Add initial quick buttons
            setTimeout(() => {
                chatBox.innerHTML += createQuickButtons('afterGreeting');
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 500);
        }
    }, 300);
    
    // Setup chat input
    const input = document.getElementById('user-query');
    if (input) {
        input.placeholder = "Type your message here...";
        
        // Enter key support
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleChat();
            }
        });
        
        // Auto-focus on desktop
        if (window.innerWidth > 768) {
            setTimeout(() => {
                input.focus();
            }, 1000);
        }
    }
});

// ==================== 8. UTILITY FUNCTIONS ====================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatBotText(text) {
    // Convert markdown-like syntax to HTML
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')
        .replace(/✅/g, '✅ ')
        .replace(/💰/g, '💰 ')
        .replace(/🍽️/g, '🍽️ ')
        .replace(/🚚/g, '🚚 ')
        .replace(/🎓/g, '🎓 ')
        .replace(/📋/g, '📋 ')
        .replace(/⏱️/g, '⏱️ ')
        .replace(/📍/g, '📍 ')
        .replace(/📱/g, '📱 ')
        .replace(/💡/g, '💡 ')
        .replace(/🔄/g, '🔄 ')
        .replace(/📅/g, '📅 ')
        .replace(/⏰/g, '⏰ ')
        .replace(/📞/g, '📞 ')
        .replace(/💳/g, '💳 ');
}

function getFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    }).toLowerCase();
}

// ==================== 9. EXPORT FUNCTIONS ====================

window.handleChat = handleChat;
window.askQuickQuestion = askQuickQuestion;
window.goToMenu = goToMenu;
window.openCart = openCart;
window.addMessageToChat = addMessageToChat;

console.log("✅ GourBot AI v8 - Enhanced responses ready with beautiful design!");