// Challenge Data
let challengeData = {
    selectedStore: null,
    selectedStoreName: '',
    selectedStoreType: '',
    startDate: null,
    days: [
        { day: 1, completed: false, amount: 0, date: '', verified: false },
        { day: 2, completed: false, amount: 0, date: '', verified: false },
        { day: 3, completed: false, amount: 0, date: '', verified: false },
        { day: 4, completed: false, amount: 0, date: '', verified: false },
        { day: 5, completed: false, amount: 0, date: '', verified: false },
        { day: 6, completed: false, amount: 0, date: '', verified: false },
        { day: 7, completed: false, amount: 0, date: '', verified: false }
    ],
    currentDay: 1,
    voucherCode: ''
};

// Store Information
const stores = {
    mcd: { name: "McDonald's", type: "Fast Food", icon: "fas fa-hamburger" },
    kfc: { name: "KFC", type: "Fast Food", icon: "fas fa-drumstick-bite" },
    starbucks: { name: "Starbucks", type: "Cafe & Coffee", icon: "fas fa-coffee" },
    subway: { name: "Subway", type: "Sandwich", icon: "fas fa-bread-slice" }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadChallengeData();
    initializeUploadArea();
    updateUI();
    
    // Check if there's already a selected store
    if (challengeData.selectedStore) {
        showStep2();
    }
});

// Load challenge data from localStorage
function loadChallengeData() {
    const savedData = localStorage.getItem('sevenDayChallenge');
    if (savedData) {
        challengeData = JSON.parse(savedData);
        
        // Convert string dates back to Date objects
        if (challengeData.startDate) {
            challengeData.startDate = new Date(challengeData.startDate);
        }
        
        // Calculate current day based on start date
        if (challengeData.startDate && !allDaysCompleted()) {
            calculateCurrentDay();
        }
    }
}

// Save challenge data to localStorage
function saveChallengeData() {
    localStorage.setItem('sevenDayChallenge', JSON.stringify(challengeData));
}

// Check if all days are completed
function allDaysCompleted() {
    return challengeData.days.every(day => day.completed);
}

// Calculate current day based on start date
function calculateCurrentDay() {
    if (!challengeData.startDate) return;
    
    const today = new Date();
    const startDate = new Date(challengeData.startDate);
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    // Only update if within 7 days
    if (diffDays >= 1 && diffDays <= 7) {
        challengeData.currentDay = diffDays;
    } else if (diffDays > 7) {
        challengeData.currentDay = 7;
    }
}

// Select a store for the challenge
function selectStore(storeId, storeName) {
    const store = stores[storeId];
    
    challengeData.selectedStore = storeId;
    challengeData.selectedStoreName = store.name;
    challengeData.selectedStoreType = store.type;
    
    // Update selected store display
    document.getElementById('selectedStoreIcon').className = store.icon;
    document.getElementById('selectedStoreName').textContent = store.name;
    document.getElementById('selectedStoreType').textContent = store.type;
    
    // Show selected store section
    document.getElementById('selectedStoreDisplay').style.display = 'block';
    
    // Save and update UI
    saveChallengeData();
    updateUI();
    
    // Show confirmation alert
    alert(`Anda memilih ${store.name} untuk challenge 7 hari!`);
}

// Change store selection
function changeStore() {
    if (confirm("Apakah Anda yakin ingin mengubah kedai? Progress challenge akan direset.")) {
        challengeData = {
            selectedStore: null,
            selectedStoreName: '',
            selectedStoreType: '',
            startDate: null,
            days: [
                { day: 1, completed: false, amount: 0, date: '', verified: false },
                { day: 2, completed: false, amount: 0, date: '', verified: false },
                { day: 3, completed: false, amount: 0, date: '', verified: false },
                { day: 4, completed: false, amount: 0, date: '', verified: false },
                { day: 5, completed: false, amount: 0, date: '', verified: false },
                { day: 6, completed: false, amount: 0, date: '', verified: false },
                { day: 7, completed: false, amount: 0, date: '', verified: false }
            ],
            currentDay: 1,
            voucherCode: ''
        };
        
        document.getElementById('selectedStoreDisplay').style.display = 'none';
        saveChallengeData();
        updateUI();
        showStep1();
    }
}

// Show step 1 (store selection)
function showStep1() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
}

// Show step 2 (challenge progress)
function showStep2() {
    if (!challengeData.selectedStore) {
        alert("Silakan pilih kedai terlebih dahulu!");
        return;
    }
    
    // If this is the first time showing step 2, set start date
    if (!challengeData.startDate) {
        challengeData.startDate = new Date();
    }
    
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('step3').style.display = 'none';
    
    saveChallengeData();
    updateUI();
}

// Show step 3 (reward claim)
function showStep3() {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
    
    // Generate voucher code if not already generated
    if (!challengeData.voucherCode) {
        generateVoucherCode();
    }
    
    updateRewardClaim();
}

// Update all UI elements
function updateUI() {
    updateStoreInfo();
    updateProgressStats();
    updateDaysDisplay();
    updateRewardProgress();
    updateVerificationButton();
}

