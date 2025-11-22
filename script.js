const products = [
    {
        id: 'rfiv',
        name: 'Room For Improvement Vinyl',
        price: 29.99,
        img: '/2403178_IA2_S1AY26/assets/rfi.jpg',
        description: 'The debut album from Drake, featuring hits like "Best I Ever Had" and "Successful." A must-have for any hip-hop fan.'
    },

    {
        id: 'rficd',
        name: 'Room For Improvement CD',
        price: 19.99,
        img: '/2403178_IA2_S1AY26/assets/rfi.jpg',
        description: 'The debut album from Drake on CD, featuring hits like "Best I Ever Had" and "Successful." A must-have for any hip-hop fan.'
    },

    {
        id: 'csv',
        name: 'Comeback Season Vinyl',
        price: 31.99,
        img: '/2403178_IA2_S1AY26/assets/cs.jpg',
        description: 'Drake\'s sophomore album, showcasing his growth as an artist with tracks like "Give Ya" and "Comeback Season."'
    },

    {
        id: 'cscd',
        name: 'Comeback Season CD',
        price: 12.99,
        img: '/2403178_IA2_S1AY26/assets/cs.jpg',
        description: 'Drake\'s sophomore album on CD, showcasing his growth as an artist with tracks like "Give Ya" and "Comeback Season."'
    },

    {
        id: 'sfgv',
        name: 'So Far Gone Vinyl',
        price: 34.99,
        img: '/2403178_IA2_S1AY26/assets/sfg.jpg',
        description: 'The critically acclaimed mixtape that put Drake on the map, featuring hits like "Say What\'s Real" and "Lust For Life."'
    },

    {
        id: 'sfgcd',
        name: 'So Far Gone CD',
        price: 14.99,
        img: '/2403178_IA2_S1AY26/assets/sfg.jpg',
        description: 'The critically acclaimed mixtape on CD that put Drake on the map, featuring hits like "Say What\'s Real" and "Lust For Life."'
    },

    {
        id: 'tmlv',
        name: 'Thank Me Later Vinyl',
        price: 30.99,
        img: '/2403178_IA2_S1AY26/assets/tml.jpg',
        description: 'Drake\'s debut studio album, featuring chart-topping singles like "Over" and "Find Your Love." A staple in any collection.'
    },

    {
        id: 'tmlcd',
        name: 'Thank Me Later CD',
        price: 16.99,
        img: '/2403178_IA2_S1AY26/assets/tml.jpg',
        description: 'Drake\'s debut studio album on CD, featuring chart-topping singles like "Over" and "Find Your Love." A staple in any collection.'
    },

    {
        id: 'tcv',
        name: 'Take Care Vinyl',
        price: 42.99,
        img: '/2403178_IA2_S1AY26/assets/tc.jpg',
        description: 'The Grammy-winning album that solidified Drake\'s place in hip-hop, with hits like "Headlines" and "Marvins Room."'
    },

    {
        id: 'tccd',
        name: 'Take Care CD',
        price: 18.99,
        img: '/2403178_IA2_S1AY26/assets/tc.jpg',
        description: 'The Grammy-winning album on CD that solidified Drake\'s place in hip-hop, with hits like "Headlines" and "Marvins Room."'
    },

    {
        id: 'nwtsv',
        name: 'Nothing Was The Same Vinyl',
        price: 34.99,
        img: '/2403178_IA2_S1AY26/assets/nwts.jpg',
        description: 'Drake\'s third studio album, featuring hits like "Started From The Bottom" and "Hold On, We\'re Going Home." A fan favorite.'
    },

    {
        id: 'nwtscd',
        name: 'Nothing Was The Same CD',
        price: 15.99,
        img: '/2403178_IA2_S1AY26/assets/nwts.jpg',
        description: 'Drake\'s third studio album on CD, featuring hits like "Started From The Bottom" and "Hold On, We\'re Going Home." A fan favorite.'
    },

    {
        id: 'iyrtitlv',
        name: 'If You\'re Reading This It\'s Too Late Vinyl',
        price: 39.99,
        img: '/2403178_IA2_S1AY26/assets/iyrtitl.jpg',
        description: 'The surprise mixtape that took the world by storm, with tracks like "Energy" and "10 Bands." A must-have for collectors.'
    },

    {
        id: 'iyrtitlcd',
        name: 'If You\'re Reading This It\'s Too Late CD',
        price: 13.99,
        img: '/2403178_IA2_S1AY26/assets/iyrtitl.jpg',
        description: 'The surprise mixtape on CD that took the world by storm, with tracks like "Energy" and "10 Bands." A must-have for collectors.'
    },

    {
        id: 'wattbav',
        name: 'What A Time To Be Alive Vinyl',
        price: 36.99,
        img: '/2403178_IA2_S1AY26/assets/wattba.jpg',
        description: 'The collaborative mixtape with Future, featuring hits like "Jumpman" and "Big Rings." A dynamic duo in hip-hop.'
    },

    {
        id: 'wattbacd',
        name: 'What A Time To Be Alive CD',
        price: 14.99,
        img: '/2403178_IA2_S1AY26/assets/wattba.jpg',
        description: 'The collaborative mixtape on CD with Future, featuring hits like "Jumpman" and "Big Rings." A dynamic duo in hip-hop.'
    },

    {
        id: 'vv',
        name: 'Views Vinyl',
        price: 44.99,
        img: '/2403178_IA2_S1AY26/assets/v.jpg',
        description: 'Drake\'s fourth studio album, featuring chart-topping singles like "Hotline Bling", "Feel No Ways" and "One Dance." A modern classic.'
    },

    {
        id: 'vcd',
        name: 'Views CD',
        price: 17.99,
        img: '/2403178_IA2_S1AY26/assets/v.jpg',
        description: 'Drake\'s fourth studio album on CD, featuring chart-topping singles like "Hotline Bling", "Feel No Ways" and "One Dance." A modern classic.'
    },

    {
        id: 'mlv',
        name: 'More Life Vinyl',
        price: 38.99,
        img: '/2403178_IA2_S1AY26/assets/ml.jpg',
        description: 'The playlist-style album that blends hip-hop and R&B, with hits like "Passionfruit" and "Fake Love." A versatile addition to any collection.'
    },

    {
        id: 'mlcd',
        name: 'More Life CD',
        price: 16.99,
        img: '/2403178_IA2_S1AY26/assets/ml.jpg',
        description: 'The playlist-style album on CD that blends hip-hop and R&B, with hits like "Passionfruit" and "Fake Love." A versatile addition to any collection.'
    },

    {
        id: 'shcd',
        name: 'Scary Hours CD',
        price: 9.99,
        img: '/2403178_IA2_S1AY26/assets/sh.jpg',
        description: 'The EP featuring the hit single "God\'s Plan" and "Diplomatic Immunity." A short but impactful release from Drake.'
    },

    {
        id: 'sv',
        name: 'Scorpion Vinyl',
        price: 45.99,
        img: '/2403178_IA2_S1AY26/assets/s.jpg',
        description: 'Drake\'s fifth studio album, featuring hits like "God\'s Plan", "Nice For What" and "In My Feelings." A chart-topping success.'
    },

    {
        id: 'scd',
        name: 'Scorpion CD',
        price: 18.99,
        img: '/2403178_IA2_S1AY26/assets/s.jpg',
        description: 'Drake\'s fifth studio album on CD, featuring hits like "God\'s Plan", "Nice For What" and "In My Feelings." A chart-topping success.'
    },

    {
        id: 'tbitwpcd',
        name: 'The Best In The World Pack CD',
        price: 24.99,
        img: '/2403178_IA2_S1AY26/assets/tbitwp.jpg',
        description: 'A special edition pack celebrating The Toronto Raptors\'s victory in the 2019 NBA Finals over the Golden State Warriors, feauturing the tracks "Omertà" and "Money In The Grave." A collector\'s item for both Drake and basketball fans.'
    },
    
    {
        id: 'cpcd',
        name: 'Care Package CD',
        price: 14.99,
        img: '/2403178_IA2_S1AY26/assets/cp.jpg',
        description: 'A compilation of previously unreleased tracks and fan favorites, including "Trust Issues" and "The Motion." A treasure trove for Drake fans.'
    },

    {
        id: 'dldtv',
        name: 'Dark Lane Demo Tapes Vinyl',
        price: 33.99,
        img: '/2403178_IA2_S1AY26/assets/dldt.jpg',
        description: 'A mixtape featuring a mix of unreleased tracks and leaks, with hits like "Toosie Slide" and "Chicago Freestyle." A raw look into Drake\'s artistry.'
    },

    {
        id: 'dldtcd',
        name: 'Dark Lane Demo Tapes CD',
        price: 12.99,
        img: '/2403178_IA2_S1AY26/assets/dldt.jpg',
        description: 'A mixtape on CD featuring a mix of unreleased tracks and leaks, with hits like "Toosie Slide" and "Chicago Freestyle." A raw look into Drake\'s artistry.'
    },

    {
        id: 'sh2cd',
        name: 'Scary Hours 2 CD',
        price: 11.99,
        img: '/2403178_IA2_S1AY26/assets/sh2.jpg',
        description: 'The EP featuring the hit singles "What\'s Next", "Wants and Needs" and "Lemon Pepper Freestyle." A powerful follow-up to the original Scary Hours.'
    },

    {
        id: 'clbv',
        name: 'Certified Lover Boy Vinyl',
        price: 46.99,
        img: '/2403178_IA2_S1AY26/assets/clb.jpg',
        description: 'Drake\'s sixth studio album, featuring hits like "Way 2 Sexy", "Get Along Better" and "Papi\'s Home." A highly anticipated release.'
    },

    {
        id: 'clbcd',
        name: 'Certified Lover Boy CD',
        price: 19.99,
        img: '/2403178_IA2_S1AY26/assets/clb.jpg',
        description: 'Drake\'s sixth studio album on CD, featuring hits like "Way 2 Sexy", "Get Along Better" and "Papi\'s Home." A highly anticipated release.'
    },

    {
        id: 'hnv',
        name: 'Honestly, Nevermind Vinyl',
        price: 35.99,
        img: '/2403178_IA2_S1AY26/assets/hn.jpg',
        description: 'Drake\'s seventh studio album, exploring dance and house music with tracks like "Falling Back" and "Sticky." A bold new direction.'
    },

    {
        id: 'hncd',
        name: 'Honestly, Nevermind CD',
        price: 15.99,
        img: '/2403178_IA2_S1AY26/assets/hn.jpg',
        description: 'Drake\'s seventh studio album on CD, exploring dance and house music with tracks like "Falling Back" and "Sticky." A bold new direction.'
    },

    {
        id: 'hlv',
        name: 'Her Loss Vinyl',
        price: 37.99,
        img: '/2403178_IA2_S1AY26/assets/hl.jpg',
        description: 'The collaborative album with 21 Savage, featuring hits like "Rich Flex" and "On BS." A powerful partnership in modern hip-hop.'
    },

    {
        id: 'hlcd',
        name: 'Her Loss CD',
        price: 14.99,
        img: '/2403178_IA2_S1AY26/assets/hl.jpg',
        description: 'The collaborative album on CD with 21 Savage, featuring hits like "Rich Flex" and "On BS." A powerful partnership in modern hip-hop.'
    },

    {
        id: 'fatdv',
        name: 'For All The Dogs Vinyl',
        price: 34.99,
        img: '/2403178_IA2_S1AY26/assets/fatd.jpg',
        description: 'Drake\'s eighth studio album, featuring hits like "Slime You Out" and "8AM in Charlotte." A continuation of his musical evolution.'
    },

    {
        id: 'fatdcd',
        name: 'For All The Dogs CD',
        price: 13.99,
        img: '/2403178_IA2_S1AY26/assets/fatd.jpg',
        description: 'Drake\'s eighth studio album on CD, featuring hits like "Slime You Out" and "8AM in Charlotte." A continuation of his musical evolution.'
    },

    {
        id: 'fatdshev',
        name: 'For All The Dogs Scary Hours Edition Vinyl',
        price: 39.99,
        img: '/2403178_IA2_S1AY26/assets/sh3.jpg',
        description: 'The special edition of "For All The Dogs" featuring the Scary Hours 3 EP, including tracks like "Red Button" and "Wick Man" A collector\'s item.'
    },

    {
        id: 'fatdshecd',
        name: 'For All The Dogs Scary Hours Edition CD',
        price: 16.99,
        img: '/2403178_IA2_S1AY26/assets/sh3.jpg',
        description: 'The special edition on CD of "For All The Dogs" featuring the Scary Hours 3 EP, including tracks like "Red Button" and "Wick Man" A collector\'s item.'
    },

    {
        id: '100gcd',
        name: '100 Gigs CD',
        price: 12.99,
        img: '/2403178_IA2_S1AY26/assets/100g.jpg',
        description: 'A breif collection of songs like "No Face", "It\'s Up", "Housekeeping Knows" and "Circadian Rhythm." A short but sweet addition to any Drake collection.'
    },

    {
        id: 'sss4uv',
        name: '$ome $exy $ongs 4 U Vinyl',
        price: 32.99,
        img: '/2403178_IA2_S1AY26/assets/sss4u.jpg',
        description: 'A collaborative album with PARTYNEXTDOOR, featuring tracks like "CN TOWER", "NOKIA" and "DIE TRYING". A fusion of two unique styles.'
    },

    {
        id: 'sss4ucd',
        name: '$ome $exy $ongs 4 U CD',
        price: 11.99,
        img: '/2403178_IA2_S1AY26/assets/sss4u.jpg',
        description: 'A collaborative album on CD with PARTYNEXTDOOR, featuring tracks like "CN TOWER", "NOKIA" and "DIE TRYING". A fusion of two unique styles.'
    }
];

