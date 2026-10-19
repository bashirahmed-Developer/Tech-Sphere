/**
 * TechSphere - Interactive Store Application
 * State Management, Filtering, Cart Drawer, COD Checkout, and Micro-interactions.
 */

// ================= State Management =================
const AppState = {
  products: TECH_PRODUCTS || [],
  cart: JSON.parse(localStorage.getItem('techsphere_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('techsphere_wishlist') || '[]'),
  currentCategory: 'all',
  searchQuery: '',
  maxPrice: 1050000,
  sortBy: 'featured',
  activeCoupon: null,
  heroIndex: 0
};

// ================= Utility Functions =================
function formatPKR(amount) {
  return 'Rs. ' + Math.round(amount).toLocaleString('en-PK');
}

function saveCartToStorage() {
  localStorage.setItem('techsphere_cart', JSON.stringify(AppState.cart));
}

function saveWishlistToStorage() {
  localStorage.setItem('techsphere_wishlist', JSON.stringify(AppState.wishlist));
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ================= Flash Countdown Timer =================
function initFlashCountdown() {
  let targetTime = new Date().getTime() + (4 * 3600 + 36 * 60 + 18) * 1000;

  setInterval(() => {
    const now = new Date().getTime();
    const distance = Math.max(0, targetTime - now);

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const cdH = document.getElementById('cdHours');
    const cdM = document.getElementById('cdMinutes');
    const cdS = document.getElementById('cdSeconds');

    if (cdH) cdH.textContent = String(hours).padStart(2, '0');
    if (cdM) cdM.textContent = String(minutes).padStart(2, '0');
    if (cdS) cdS.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

// ================= Hero Showcase Rotation =================
const HERO_ITEMS = [
  {
    id: "ts-lap-01",
    badge: "Bestseller",
    badgeIcon: "fa-fire",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: "384 Reviews",
    title: "Apple MacBook Pro 16\" (M3 Max)",
    specs: ["M3 Max 16-Core", "36GB RAM", "1TB SSD"],
    price: 945000,
    oldPrice: 1050000
  },
  {
    id: "ts-lap-02",
    badge: "Esports Rig",
    badgeIcon: "fa-gamepad",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviews: "219 Reviews",
    title: "ASUS ROG Zephyrus G16 OLED (2024)",
    specs: ["Core Ultra 9", "RTX 4080 12GB", "240Hz OLED"],
    price: 685000,
    oldPrice: 750000
  },
  {
    id: "ts-phn-01",
    badge: "Flagship Phone",
    badgeIcon: "fa-mobile-screen",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: "512 Reviews",
    title: "Apple iPhone 16 Pro Max (512GB)",
    specs: ["A18 Pro Chip", "48MP Fusion", "6.9\" 120Hz"],
    price: 525000,
    oldPrice: 565000
  },
  {
    id: "ts-aud-01",
    badge: "#1 ANC Headphone",
    badgeIcon: "fa-headphones",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    reviews: "820 Reviews",
    title: "Sony WH-1000XM5 Wireless ANC",
    specs: ["Dual Processor V1", "30Hr Battery", "LDAC Hi-Res"],
    price: 115000,
    oldPrice: 135000
  }
];

function updateHeroShowcase(index) {
  AppState.heroIndex = index;
  const item = HERO_ITEMS[index];
  if (!item) return;

  const heroBadge = document.getElementById('heroBadge');
  const heroImage = document.getElementById('heroImage');
  const heroRating = document.getElementById('heroRating');
  const heroTitle = document.getElementById('heroTitle');
  const heroSpecsPills = document.getElementById('heroSpecsPills');
  const heroPrice = document.getElementById('heroPrice');
  const heroOldPrice = document.getElementById('heroOldPrice');
  const heroBuyBtn = document.getElementById('heroBuyBtn');

  if (heroBadge) heroBadge.innerHTML = `<i class="fa-solid ${item.badgeIcon}"></i> ${item.badge}`;
  if (heroImage) {
    heroImage.style.opacity = '0';
    setTimeout(() => {
      heroImage.src = item.image;
      heroImage.style.opacity = '1';
    }, 150);
  }
  if (heroRating) heroRating.textContent = item.rating;
  if (heroTitle) heroTitle.textContent = item.title;
  if (heroSpecsPills) {
    heroSpecsPills.innerHTML = item.specs.map(s => `<span class="spec-pill">${s}</span>`).join('');
  }
  if (heroPrice) heroPrice.textContent = formatPKR(item.price);
  if (heroOldPrice) heroOldPrice.textContent = formatPKR(item.oldPrice);

  if (heroBuyBtn) {
    heroBuyBtn.onclick = () => {
      addToCart(item.id);
      showToast(`Added ${item.title} to cart!`, 'success');
    };
  }

  // Update dots
  document.querySelectorAll('.showcase-dots .s-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function initHeroRotation() {
  updateHeroShowcase(0);

  document.querySelectorAll('.showcase-dots .s-dot').forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index, 10);
      updateHeroShowcase(idx);
    });
  });

  // Auto rotate every 6 seconds
  setInterval(() => {
    const nextIdx = (AppState.heroIndex + 1) % HERO_ITEMS.length;
    updateHeroShowcase(nextIdx);
  }, 6500);
}

// ================= Product Catalog Rendering =================
function filterAndSortProducts() {
  return AppState.products.filter(p => {
    // Category filter
    const matchesCategory = AppState.currentCategory === 'all' || p.category === AppState.currentCategory;

    // Search query filter
    const q = AppState.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      p.name.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) || 
      p.categoryLabel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);

    // Price filter
    const matchesPrice = p.price <= AppState.maxPrice;

    return matchesCategory && matchesSearch && matchesPrice;
  }).sort((a, b) => {
    if (AppState.sortBy === 'price-asc') return a.price - b.price;
    if (AppState.sortBy === 'price-desc') return b.price - a.price;
    if (AppState.sortBy === 'rating') return b.rating - a.rating;
    if (AppState.sortBy === 'discount') {
      const discA = parseInt(a.discount) || 0;
      const discB = parseInt(b.discount) || 0;
      return discB - discA;
    }
    return 0; // 'featured' keeps original ordering
  });
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const displayedCount = document.getElementById('displayedProductsCount');
  const totalCount = document.getElementById('totalProductsCount');

  if (!grid) return;

  const filtered = filterAndSortProducts();

  if (displayedCount) displayedCount.textContent = filtered.length;
  if (totalCount) totalCount.textContent = AppState.products.length;

  if (filtered.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);
    const specsArray = Object.values(product.specs || {}).slice(0, 3);

    return `
      <div class="product-card" data-id="${product.id}">
        
        <!-- Media & Badges -->
        <div class="card-media">
          <div class="card-badges">
            <span class="badge-tag brand-chip">${product.brand}</span>
            <span class="badge-tag bestseller">${product.badge || 'Flagship'}</span>
            ${product.discount ? `<span class="badge-tag discount">${product.discount}</span>` : ''}
          </div>

          <!-- Wishlist Toggle -->
          <button class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  aria-label="Save to Wishlist" 
                  title="Save to Wishlist">
            <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
          </button>

          <!-- Product Image -->
          <img src="${product.image}" 
               alt="${product.name}" 
               class="product-img" 
               loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'">

          <!-- Hover Quick Action Overlay -->
          <div class="card-hover-actions">
            <button class="quick-action-btn" onclick="openQuickView('${product.id}')">
              <i class="fa-solid fa-eye"></i> Quick View
            </button>
          </div>
        </div>

        <!-- Card Body -->
        <div class="card-body">
          
          <div class="card-rating-row">
            <div class="stars-wrap">
              <i class="fa-solid fa-star"></i>
              <span class="stars-score">${product.rating}</span>
              <span class="reviews-count">(${product.reviewsCount})</span>
            </div>
            <div class="stock-indicator ${product.stock <= 5 ? 'low' : ''}">
              <span class="stock-dot"></span>
              <span>${product.stock <= 5 ? `Only ${product.stock} Left` : 'In Stock (COD)'}</span>
            </div>
          </div>

          <h3 class="product-title" title="${product.name}">${product.name}</h3>

          <!-- Specs Chips -->
          <div class="card-specs-row">
            ${specsArray.map(spec => `<span class="card-spec-chip">${spec}</span>`).join('')}
          </div>

          <!-- Price Section -->
          <div class="card-price-section">
            <div class="price-main">
              <span class="price-pkr">${formatPKR(product.price)}</span>
              ${product.originalPrice ? `<span class="price-original">${formatPKR(product.originalPrice)}</span>` : ''}
            </div>
            <span class="cod-perk-pill">
              <i class="fa-solid fa-truck-fast"></i> Free COD
            </span>
          </div>

          <!-- Add to Cart Button -->
          <button class="card-add-cart-btn" id="addBtn_${product.id}" onclick="handleAddToCartClick('${product.id}')">
            <i class="fa-solid fa-cart-plus"></i>
            <span>Add to Cart (COD)</span>
          </button>

        </div>

      </div>
    `;
  }).join('');
}