// Update store information in step 2
function updateStoreInfo() {
    if (challengeData.selectedStore) {
        document.getElementById('currentStoreName').textContent = challengeData.selectedStoreName;
        
        if (challengeData.startDate) {
            const startDate = new Date(challengeData.startDate);
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 6);
            
            const formatDate = (date) => {
                return date.toLocaleDateString('id-ID', { 
                    day: 'numeric', 
                    month: 'long',
                    year: 'numeric'
                });
            };
            
            document.getElementById('challengeStartDate').textContent = formatDate(startDate);
            document.getElementById('challengeEndDate').textContent = formatDate(endDate);
        }
    }
}

// Update progress statistics
function updateProgressStats() {
    const completedDays = challengeData.days.filter(day => day.completed).length;
    const remainingDays = 7 - completedDays;
    
    document.getElementById('daysCompleted').textContent = completedDays;
    document.getElementById('daysRemaining').textContent = remainingDays;
}

// Update the 7 days display
function updateDaysDisplay() {
    const daysContainer = document.querySelector('.days-container');
    daysContainer.innerHTML = '';
    
    challengeData.days.forEach((day, index) => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        
        // Determine card status
        if (day.completed) {
            dayCard.classList.add('completed');
        } else if (index + 1 === challengeData.currentDay) {
            dayCard.classList.add('active');
        } else if (index + 1 < challengeData.currentDay) {
            dayCard.classList.add('completed');
        } else {
            dayCard.classList.add('future');
        }
        
        // Calculate date for this day
        let dateStr = '';
        if (challengeData.startDate) {
            const dayDate = new Date(challengeData.startDate);
            dayDate.setDate(dayDate.getDate() + index);
            dateStr = dayDate.toLocaleDateString('id-ID', { 
                day: 'numeric', 
                month: 'short'
            });
        }
        
        // Status text
        let statusText = 'Belum Dimulai';
        let statusClass = 'status-future';
        
        if (day.completed) {
            statusText = 'Selesai';
            statusClass = 'status-completed';
        } else if (index + 1 === challengeData.currentDay) {
            statusText = 'Hari Ini';
            statusClass = 'status-pending';
        } else if (index + 1 < challengeData.currentDay) {
            statusText = 'Tidak Selesai';
            statusClass = 'status-pending';
        }
        
        dayCard.innerHTML = `
            <div class="day-number">${day.day}</div>
            <div class="day-status ${statusClass}">${statusText}</div>
            <div class="day-amount">${day.amount > 0 ? 'RM ' + day.amount.toFixed(2) : '-'}</div>
            <div class="day-date">${dateStr}</div>
        `;
        
        daysContainer.appendChild(dayCard);
    });
}

// Update reward progress bar
function updateRewardProgress() {
    const completedDays = challengeData.days.filter(day => day.completed).length;
    const progressPercent = (completedDays / 7) * 100;
    
    document.getElementById('rewardProgressFill').style.width = `${progressPercent}%`;
    document.getElementById('progressText').textContent = `${completedDays}/7 hari selesai`;
    
    let rewardMessage = '';
    if (completedDays === 0) {
        rewardMessage = 'Mulai challenge untuk mendapatkan voucher RM10!';
    } else if (completedDays < 7) {
        rewardMessage = `Lanjutkan! ${7 - completedDays} hari lagi untuk dapat voucher!`;
    } else {
        rewardMessage = 'Selamat! Anda berhak mendapatkan voucher RM10!';
        // Automatically show step 3 when all days are completed
        setTimeout(() => showStep3(), 500);
    }
    
    document.getElementById('rewardMessage').textContent = rewardMessage;
    
    // Check if all days are completed
    if (allDaysCompleted()) {
        showStep3();
    }
}

// Update verification button state
function updateVerificationButton() {
    const verifyBtn = document.getElementById('verifyBtn');
    const amountInput = document.getElementById('purchaseAmount');
    const uploadArea = document.getElementById('uploadArea');
    
    // Check if current day is already completed
    const currentDayData = challengeData.days[challengeData.currentDay - 1];
    if (currentDayData.completed) {
        verifyBtn.disabled = true;
        verifyBtn.innerHTML = '<i class="fas fa-check-circle"></i> Hari Ini Sudah Diverifikasi';
        verifyBtn.style.background = '#95a5a6';
        return;
    }
    
    // Enable button if amount is valid
    const amount = parseFloat(amountInput.value);
    verifyBtn.disabled = !amount || amount < 3;
    
    // Check if file is uploaded (simulated)
    const isFileUploaded = uploadArea.classList.contains('uploaded');
    verifyBtn.disabled = verifyBtn.disabled || !isFileUploaded;
}

// Initialize upload area
function initializeUploadArea() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('receiptUpload');
    const amountInput = document.getElementById('purchaseAmount');
    
    // Click on upload area triggers file input
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    // File input change
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            const fileName = e.target.files[0].name;
            uploadArea.innerHTML = `
                <i class="fas fa-file-invoice"></i>
                <p>${fileName}</p>
                <small>File receipt berhasil diupload</small>
            `;
            uploadArea.classList.add('uploaded');
            uploadArea.style.borderColor = '#2ecc71';
            updateVerificationButton();
        }
    });
    
    // Amount input change
    amountInput.addEventListener('input', updateVerificationButton);
}