// --- GLOBAL CONSTANTS (MANDATORY CALCULATIONS) ---
/* IA#2 Q3.a - Calculations (Constants Definition) */
const TAX_RATE = 0.15; // 15% General Consumption Tax (G.C.T.)
const DISCOUNT_RATE = 0.10; // 10% discount
const DISCOUNT_THRESHOLD = 150.00; // Minimum order value for 10% discount

// ----- CART FUNCTIONALITY -----

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId); 
    if (!product) return;

    /* IA#2 Q3.b - Control Structure (if/else) for Cart Logic */
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 }); 
    }
    saveCart(cart);
    alert(`${product.name} added to cart!`);
    
    // Update rendering/badge only if necessary
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems(); 
    }
    updateCartCount(); 
}

// Function to update quantity (Enhances interactivity)
function updateQuantity(productId, newQuantity) {
    let cart = getCart();
    const quantity = parseInt(newQuantity);
    
    if (quantity < 1 || isNaN(quantity)) {
        removeFromCart(productId);
    } else {
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity = quantity;
            saveCart(cart);
            renderCartItems();
            updateCartCount(); 
        }
    }
}

// Function to remove a single item (Enhances interactivity)
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCartItems();
    updateCartCount(); 
}

// Clear cart
function clearCart() {
    if (confirm("Are you sure you want to clear your entire cart?")) {
        localStorage.removeItem('cart');
        renderCartItems(); 
        updateCartCount(); 
    }
}