// ================= Wishlist Logic =================
function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  const product = AppState.products.find(p => p.id === productId);

  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast(`Removed ${product ? product.name : 'item'} from wishlist`, 'info');
  } else {
    AppState.wishlist.push(productId);
    showToast(`Added ${product ? product.name : 'item'} to wishlist! ❤️`, 'success');
  }

  saveWishlistToStorage();
  updateCounters();
  renderProducts();
}

// ================= Cart Drawer Logic =================
function addToCart(productId, qty = 1) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      quantity: qty
    });
  }

  saveCartToStorage();
  updateCounters();
  renderCartDrawer();
}

function handleAddToCartClick(productId) {
  addToCart(productId, 1);
  const btn = document.getElementById(`addBtn_${productId}`);
  const product = AppState.products.find(p => p.id === productId);

  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Added ✓</span>';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i> <span>Add to Cart (COD)</span>';
    }, 1800);
  }

  showToast(`Added ${product ? product.name : 'item'} to your cart!`, 'success');
}

function updateCartItemQty(productId, change) {
  const item = AppState.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    AppState.cart = AppState.cart.filter(i => i.id !== productId);
    showToast('Item removed from cart', 'info');
  }

  saveCartToStorage();
  updateCounters();
  renderCartDrawer();
}

function removeCartItem(productId) {
  AppState.cart = AppState.cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCounters();
  renderCartDrawer();
  showToast('Item removed from cart', 'info');
}