// Verify today's purchase
function verifyPurchase() {
    const amountInput = document.getElementById('purchaseAmount');
    const amount = parseFloat(amountInput.value);
    
    // Validate amount
    if (!amount || amount < 3) {
        alert('Minimum pembelian adalah RM3.00');
        return;
    }
    
    // Get current day data
    const currentDayIndex = challengeData.currentDay - 1;
    const currentDayData = challengeData.days[currentDayIndex];
    
    // Check if already verified
    if (currentDayData.completed) {
        alert('Hari ini sudah diverifikasi!');
        return;
    }
    
    // Mark day as completed
    currentDayData.completed = true;
    currentDayData.amount = amount;
    currentDayData.date = new Date().toISOString();
    currentDayData.verified = true;
    
    // Move to next day if not the last day
    if (challengeData.currentDay < 7) {
        challengeData.currentDay++;
    }
    
    // Reset form
    document.getElementById('uploadArea').innerHTML = `
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Klik untuk upload receipt pembelian</p>
        <small>Format: JPG, PNG, PDF (Max 5MB)</small>
    `;
    document.getElementById('uploadArea').classList.remove('uploaded');
    document.getElementById('uploadArea').style.borderColor = '#3498db';
    document.getElementById('purchaseAmount').value = '';
    
    // Save and update UI
    saveChallengeData();
    updateUI();
    
    // Show success message
    alert(`Pembelian hari ke-${currentDayData.day} sebesar RM${amount.toFixed(2)} berhasil diverifikasi!`);
    
    // If all days completed, show reward
    if (allDaysCompleted()) {
        setTimeout(() => {
            alert('Selamat! Anda telah menyelesaikan 7 Hari Challenge!');
        }, 1000);
    }
}

// Generate voucher code
function generateVoucherCode() {
    const prefix = '7DAY';
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const randomAlpha = Math.random().toString(36).substring(2, 6).toUpperCase();
    challengeData.voucherCode = `${prefix}-${randomNum}-${randomAlpha}`;
    saveChallengeData();
}

// Update reward claim section
function updateRewardClaim() {
    document.getElementById('completedStoreName').textContent = challengeData.selectedStoreName;
    document.getElementById('voucherCode').textContent = challengeData.voucherCode;
    document.getElementById('voucherStore').textContent = challengeData.selectedStoreName;
    
    // Set expiry date (30 days from completion)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    document.getElementById('voucherExpiry').textContent = expiryDate.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Copy voucher code to clipboard
function copyVoucherCode() {
    navigator.clipboard.writeText(challengeData.voucherCode)
        .then(() => {
            alert('Kode voucher berhasil disalin!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Gagal menyalin kode voucher');
        });
}

// Claim voucher (download)
function claimVoucher() {
    // Create a simple voucher image/text to download
    const voucherContent = `
        VOUCHER MAKANAN RM10
        =====================
        
        Kode: ${challengeData.voucherCode}
        Nilai: RM10.00
        Berlaku di: ${challengeData.selectedStoreName}
        Berlaku hingga: ${document.getElementById('voucherExpiry').textContent}
        
        Syarat:
        - Minimum pembelian RM15
        - Tidak dapat digabung dengan promo lain
        - Satu voucher per transaksi
        
        Terima kasih telah mengikuti 7 Hari Challenge!
    `;
    
    const blob = new Blob([voucherContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Voucher-RM10-${challengeData.voucherCode}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Voucher berhasil didownload!');
}

// Share voucher to social media
function shareVoucher() {
    const shareText = `Saya baru saja menyelesaikan 7 Hari Challenge dan mendapatkan voucher RM10 dari ${challengeData.selectedStoreName}! Kode voucher: ${challengeData.voucherCode}`;
    
    if (navigator.share) {
        navigator.share({
            title: '7 Hari Challenge Berhasil!',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText)
            .then(() => {
                alert('Teks berhasil disalin! Bagikan ke media sosial Anda.');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }
}

// Restart challenge
function restartChallenge() {
    if (confirm("Apakah Anda yakin ingin memulai challenge baru? Data challenge saat ini akan direset.")) {
        challengeData = {
            selectedStore: null,
            selectedStoreName: '',
            selectedStoreType: '',
            startDate: null,
            days: [
                { day: 1, completed: false, amount: 0, date: '', verified: false },
                { day: 2, completed: false, amount: 0, date: '', verified: false },
                { day: 3, completed: false, amount: 0, date: '', verified: false },
                { day: 4, completed: false, amount: 0, date: '', verified: false },
                { day: 5, completed: false, amount: 0, date: '', verified: false },
                { day: 6, completed: false, amount: 0, date: '', verified: false },
                { day: 7, completed: false, amount: 0, date: '', verified: false }
            ],
            currentDay: 1,
            voucherCode: ''
        };
        
        localStorage.removeItem('sevenDayChallenge');
        showStep1();
        updateUI();
        alert('Challenge baru siap dimulai! Pilih kedai untuk memulai.');
    }
}