// --- CORE CALCULATION & RENDERING ---

// Reusable function to calculate and return the total order values
function calculateOrderTotals() {
    const cart = getCart();
    /* IA#2 Q3.a - Calculations (Subtotal) */
    let rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let discountAmount = 0;
    /* IA#2 Q3.b - Control Structure (if) for conditional discount */
    if (rawSubtotal >= DISCOUNT_THRESHOLD) {
        /* IA#2 Q3.a - Calculations (Discount) */
        discountAmount = rawSubtotal * DISCOUNT_RATE;
    }

    const subtotalAfterDiscount = rawSubtotal - discountAmount;
    /* IA#2 Q3.a - Calculations (Tax) */
    const taxAmount = subtotalAfterDiscount * TAX_RATE;
    /* IA#2 Q3.a - Calculations (Total) */
    const grandTotal = subtotalAfterDiscount + taxAmount;
    
    return {
        rawSubtotal,
        discountAmount,
        taxAmount,
        grandTotal,
        cartItems: cart
    };
}


// Render cart items in table with full calculations
function renderCartItems() {
    const cart = getCart();
    // Requires cart.html to have tbody id="cart-items" and tfoot id="cart-summary"
    const tbody = document.getElementById('cart-items'); 
    const tfoot = document.getElementById('cart-summary'); 

    // CRITICAL CHECK: Returns if elements are missing (Fixes empty cart table issue)
    if (!tbody || !tfoot) return; 

    tbody.innerHTML = '';
    
    /* IA#2 Q3.b - Control Structure (forEach) */
    cart.forEach(item => {
        const itemSubtotal = item.price * item.quantity;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" 
                       onchange="updateQuantity('${item.id}', this.value)">
            </td>
            <td>$${itemSubtotal.toFixed(2)}</td>
            <td>${(TAX_RATE * 100).toFixed(0)}%</td>
            <td>-</td> 
            <td>$${itemSubtotal.toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button></td>
        `;
        tbody.appendChild(row);
    });
    
    const totals = calculateOrderTotals();

    // Render summary in the tfoot
    tfoot.innerHTML = `
        <tr>
            <td colspan="6" style="text-align: right;"><strong>Sub-Total (Items Only):</strong></td>
            <td class="total-value">$${totals.rawSubtotal.toFixed(2)}</td>
            <td></td>
        </tr>
        <tr>
            <td colspan="6" style="text-align: right;"><strong>Discount (${(DISCOUNT_RATE * 100).toFixed(0)}%):</strong></td>
            <td class="total-value text-red">-$${totals.discountAmount.toFixed(2)}</td>
            <td></td>
        </tr>
        <tr>
            <td colspan="6" style="text-align: right;"><strong>Tax (${(TAX_RATE * 100).toFixed(0)}%):</strong></td>
            <td class="total-value">$${totals.taxAmount.toFixed(2)}</td>
            <td></td>
        </tr>
        <tr style="border-top: 2px solid var(--color-accent);">
            <td colspan="6" style="text-align: right;"><strong>Grand Total:</strong></td>
            <td class="total-value"><strong>$${totals.grandTotal.toFixed(2)}</strong></td>
            <td></td>
        </tr>
    `;
}

// Function to update the cart item count displayed in the header badge
/* IA#2 Q3.a - DOM Manipulation (Cart Badge) */
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        if (totalItems > 0) {
            cartCountElement.textContent = `(${totalItems})`;
            cartCountElement.style.display = 'inline';
        } else {
            cartCountElement.textContent = '';
            cartCountElement.style.display = 'none';
        }
    }
}

// ----- FEATURED / SHOP PRODUCTS (Rendering) -----

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Renders 4 random products on index.html
function renderFeaturedProducts(limit = 4) {
    const container = document.getElementById('featured-products');
    if (!container) return;

    /* IA#2 Q3.b - Control Structure (map) for rendering */
    const randomProducts = shuffle([...products]).slice(0, limit);
    container.innerHTML = randomProducts.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>$${product.price.toFixed(2)}</strong>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
    `).join('');
}

// Renders ALL products on shop.html
function renderAllProducts() {
    const container = document.getElementById('all-products');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>$${product.price.toFixed(2)}</strong>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
        </div>
    `).join('');
}

// ----- CHECKOUT / INVOICE LOGIC -----

// Load summary onto Checkout Page
function renderCheckoutSummary() {
    const summaryBody = document.getElementById('checkout-summary-body');
    if (!summaryBody) return;

    const totals = calculateOrderTotals();

    summaryBody.innerHTML = `
        <tr><td>Sub-Total</td><td>$${totals.rawSubtotal.toFixed(2)}</td></tr>
        <tr><td>Discount</td><td class="text-red">-$${totals.discountAmount.toFixed(2)}</td></tr>
        <tr><td>Tax</td><td>$${totals.taxAmount.toFixed(2)}</td></tr>
        <tr style="border-top: 2px solid var(--color-accent);">
            <td><strong>Grand Total</strong></td>
            <td><strong>$${totals.grandTotal.toFixed(2)}</strong></td>
        </tr>
    `;
}

// Handle Checkout Form Submission (Confirmation)
/* IA#2 Q2.b - Event Handling (Form Submission) */
function processCheckout(e) {
    e.preventDefault(); 
    
    if (getCart().length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }

    const form = e.target;
    // Basic form data retrieval
    const name = form.elements['name'].value;
    const address = form.elements['address'].value;
    const city = form.elements['city'].value;
    const zip = form.elements['zip'].value;
    const payment = form.elements['payment'].value;
    
    const totals = calculateOrderTotals();
    
    // Create a final order object
    const finalOrder = {
        orderId: Date.now().toString(),
        timestamp: new Date().toLocaleString(),
        shipping: { name, address, city, zip, payment },
        ...totals // Includes grandTotal, taxAmount, rawSubtotal, cartItems
    };
    
    // Save the final order and clear the temporary cart
    localStorage.setItem('lastOrder', JSON.stringify(finalOrder));
    clearCart(); // Clears the cart from local storage AND updates cart badge

    alert("Order confirmed! You will now be redirected to your invoice.");
    
    // Redirect to the Invoice page
    window.location.href = `invoice.html?orderId=${finalOrder.orderId}`;
}

// Render the Invoice Page
function renderInvoice() {
    const orderData = JSON.parse(localStorage.getItem('lastOrder'));
    
    if (!document.getElementById('invoice-details')) return;

    if (!orderData) {
        document.getElementById('invoice-details').innerHTML = `<p>No recent order found.</p>`;
        return;
    }

    // Populate Shipping Info (Requires spans with these IDs in invoice.html)
    document.getElementById('invoice-id').textContent = orderData.orderId;
    document.getElementById('invoice-timestamp').textContent = orderData.timestamp;
    document.getElementById('invoice-name').textContent = orderData.shipping.name;
    document.getElementById('invoice-address').textContent = orderData.shipping.address;
    document.getElementById('invoice-city').textContent = orderData.shipping.city;
    document.getElementById('invoice-zip').textContent = orderData.shipping.zip;

    // Populate Items (Requires tbody id="invoice-items" in invoice.html)
    const invoiceItemsBody = document.getElementById('invoice-items');
    invoiceItemsBody.innerHTML = orderData.cartItems.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
    `).join('');

    // Populate Totals Summary (Requires tfoot id="invoice-summary" in invoice.html)
    const invoiceSummaryFoot = document.getElementById('invoice-summary');
    invoiceSummaryFoot.innerHTML = `
        <tr>
            <td colspan="3" class="total-label">Sub-Total:</td>
            <td class="total-value">$${orderData.rawSubtotal.toFixed(2)}</td>
        </tr>
        <tr>
            <td colspan="3" class="total-label">Discount:</td>
            <td class="total-value text-red">-$${orderData.discountAmount.toFixed(2)}</td>
        </tr>
        <tr>
            <td colspan="3" class="total-label">Tax:</td>
            <td class="total-value">$${orderData.taxAmount.toFixed(2)}</td>
        </tr>
        <tr>
            <td colspan="3" class="total-label"><strong>Grand Total:</strong></td>
            <td class="total-value"><strong>$${orderData.grandTotal.toFixed(2)}</strong></td>
        </tr>
    `;
}

// ----- USER AUTHENTICATION (Form Validation) -----

/* IA#2 Q2.c - Form Validation/Input Handling (Password Match & Strength) */
function registerUser(e) {
    e.preventDefault(); 
    const name = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value; 

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    // 1. Password Strength Check
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return; 
    }

    // 2. Password Match Check
    if (password !== confirmPassword) {
        alert("Error: Passwords do not match.");
        return; 
    }

    // 3. Email Uniqueness Check
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        alert("Error: A user with this email already exists. Please log in.");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful! You may now log in.");
    
    e.target.reset();
    window.location.href = "login.html";
}

