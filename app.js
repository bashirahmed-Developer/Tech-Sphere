/**
 * TechSphere - Electronics & Tech Store Core Logic
 * Author: Bashir Ahmed (github.com/bashirahmed-Developer)
 */

(function () {
  'use strict';

  // ==========================================
  // Application State
  // ==========================================
  const state = {
    products: typeof TECH_PRODUCTS !== 'undefined' ? TECH_PRODUCTS : [],
    cart: JSON.parse(localStorage.getItem('techsphere_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('techsphere_wishlist') || '[]'),
    theme: localStorage.getItem('techsphere_theme') || 'dark',
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    appliedCoupon: null
  };

  const VALID_COUPONS = {
    'TECH10': 10,
    'WELCOME20': 20,
    'VIP15': 15,
    'COD5': 5
  };

  // ==========================================
  // DOM Elements
  // ==========================================
  const DOM = {
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    brandHomeBtn: document.getElementById('brandHomeBtn'),
    
    navSearchInput: document.getElementById('navSearchInput'),
    navSearchClear: document.getElementById('navSearchClear'),
    
    cartBadge: document.getElementById('cartBadge'),
    wishlistBadge: document.getElementById('wishlistBadge'),
    
    categoryChips: document.getElementById('categoryChips'),
    sortSelect: document.getElementById('sortSelect'),
    displayedProductsCount: document.getElementById('displayedProductsCount'),
    productsGrid: document.getElementById('productsGrid'),
    
    cartOverlay: document.getElementById('cartOverlay'),
    openCartBtn: document.getElementById('openCartBtn'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartDrawerCount: document.getElementById('cartDrawerCount'),
    cartItemsList: document.getElementById('cartItemsList'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    discountRow: document.getElementById('discountRow'),
    discountPercent: document.getElementById('discountPercent'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartGrandTotal: document.getElementById('cartGrandTotal'),
    couponInput: document.getElementById('couponInput'),
    applyCouponBtn: document.getElementById('applyCouponBtn'),
    couponStatus: document.getElementById('couponStatus'),
    openCheckoutBtn: document.getElementById('openCheckoutBtn'),
    
    checkoutModal: document.getElementById('checkoutModal'),
    closeCheckoutBtn: document.getElementById('closeCheckoutBtn'),
    codCheckoutForm: document.getElementById('codCheckoutForm'),
    custName: document.getElementById('custName'),
    custPhone: document.getElementById('custPhone'),
    custEmail: document.getElementById('custEmail'),
    custCity: document.getElementById('custCity'),
    custAddress: document.getElementById('custAddress'),
    custNotes: document.getElementById('custNotes'),
    checkoutOrderItemsList: document.getElementById('checkoutOrderItemsList'),
    checkoutPayableTotal: document.getElementById('checkoutPayableTotal'),
    confirmOrderBtn: document.getElementById('confirmOrderBtn'),
    
    orderSuccessModal: document.getElementById('orderSuccessModal'),
    successOrderId: document.getElementById('successOrderId'),
    successCustomerName: document.getElementById('successCustomerName'),
    successCustomerPhone: document.getElementById('successCustomerPhone'),
    successCustomerAddress: document.getElementById('successCustomerAddress'),
    successPayableAmount: document.getElementById('successPayableAmount'),
    continueShoppingBtn: document.getElementById('continueShoppingBtn'),
    
    quickViewModal: document.getElementById('quickViewModal'),
    closeQuickViewBtn: document.getElementById('closeQuickViewBtn'),
    quickViewContent: document.getElementById('quickViewContent'),
    
    wishlistModal: document.getElementById('wishlistModal'),
    openWishlistBtn: document.getElementById('openWishlistBtn'),
    closeWishlistBtn: document.getElementById('closeWishlistBtn'),
    wishlistModalCount: document.getElementById('wishlistModalCount'),
    wishlistItemsList: document.getElementById('wishlistItemsList'),
    
    toastContainer: document.getElementById('toastContainer')
  };

  function formatPrice(amount) {
    return '$' + Number(amount || 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

  function showToast(message, icon) {
    icon = icon || 'fa-circle-check';
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="fa-solid ' + icon + '" style="color: var(--cyan-primary);"></i> <span>' + message + '</span>';
    DOM.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('techsphere_theme', theme);
    if (theme === 'light') {
      DOM.themeIcon.className = 'fa-solid fa-moon';
      DOM.themeToggleBtn.title = 'Switch to Dark Mode';
    } else {
      DOM.themeIcon.className = 'fa-solid fa-sun';
      DOM.themeToggleBtn.title = 'Switch to Light Mode';
    }
  }

  DOM.themeToggleBtn.addEventListener('click', () => {
    const next = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    showToast('Switched to ' + next + ' mode', next === 'dark' ? 'fa-moon' : 'fa-sun');
  });

  function getFilteredProducts() {
    let list = [...state.products];

    if (state.activeCategory !== 'all') {
      list = list.filter(p => p.category === state.activeCategory);
    }

    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      list = list.filter(p => {
        const name = (p.name || '').toLowerCase();
        const brand = (p.brand || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        const cat = (p.categoryLabel || '').toLowerCase();
        return name.includes(q) || brand.includes(q) || desc.includes(q) || cat.includes(q);
      });
    }

    switch (state.sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return list;
  }

  function renderProducts() {
    const items = getFilteredProducts();
    DOM.displayedProductsCount.textContent = items.length;

    if (!items.length) {
      DOM.productsGrid.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-plug-circle-xmark"></i>
          <h3>No electronics match your search</h3>
          <p>Try searching for a different gadget, brand, or select another category.</p>
          <button class="checkout-btn" style="max-width: 220px; margin: 0 auto;" id="resetCatalogBtn">View All Electronics</button>
        </div>
      `;
      document.getElementById('resetCatalogBtn')?.addEventListener('click', () => {
        state.activeCategory = 'all';
        state.searchQuery = '';
        DOM.navSearchInput.value = '';
        DOM.navSearchClear.style.display = 'none';
        DOM.categoryChips.querySelectorAll('.category-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
        renderProducts();
      });
      return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach(product => {
      const isFav = state.wishlist.includes(product.id);
      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
          ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
          <button class="card-wishlist-btn ${isFav ? 'active' : ''}" data-id="${product.id}" title="${isFav ? 'Remove from Wishlist' : 'Add to Wishlist'}" aria-label="Wishlist">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
        <div class="card-body">
          <div class="card-brand">${product.brand}</div>
          <h3 class="card-title">${product.name}</h3>
          
          <div class="card-rating">
            <span class="stars"><i class="fa-solid fa-star"></i> ${product.rating.toFixed(1)}</span>
            <span class="reviews-text">(${product.reviewsCount} reviews)</span>
          </div>

          <div class="card-price-row">
            <span class="current-price">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
            ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
          </div>

          <button class="add-to-cart-btn" data-id="${product.id}">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      `;

      const favBtn = card.querySelector('.card-wishlist-btn');
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(product.id);
      });

      const addBtn = card.querySelector('.add-to-cart-btn');
      addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id);
      });

      card.addEventListener('click', () => {
        openQuickView(product);
      });

      fragment.appendChild(card);
    });

    DOM.productsGrid.innerHTML = '';
    DOM.productsGrid.appendChild(fragment);
  }

  function saveCart() {
    localStorage.setItem('techsphere_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  function addToCart(productId, qty) {
    qty = qty || 1;
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += qty;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        brand: product.brand,
        quantity: qty
      });
    }

    saveCart();
    animateCartBadge();
    showToast('Added ' + product.name + ' to cart! 🛒', 'fa-cart-plus');
  }

  function updateCartQty(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    saveCart();
  }

  function removeFromCart(productId) {
    const item = state.cart.find(i => i.id === productId);
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    if (item) {
      showToast('Removed ' + item.name + ' from cart', 'fa-trash');
    }
  }

  function calculateCartTotals() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;

    if (state.appliedCoupon && subtotal > 0) {
      discount = Math.round((subtotal * state.appliedCoupon.percent) / 100);
    }

    const grandTotal = Math.max(0, subtotal - discount);

    return { subtotal, discount, grandTotal };
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    DOM.cartBadge.textContent = totalCount;
    DOM.cartDrawerCount.textContent = totalCount;

    const totals = calculateCartTotals();
    const subtotal = totals.subtotal;
    const discount = totals.discount;
    const grandTotal = totals.grandTotal;

    DOM.cartSubtotal.textContent = formatPrice(subtotal);
    DOM.cartGrandTotal.textContent = formatPrice(grandTotal);

    if (state.appliedCoupon && discount > 0) {
      DOM.discountRow.style.display = 'flex';
      DOM.discountPercent.textContent = state.appliedCoupon.percent + '% OFF';
      DOM.cartDiscount.textContent = '-' + formatPrice(discount);
    } else {
      DOM.discountRow.style.display = 'none';
    }

    if (!state.cart.length) {
      DOM.cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-cart-shopping" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
          <h4 style="color: var(--text-primary); font-size: 1.15rem; margin-bottom: 0.35rem;">Your cart is empty</h4>
          <p style="font-size: 0.85rem;">Explore our latest electronics & tech gadgets to get started!</p>
        </div>
      `;
      DOM.openCheckoutBtn.disabled = true;
      DOM.openCheckoutBtn.style.opacity = '0.5';
      DOM.openCheckoutBtn.style.cursor = 'not-allowed';
      return;
    }

    DOM.openCheckoutBtn.disabled = false;
    DOM.openCheckoutBtn.style.opacity = '1';
    DOM.openCheckoutBtn.style.cursor = 'pointer';

    DOM.cartItemsList.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="TechApp.updateCartQty('${item.id}', -1)">-</button>
            <span class="qty-count">${item.quantity}</span>
            <button class="qty-btn" onclick="TechApp.updateCartQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove-btn" onclick="TechApp.removeFromCart('${item.id}')" title="Remove Item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');
  }

  function animateCartBadge() {
    DOM.cartBadge.classList.add('bump');
    setTimeout(() => DOM.cartBadge.classList.remove('bump'), 300);
  }

  function openCart() {
    DOM.cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    DOM.cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  DOM.openCartBtn.addEventListener('click', openCart);
  DOM.closeCartBtn.addEventListener('click', closeCart);
  DOM.cartOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.cartOverlay) closeCart();
  });

  DOM.applyCouponBtn.addEventListener('click', () => {
    const code = (DOM.couponInput.value || '').toUpperCase().trim();
    if (!code) return;

    if (VALID_COUPONS[code]) {
      state.appliedCoupon = { code: code, percent: VALID_COUPONS[code] };
      DOM.couponStatus.style.display = 'block';
      DOM.couponStatus.style.color = '#10b981';
      DOM.couponStatus.textContent = 'Coupon "' + code + '" applied! ' + VALID_COUPONS[code] + '% discount added.';
      saveCart();
      showToast('Coupon applied! ' + VALID_COUPONS[code] + '% OFF 🎉', 'fa-tag');
    } else {
      DOM.couponStatus.style.display = 'block';
      DOM.couponStatus.style.color = '#ef4444';
      DOM.couponStatus.textContent = 'Invalid coupon code. Try "TECH10" or "WELCOME20"';
    }
  });

  function openCheckout() {
    if (!state.cart.length) return;
    closeCart();

    const totals = calculateCartTotals();
    DOM.checkoutPayableTotal.textContent = formatPrice(totals.grandTotal);

    DOM.checkoutOrderItemsList.innerHTML = state.cart.map(i => `
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
        <span>${i.name} (x${i.quantity})</span>
        <strong>${formatPrice(i.price * i.quantity)}</strong>
      </div>
    `).join('');

    DOM.checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckout() {
    DOM.checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  DOM.openCheckoutBtn.addEventListener('click', openCheckout);
  DOM.closeCheckoutBtn.addEventListener('click', closeCheckout);
  DOM.checkoutModal.addEventListener('click', (e) => {
    if (e.target === DOM.checkoutModal) closeCheckout();
  });

  DOM.codCheckoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = DOM.custName.value.trim();
    const phone = DOM.custPhone.value.trim();
    const city = DOM.custCity.value;
    const address = DOM.custAddress.value.trim();

    if (!name || !phone || !city || !address) {
      alert('Please fill out all required fields.');
      return;
    }

    DOM.confirmOrderBtn.disabled = true;
    DOM.confirmOrderBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Placing Cash on Delivery Order...';

    setTimeout(() => {
      const orderId = '#TS-' + Math.floor(10000 + Math.random() * 90000);
      const totals = calculateCartTotals();

      DOM.successOrderId.textContent = orderId;
      DOM.successCustomerName.textContent = name;
      DOM.successCustomerPhone.textContent = phone;
      DOM.successCustomerAddress.textContent = address + ', ' + city;
      DOM.successPayableAmount.textContent = formatPrice(totals.grandTotal) + ' (Cash on Delivery)';

      state.cart = [];
      state.appliedCoupon = null;
      saveCart();

      DOM.codCheckoutForm.reset();
      DOM.confirmOrderBtn.disabled = false;
      DOM.confirmOrderBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Confirm Cash on Delivery Order</span>';

      closeCheckout();
      DOM.orderSuccessModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      triggerConfetti();
    }, 900);
  });

  DOM.continueShoppingBtn.addEventListener('click', () => {
    DOM.orderSuccessModal.classList.remove('open');
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function openQuickView(product) {
    if (!product) return;

    let specsHtml = '';
    if (product.specs) {
      specsHtml = Object.entries(product.specs).map(([key, val]) => `
        <div style="display: flex; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px solid var(--border-color); font-size: 0.85rem;">
          <span style="color: var(--text-muted); text-transform: capitalize;">${key}:</span>
          <strong style="color: var(--text-primary);">${val}</strong>
        </div>
      `).join('');
    }

    DOM.quickViewContent.innerHTML = `
      <div>
        <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md); max-height: 380px; object-fit: cover;">
        <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
          <div style="flex: 1; text-align: center; padding: 0.6rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.8rem;">
            <i class="fa-solid fa-truck-fast" style="color: var(--cyan-primary);"></i> Free Delivery
          </div>
          <div style="flex: 1; text-align: center; padding: 0.6rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size: 0.8rem;">
            <i class="fa-solid fa-money-bill-wave" style="color: #10b981;"></i> Pay on Arrival
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.85rem;">
        <div style="color: var(--cyan-primary); font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">${product.brand}</div>
        <h2 style="font-size: 1.4rem; font-weight: 800; line-height: 1.25;">${product.name}</h2>
        
        <div style="display: flex; align-items: baseline; gap: 0.75rem;">
          <span style="font-size: 1.7rem; font-weight: 800; color: var(--cyan-primary);">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span style="font-size: 1.05rem; text-decoration: line-through; color: var(--text-muted);">${formatPrice(product.originalPrice)}</span>` : ''}
          ${product.discount ? `<span style="color: #10b981; font-weight: 700; font-size: 0.85rem;">${product.discount}</span>` : ''}
        </div>

        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">${product.description}</p>

        <div style="margin: 0.5rem 0;">
          <div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-primary);">Key Specifications:</div>
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.85rem;">
            ${specsHtml}
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
          <button class="checkout-btn" style="flex: 1;" onclick="TechApp.addToCart('${product.id}'); TechApp.closeQuickView();">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="action-btn" onclick="TechApp.toggleWishlist('${product.id}')" title="Wishlist">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    `;

    DOM.quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    DOM.quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  DOM.closeQuickViewBtn.addEventListener('click', closeQuickView);
  DOM.quickViewModal.addEventListener('click', (e) => {
    if (e.target === DOM.quickViewModal) closeQuickView();
  });

  function saveWishlist() {
    localStorage.setItem('techsphere_wishlist', JSON.stringify(state.wishlist));
    DOM.wishlistBadge.textContent = state.wishlist.length;
    DOM.wishlistModalCount.textContent = state.wishlist.length;
  }

  function toggleWishlist(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    if (state.wishlist.includes(productId)) {
      state.wishlist = state.wishlist.filter(id => id !== productId);
      showToast('Removed from Wishlist', 'fa-heart-crack');
    } else {
      state.wishlist.push(productId);
      showToast('Saved ' + product.name + ' to Wishlist ❤️', 'fa-heart');
    }

    saveWishlist();
    renderProducts();
    renderWishlistModal();
  }

  function renderWishlistModal() {
    const items = state.products.filter(p => state.wishlist.includes(p.id));
    if (!items.length) {
      DOM.wishlistItemsList.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">No items saved in wishlist yet.</p>';
      return;
    }

    DOM.wishlistItemsList.innerHTML = items.map(p => `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.75rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
        <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: var(--radius-sm);">
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 0.9rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.name}</div>
          <div style="font-size: 0.85rem; color: var(--cyan-primary); font-weight: 700;">${formatPrice(p.price)}</div>
        </div>
        <button class="action-btn" onclick="TechApp.addToCart('${p.id}'); TechApp.toggleWishlist('${p.id}');" style="padding: 0.4rem 0.8rem; font-size: 0.78rem;">
          <i class="fa-solid fa-cart-plus"></i> Move to Cart
        </button>
      </div>
    `).join('');
  }

  DOM.openWishlistBtn.addEventListener('click', () => {
    renderWishlistModal();
    DOM.wishlistModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  DOM.closeWishlistBtn.addEventListener('click', () => {
    DOM.wishlistModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  function triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '2500';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 3,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        life: 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        if (p.life > 0) {
          alive = true;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.35;
          p.rotation += p.rSpeed;
          p.life -= 0.015;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(animate);
      } else {
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    }

    animate();
  }

  DOM.categoryChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.category-chip');
    if (!chip) return;

    DOM.categoryChips.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    state.activeCategory = chip.dataset.category;
    renderProducts();
  });

  DOM.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  let searchTimeout;
  DOM.navSearchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const val = e.target.value;
    DOM.navSearchClear.style.display = val.trim() ? 'flex' : 'none';
    searchTimeout = setTimeout(() => {
      state.searchQuery = val;
      renderProducts();
    }, 200);
  });

  DOM.navSearchClear.addEventListener('click', () => {
    DOM.navSearchInput.value = '';
    DOM.navSearchClear.style.display = 'none';
    state.searchQuery = '';
    DOM.navSearchInput.focus();
    renderProducts();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeCheckout();
      closeQuickView();
      DOM.wishlistModal.classList.remove('open');
      DOM.orderSuccessModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  DOM.brandHomeBtn.addEventListener('click', () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    DOM.navSearchInput.value = '';
    DOM.navSearchClear.style.display = 'none';
    DOM.categoryChips.querySelectorAll('.category-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function init() {
    applyTheme(state.theme);
    saveWishlist();
    updateCartUI();
    renderProducts();
  }

  init();

  window.TechApp = {
    addToCart,
    updateCartQty,
    removeFromCart,
    toggleWishlist,
    closeQuickView
  };

})();