function renderCartDrawer() {
  const list = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscount');
  const totalEl = document.getElementById('cartTotal');
  const drawerCount = document.getElementById('cartDrawerCount');

  if (!list) return;

  const totalItems = AppState.cart.reduce((sum, i) => sum + i.quantity, 0);
  if (drawerCount) drawerCount.textContent = `${totalItems} items`;

  if (AppState.cart.length === 0) {
    list.innerHTML = `
      <div class="cart-empty-view">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your Cart is Empty</h4>
        <p class="text-muted">Explore our flagship electronics and add products via Cash on Delivery!</p>
        <button class="btn btn-primary btn-sm" onclick="closeCart(); document.getElementById('catalogSection').scrollIntoView({behavior:'smooth'});" style="margin-top: 1rem;">
          Browse Electronics
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPKR(0);
    if (discountRow) discountRow.style.display = 'none';
    if (totalEl) totalEl.textContent = formatPKR(0);
    return;
  }

  list.innerHTML = AppState.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span class="cart-item-price">${formatPKR(item.price)}</span>
        <div class="cart-qty-controls">
          <button class="qty-btn" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease quantity">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase quantity">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}')" aria-label="Remove item" title="Remove">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  // Calculations
  const subtotal = AppState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  let discountAmount = 0;

  if (AppState.activeCoupon) {
    discountAmount = Math.round((subtotal * AppState.activeCoupon.discountPercent) / 100);
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  if (subtotalEl) subtotalEl.textContent = formatPKR(subtotal);

  if (discountRow) {
    if (discountAmount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-${formatPKR(discountAmount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (totalEl) totalEl.textContent = formatPKR(finalTotal);
}

function updateCounters() {
  const cartTotalItems = AppState.cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartBadge = document.getElementById('cartCount');
  if (cartBadge) cartBadge.textContent = cartTotalItems;

  const wishBadge = document.getElementById('wishlistCount');
  if (wishBadge) wishBadge.textContent = AppState.wishlist.length;
}

// Drawer Open / Close
function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  renderCartDrawer();
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

// Coupon Handling
function applyCouponCode(code) {
  const cleanCode = code.toUpperCase().trim();
  const feedback = document.getElementById('couponFeedback');
  const couponData = PROMO_COUPONS[cleanCode];

  if (!couponData) {
    if (feedback) {
      feedback.className = 'coupon-feedback error';
      feedback.textContent = 'Invalid promo coupon. Try TECH10 or COD5.';
    }
    return;
  }

  const subtotal = AppState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  if (subtotal < couponData.minOrder) {
    if (feedback) {
      feedback.className = 'coupon-feedback error';
      feedback.textContent = `Coupon requires minimum order of ${formatPKR(couponData.minOrder)}`;
    }
    return;
  }

  AppState.activeCoupon = couponData;
  if (feedback) {
    feedback.className = 'coupon-feedback success';
    feedback.textContent = `✓ '${cleanCode}' applied: ${couponData.discountPercent}% Discount!`;
  }

  renderCartDrawer();
  showToast(`Promo coupon ${cleanCode} activated! 🎉`, 'success');
}

// ================= Quick View Modal =================
function openQuickView(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('quickViewContent');
  const modal = document.getElementById('quickViewModal');

  if (!content || !modal) return;

  const specsRows = Object.entries(product.specs || {}).map(([key, val]) => `
    <tr>
      <td>${key.charAt(0).toUpperCase() + key.slice(1)}</td>
      <td>${val}</td>
    </tr>
  `).join('');

  content.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-image-wrap">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div>
        <div class="hero-chip" style="margin-bottom: 0.5rem;">
          <i class="fa-solid fa-microchip"></i> ${product.brand} • ${product.categoryLabel}
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${product.name}</h2>
        
        <div class="card-rating-row" style="margin-bottom: 1rem;">
          <div class="stars-wrap">
            <i class="fa-solid fa-star"></i>
            <span class="stars-score">${product.rating}</span>
            <span class="reviews-count">(${product.reviewsCount} verified reviews)</span>
          </div>
          <span class="stock-indicator">● In Stock (Free Cash on Delivery)</span>
        </div>

        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.25rem; line-height: 1.6;">
          ${product.description}
        </p>

        <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem;">Key Specifications:</h4>
        <table class="quickview-specs-table">
          <tbody>${specsRows}</tbody>
        </table>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-light);">
          <div>
            <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--color-cyan);">
              ${formatPKR(product.price)}
            </div>
            ${product.originalPrice ? `<span style="color: var(--text-muted); text-decoration: line-through; font-size: 0.85rem;">${formatPKR(product.originalPrice)}</span>` : ''}
          </div>
          <button class="btn btn-primary" onclick="addToCart('${product.id}', 1); closeQuickView(); showToast('Added to Cart!', 'success');">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart (COD)
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('open');
}

// ================= Cash on Delivery Checkout Flow =================
function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast('Your cart is empty! Add gadgets before checking out.', 'info');
    return;
  }

  closeCart();
  const modal = document.getElementById('checkoutModal');
  const formStep = document.getElementById('checkoutFormStep');
  const successStep = document.getElementById('checkoutSuccessStep');
  const itemsCount = document.getElementById('modalOrderItemsCount');
  const totalAmount = document.getElementById('modalOrderTotal');

  if (formStep) formStep.style.display = 'block';
  if (successStep) successStep.style.display = 'none';

  const totalItems = AppState.cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = AppState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  let discount = 0;
  if (AppState.activeCoupon) {
    discount = Math.round((subtotal * AppState.activeCoupon.discountPercent) / 100);
  }
  const finalPayable = Math.max(0, subtotal - discount);

  if (itemsCount) itemsCount.textContent = totalItems;
  if (totalAmount) totalAmount.textContent = formatPKR(finalPayable);

  if (modal) modal.classList.add('open');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('open');
}

function handleCODOrderSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('orderFullName');
  const phoneInput = document.getElementById('orderPhone');
  const cityInput = document.getElementById('orderCity');
  const addressInput = document.getElementById('orderAddress');

  const fullName = nameInput ? nameInput.value.trim() : 'Valued Customer';
  const city = cityInput ? cityInput.value : 'Pakistan';

  // Calculate final order details
  const subtotal = AppState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  let discount = 0;
  if (AppState.activeCoupon) {
    discount = Math.round((subtotal * AppState.activeCoupon.discountPercent) / 100);
  }
  const finalTotal = Math.max(0, subtotal - discount);
  const randomId = '#TS-' + Math.floor(10000 + Math.random() * 90000);

  // Populate receipt
  const receiptId = document.getElementById('receiptOrderId');
  const receiptName = document.getElementById('receiptCustomerName');
  const receiptCity = document.getElementById('receiptCity');
  const receiptTotal = document.getElementById('receiptTotalAmount');

  if (receiptId) receiptId.textContent = randomId;
  if (receiptName) receiptName.textContent = fullName;
  if (receiptCity) receiptCity.textContent = city + ', Pakistan';
  if (receiptTotal) receiptTotal.textContent = formatPKR(finalTotal);

  // Trigger celebration confetti
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Switch to success step
  const formStep = document.getElementById('checkoutFormStep');
  const successStep = document.getElementById('checkoutSuccessStep');
  if (formStep) formStep.style.display = 'none';
  if (successStep) successStep.style.display = 'block';

  // Clear cart
  AppState.cart = [];
  AppState.activeCoupon = null;
  saveCartToStorage();
  updateCounters();
  renderCartDrawer();

  showToast('Order confirmed via Cash on Delivery! 📦', 'success');
}

// ================= Theme Switcher =================
function initTheme() {
  const savedTheme = localStorage.getItem('techsphere_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('techsphere_theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// ================= Event Listeners Initialization =================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme
  initTheme();

  // 2. Countdown & Hero rotation
  initFlashCountdown();
  initHeroRotation();

  // 3. Render Initial State
  updateCounters();
  renderProducts();

  // 4. Cart triggers
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');
  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  // 5. Checkout triggers
  const proceedBtn = document.getElementById('proceedToCheckoutBtn');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const cancelCheckoutBtn = document.getElementById('cancelCheckoutBtn');
  const codForm = document.getElementById('codOrderForm');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const printReceiptBtn = document.getElementById('printReceiptBtn');

  if (proceedBtn) proceedBtn.addEventListener('click', openCheckoutModal);
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
  if (cancelCheckoutBtn) cancelCheckoutBtn.addEventListener('click', () => {
    closeCheckoutModal();
    openCart();
  });
  if (codForm) codForm.addEventListener('submit', handleCODOrderSubmit);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCheckoutModal);
  if (printReceiptBtn) printReceiptBtn.addEventListener('click', () => window.print());

  // 6. Quick View modal close
  const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
  const quickViewModal = document.getElementById('quickViewModal');
  if (closeQuickViewBtn) closeQuickViewBtn.addEventListener('click', closeQuickView);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  // 7. Category Filter Tabs
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.currentCategory = pill.dataset.category || 'all';
      renderProducts();
    });
  });

  // 8. Footer Category Links
  document.querySelectorAll('.footer-links a[data-cat]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.dataset.cat;
      const targetPill = document.querySelector(`.cat-pill[data-category="${cat}"]`);
      if (targetPill) targetPill.click();
    });
  });

  // 9. Search Inputs (Synchronized)
  const globalSearch = document.getElementById('globalSearchInput');
  const catalogSearch = document.getElementById('catalogSearchInput');
  const searchClear = document.getElementById('searchClearBtn');

  function handleSearchInput(value) {
    AppState.searchQuery = value;
    if (globalSearch && globalSearch.value !== value) globalSearch.value = value;
    if (catalogSearch && catalogSearch.value !== value) catalogSearch.value = value;
    if (searchClear) searchClear.style.display = value ? 'block' : 'none';
    renderProducts();
  }

  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => handleSearchInput(e.target.value));
  }
  if (catalogSearch) {
    catalogSearch.addEventListener('input', (e) => handleSearchInput(e.target.value));
  }
  if (searchClear) {
    searchClear.addEventListener('click', () => handleSearchInput(''));
  }

  // 10. Price Slider
  const priceSlider = document.getElementById('priceRangeSlider');
  const priceDisplay = document.getElementById('priceDisplay');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      AppState.maxPrice = parseInt(e.target.value, 10);
      if (priceDisplay) priceDisplay.textContent = formatPKR(AppState.maxPrice);
      renderProducts();
    });
  }

  // 11. Sort Dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // 12. Promo Coupon Buttons & Chips
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const couponInput = document.getElementById('couponInput');
  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => applyCouponCode(couponInput.value));
  }
  document.querySelectorAll('.coupon-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.dataset.code;
      if (couponInput) couponInput.value = code;
      applyCouponCode(code);
    });
  });

  // 13. FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // 14. How COD Works Hero Button
  const howCodBtn = document.getElementById('howCodWorksBtn');
  if (howCodBtn) {
    howCodBtn.addEventListener('click', () => {
      const sec = document.getElementById('howCodSection');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 15. Reset Filters
  const resetBtn = document.getElementById('resetFiltersEmptyBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      AppState.searchQuery = '';
      AppState.currentCategory = 'all';
      AppState.maxPrice = 1050000;
      if (globalSearch) globalSearch.value = '';
      if (catalogSearch) catalogSearch.value = '';
      if (priceSlider) priceSlider.value = 1050000;
      if (priceDisplay) priceDisplay.textContent = formatPKR(1050000);
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      const allPill = document.querySelector('.cat-pill[data-category="all"]');
      if (allPill) allPill.classList.add('active');
      renderProducts();
    });
  }
});