function loginUser(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = "index.html"; 
    } else {
        alert("Invalid email or password");
    }
}

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    window.location.href = "login.html"; 
}

function protectPage() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        window.location.href = "login.html"; 
    }
}

function updateHeader() {
    const logoutBtn = document.getElementById('logout-btn'); 
    const userSection = document.getElementById('user-section');
    
    if (!logoutBtn || !userSection) return;
    
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        logoutBtn.style.display = 'inline-block';
        userSection.innerHTML = `Welcome, ${loggedInUser.name.split(' ')[0] || 'User'}!`;
        userSection.style.display = 'inline';
    } else {
        logoutBtn.style.display = 'none';
        userSection.innerHTML = '';
        userSection.style.display = 'none';
    }
}

// ----- PAGE INITIALIZATION (MANDATORY EVENT HANDLING) -----

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    // Protection Check
    if (!currentPath.includes("login.html") && !currentPath.includes("register.html")) {
        protectPage();
    }

    updateHeader();
    updateCartCount(); 

    // --- Rendering Logic ---
    
    // Index Page
    if (document.getElementById('featured-products')) {
        renderFeaturedProducts();
    }
    
    // Shop Page
    if (document.getElementById('all-products')) {
        renderAllProducts();
    }

    // Cart Page
    if (currentPath.includes('cart.html')) {
        renderCartItems();
    }
    
    // Checkout Page
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        renderCheckoutSummary();
        checkoutForm.addEventListener('submit', processCheckout); // IA#2 Q2.b
    }
    
    // Invoice Page
    if (document.getElementById('invoice-details')) {
        renderInvoice();
    }

    // --- Event Listeners ---
    
    // Clear Cart Button (IA#2 Q2.a)
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
});