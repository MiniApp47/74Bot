document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram?.WebApp;
    if (tg) {
        tg.ready();
        tg.expand();
        try {
            tg.setHeaderColor('#09050f');
            tg.setBackgroundColor('#07040c');
        } catch (e) {}
    }

    const ORDER_CONTACT_USERNAME = 'MISTERFREEZE74';
    const ORDER_CONTACT_URL = `https://t.me/${ORDER_CONTACT_USERNAME}`;

const appData = [
         {
        id: 'WEED 🌿',
        name: 'WEED 🌿',
        type: 'WEED 🌿',
        quality: 'WEED 🌿',
        image: 'CategVape.png',
        products: [
                ]

},
         {
        id: 'HASH 🍫',
        name: 'HASH 🍫',
        type: 'HASH 🍫',
        quality: 'HASH 🍫',
        image: 'CategVape.png',
        products: [
                ]

},
     {
        id: 'BLANCHE ⛰',
        name: 'BLANCHE ⛰',
        type: 'BLANCHE ⛰',
        quality: 'BLANCHE ⛰',
        image: 'CategVape.png',
        products: [
                    {
                        id: '🌈 Runtz Californienne',
                        name: '🌈 Runtz Californienne',
                        flag: '🇺🇸',
                        farm: 'Premium Quality 🏆',
                        promoEligible: true,
                        type: 'Weed',
                        image: 'ProductCali.jpg',
                        video: 'VideoCali.mov',
                        description: 'La Runtz californienne est une variété d’exception qui attire immédiatement l’œil avec ses têtes compactes, colorées et ultra résineuses. On y retrouve de magnifiques nuances vert clair, parfois violettes, recouvertes d’une épaisse couche de trichomes brillants qui témoignent de sa qualité premium. ✨🌿  \n\n 👃 Arômes & Goût\n Dès l’ouverture, un parfum sucré et fruité envahit l’air. La Runtz est célèbre pour son goût de bonbons fruités, mêlant des notes de fruits tropicaux, de sucre et de crème douce. Une fumée douce, gourmande et très agréable, parfaite pour les amateurs de saveurs sucrées. 🍬🍓🥭 \n\n ⚡ Effets\n  La Runtz offre un équilibre parfait entre euphorie et détente.\n   🧠 High mental positif – sensation de bien-être et d’euphorie\n  😌 Relaxation corporelle – détente progressive et agréable \n\n  💎 Une variété venue de Californie, très recherchée pour son goût unique, sa puissance et la beauté de ses buds. Parfaite pour ceux qui veulent une expérience savoureuse et de haute qualité.',
                        tarifs: [
                            { weight: '1 bags 3.5G', price: 50.00 }, 
                            { weight: '2 bags', price: 100.00 }, 
                            { weight: '3 bags', price: 130.00 }, 
                            { weight: '5 bags', price: 220.00 }
                        ]
                    }
                ]

},
     {
        id: 'EXTA 💊',
        name: 'EXTA 💊',
        type: 'EXTA 💊',
        quality: 'EXTA 💊',
        image: 'CategVape.png',
        products: [
                ]

},
     {
        id: 'MDMA 🔎',
        name: 'MDMA 🔎',
        type: 'MDMA 🔎',
        quality: 'MDMA 🔎',
        image: 'CategVape.png',
        products: [
                ]

},
     {
        id: 'KETA 🌶️',
        name: 'KETA 🌶️',
        type: 'KETA 🌶️',
        quality: 'KETA 🌶️',
        image: 'CategVape.png',
        products: [
                ]

},

  /*           farms: [
             {
                id: 'BLANCHE ⛰',
                name: 'BLANCHE ⛰',
                badgeText: 'BLANCHE ⛰',
                products: [
                    {
                        id: '🌈 Runtz Californienne',
                        name: '🌈 Runtz Californienne',
                        flag: '🇺🇸',
                        farm: 'Premium Quality 🏆',
                        promoEligible: true,
                        type: 'Weed',
                        image: 'ProductCali.jpg',
                        video: 'VideoCali.mov',
                        description: 'La Runtz californienne est une variété d’exception qui attire immédiatement l’œil avec ses têtes compactes, colorées et ultra résineuses. On y retrouve de magnifiques nuances vert clair, parfois violettes, recouvertes d’une épaisse couche de trichomes brillants qui témoignent de sa qualité premium. ✨🌿  \n\n 👃 Arômes & Goût\n Dès l’ouverture, un parfum sucré et fruité envahit l’air. La Runtz est célèbre pour son goût de bonbons fruités, mêlant des notes de fruits tropicaux, de sucre et de crème douce. Une fumée douce, gourmande et très agréable, parfaite pour les amateurs de saveurs sucrées. 🍬🍓🥭 \n\n ⚡ Effets\n  La Runtz offre un équilibre parfait entre euphorie et détente.\n   🧠 High mental positif – sensation de bien-être et d’euphorie\n  😌 Relaxation corporelle – détente progressive et agréable \n\n  💎 Une variété venue de Californie, très recherchée pour son goût unique, sa puissance et la beauté de ses buds. Parfaite pour ceux qui veulent une expérience savoureuse et de haute qualité.',
                        tarifs: [
                            { weight: '1 bags 3.5G', price: 50.00 }, 
                            { weight: '2 bags', price: 100.00 }, 
                            { weight: '3 bags', price: 130.00 }, 
                            { weight: '5 bags', price: 220.00 }
                        ]
                    }
                ]
            },
            {
                id: 'EXTA 💊',
                name: 'EXTA 💊',
                badgeText: 'EXTA 💊',
                products: [

                ]
            },
            {
                id: 'MDMA 🔎',
                name: 'MDMA 🔎',
                badgeText: 'MDMA 🔎',
                products: [

                ]
            },
            {
                id: 'KETA 🌶️',
                name: 'KETA 🌶️',
                badgeText: 'KETA 🌶️',
                products: [

                ]
            },
           
        ] */
        
    
   /*  {
        id: 'HASH',
        name: '🍫 HASH',
        type: 'Hash',
        quality: '🍫 HASH',
        image: 'CategHash.png', 
        farms: [
          /*   {
                id: 'Extraction',
                name: 'Extraction 🧬',
                badgeText: 'Ice-O-Lator',
                products: [
                    {
                        id: 'RUNTZ 🍬❄️',
                        name: 'RUNTZ 🍬❄️',
                        flag: '🇺🇸',
                        farm: 'HASHPOWER – ICE-O-LATOR FARM 👨🏽‍🔬',
                        promoEligible: true,
                        type: 'Hash',
                        image: 'ProductIceO.jpg',
                        video: 'VideoIceO.mov',
                        description: 'Plonge dans l’excellence du hash moderne avec HASHPOWER Ice-O-Lator Farm – Runtz, une extraction premium conçue pour les vrais connaisseurs. Issue d’une sélection rigoureuse de fleurs Runtz, cette Ice-O-Lator capture toute la puissance aromatique et la richesse des trichomes grâce à une extraction à l’eau glacée qui préserve l’essence pure de la plante.\n\n ✨ Profil & Arômes\n\n La Runtz révèle un bouquet intense et gourmand :\n  • 🍭 notes sucrées et fruitées rappelant les bonbons\n  • 🍇 touches tropicales et crémeuses\n  • 🌿 finale résineuse et légèrement épicée \n Chaque bouffée offre une expérience riche, douce et extrêmement terpènique.  \n\n  ❄️ Extraction Ice-O-Lator  \n\n  La méthode Ice-O-Lator permet de séparer les trichomes à froid pour produire un hash : \n   • ultra pur \n   • riche en terpènes  \n   • texture sableuse à légèrement collante  \n   • fusion lente et propre   \n Résultat : une qualité supérieure avec une puissance et un goût incomparables.    \n\n 🔥 Effets  \n\n La Runtz est réputée pour son équilibre parfait : \n  • montée euphorique et créative \n  • relaxation profonde du corps \n  • sensation smooth et durable  \n Idéal pour chiller, créer ou partager un moment premium.  \n\n 🧊 Signature HASHPOWER \n  • 🌱 100 % Single Source \n  • ❄️ extraction Ice-O-Lator artisanale \n  • 💎 qualité haut de gamme \n  • 🔒 drop limité   \n HASHPOWER – Runtz Ice-O-Lator : la rencontre entre puissance, pureté et saveurs légendaires.',
                        tarifs: [
                            { weight: '1g', price: 35.00 }, 
                            { weight: '5g', price: 160.00 },
                            { weight: '10g', price: 260.00 }, 
                            { weight: '20g', price: 500.00 }, 
                            { weight: '50g', price: 1000.00 }
                    ]
                    }
                ]
            }, 
            {
                id: 'MOUSS',
                name: 'MOUSSEUX 🍯',
                badgeText: 'Classic Sift',
                products: [
                    /* {
                        id: 'mouss-standard',
                        name: 'Jaune Mousseux',
                        flag: '🇲🇦',
                        farm: 'MISTER FREEZE 74 SELECTION',
                        promoEligible: true,
                        type: 'Hash',
                        image: 'ProductDry.jpg',
                        description: 'Texture parfaite, facile à effriter.',
                        tarifs: [{ weight: '10g', price: 40.00 }, { weight: '20g', price: 75.00 }]
                    } 
                ]
            },
            {
                id: 'FROZEN',
                name: 'FROZEN 🧊',
                badgeText: 'Fresh Frozen Tech',
                products: [
                   /*  {
                        id: 'frozen-gmo-marocain',
                        name: '🌿 GMO – Marocain',
                        flag: '🇲🇦',
                        farm: '🏹 MISTER FREEZE 74 SELECTION',
                        promoEligible: true,
                        type: 'Hash',
                        image: 'ProductGmo.jpg',
                        video: 'VideoGmo.mov',
                        description: 'Un concentré issu de fleurs GMO travaillées en fresh frozen, pour préserver au maximum les terpènes et la puissance aromatique.\nRésultat : un produit riche, expressif et ultra savoureux.\n\n👃 Arômes\nDès l’ouverture, c’est intense et profond :\n🧄 Notes aillées / funky typiques de la GMO\n🌍 Fond terreux et légèrement épicé\n🌲 Pointe résineuse bien marquée\n🍪 Subtile touche sucrée en arrière-plan\n\nProfil terpène puissant, qui reste longtemps en bouche.\n\n👁 Aspect\n• Texture compacte et résineuse\n• Couleur brune à dorée selon la méthode\n• Surface légèrement brillante\n• Odeur forte et caractéristique\n\nOn sent le travail sur la matière première, surtout avec le procédé fresh frozen qui conserve les arômes.\n\n💨 Effets\n⚡ Montée cérébrale marquée\n😌 Relaxation corporelle progressive\n🌙 Idéal en fin de journée\n\nPuissant, enveloppant, avec un vrai caractère.',
                        tarifs: [
                            { weight: '5g', price: 60.00 },
                            { weight: '10g', price: 110.00 },
                            { weight: '20g', price: 200.00 },
                            { weight: '50g', price: 400.00 },
                            { weight: '100g', price: 700.00 }
                        ]
                    }, */
                    /* {
                        id: 'grap-gaz-frozen-premium',
                        name: '🍇GRAP GAZ⛽️X BLEU PINT🫐',
                        flag: '🇲🇦',
                        farm: 'INTHEWEST FARM',
                        promoEligible: true,
                        type: 'Hash',
                        image: 'ProductGrap.jpg',
                        video: 'VideoGrap.mov',
                        description: 'Un produit marocain haut de gamme, travaillé avec soin et précision.\nFrozen Premium incarne la nouvelle génération : pureté, puissance et finition premium.\n\n🧊 Profil frais & clean\nNotes glacées, légèrement sucrées, avec une touche résineuse intense.\nUne fumée douce, épaisse et parfaitement maîtrisée.\n\n💎 Qualité Premium – In The West Farm\nAspect givré, texture compacte, travail soigné et sélection rigoureuse.\n\n🔥 Effet profond & chill\nRelaxation intense, vibes posées, idéal pour décrocher et profiter du moment.\n\nFrozen Premium\n👉 Fraîcheur extrême\n👉 Savoir-faire marocain 🇲🇦\n👉 Niveau premium garanti',
                        tarifs: [
                            { weight: '5g', price: 80.00 },
                            { weight: '10g', price: 150.00 },
                            { weight: '20g', price: 290.00 },
                            { weight: '30g', price: 420.00 },
                            { weight: '50g', price: 550.00 }
                        ]
                    } 
                ]
            },
            {
                id: 'STATIC',
                name: 'STATIC 🇲🇦⚡️',
                badgeText: 'High Voltage',
                products: [
                    /* {
                        id: 'Tangie 🍊',
                        name: 'Tangie 🍊',
                        flag: '🇲🇦',
                        farm: 'PJS Farm 🌿',
                        promoEligible: true,
                        type: 'STATIC',
                        image: 'ProductTangie.jpg',
                        video: 'VideoTangie.mov',
                        description: 'Plasma Static ⚡❄️ \n\n Une décharge d’agrumes sous haute tension. ⚡\n\n Issu d’un travail de précision signé PJS Farm, Plasma Static Tangie repousse les standards avec une extraction maîtrisée et un rendu visuel aussi pur que spectaculaire.\n\n  Dès l’ouverture 💥, le profil aromatique explose : zeste d’orange fraîche 🍊, mandarine juteuse, touches sucrées et légèrement acidulées qui rappellent un jus d’agrumes fraîchement pressé. La signature Tangie s’exprime pleinement — vive, lumineuse et incroyablement addictive.\n\n La texture est fine, brillante et aérienne ✨, avec un aspect statique saisissant qui témoigne d’un produit hautement qualitatif. Chaque détail respire la fraîcheur, la précision et le savoir-faire artisanal.\n\nPlasma Static Tangie, c’est l’équilibre parfait entre intensité aromatique, élégance visuelle et pureté extrême.\n Un produit vibrant, énergisant et résolument premium ⚡🍊💎',
                        tarifs: [
                            { weight: '1g', price: 35.00 },
                            { weight: '5g', price: 150.00 },
                            { weight: '10g', price: 250.00 },
                            { weight: '20g', price: 480.00 },
                            { weight: '50g', price: 1000.00 }
                        ]
                    }, 
                ]
            },
        ]
    },
    {
        id: 'WEED',
        name: '🍀 WEED',
        type: 'Weed',
        quality: '🍀 WEED',
        image: 'CategWeed.png',
        farms: [
            {
                id: 'CALI_US',
                name: '🇺🇸 CALI U.S',
                badgeText: 'Import USA',
                products: [
                    /* {
                        id: '🌈 Runtz Californienne',
                        name: '🌈 Runtz Californienne',
                        flag: '🇺🇸',
                        farm: 'Premium Quality 🏆',
                        promoEligible: true,
                        type: 'Weed',
                        image: 'ProductCali.jpg',
                        video: 'VideoCali.mov',
                        description: 'La Runtz californienne est une variété d’exception qui attire immédiatement l’œil avec ses têtes compactes, colorées et ultra résineuses. On y retrouve de magnifiques nuances vert clair, parfois violettes, recouvertes d’une épaisse couche de trichomes brillants qui témoignent de sa qualité premium. ✨🌿  \n\n 👃 Arômes & Goût\n Dès l’ouverture, un parfum sucré et fruité envahit l’air. La Runtz est célèbre pour son goût de bonbons fruités, mêlant des notes de fruits tropicaux, de sucre et de crème douce. Une fumée douce, gourmande et très agréable, parfaite pour les amateurs de saveurs sucrées. 🍬🍓🥭 \n\n ⚡ Effets\n  La Runtz offre un équilibre parfait entre euphorie et détente.\n   🧠 High mental positif – sensation de bien-être et d’euphorie\n  😌 Relaxation corporelle – détente progressive et agréable \n\n  💎 Une variété venue de Californie, très recherchée pour son goût unique, sa puissance et la beauté de ses buds. Parfaite pour ceux qui veulent une expérience savoureuse et de haute qualité.',
                        tarifs: [
                            { weight: '1 bags 3.5G', price: 50.00 }, 
                            { weight: '2 bags', price: 100.00 }, 
                            { weight: '3 bags', price: 130.00 }, 
                            { weight: '5 bags', price: 220.00 }
                        ]
                    } 
                ]
            },
            {
                id: 'CALI_CAN',
                name: '🇨🇦 CALI CANADIENNE',
                badgeText: 'Canada Grade A',
                products: [
                   /*  {
                        id: 'cali-can-1',
                        name: 'Pink Kush',
                        flag: '🇨🇦',
                        farm: 'CANADIAN CRAFT',
                        promoEligible: true,
                        type: 'Weed',
                        image: 'ProductCali.jpg',
                        description: 'Qualité canadienne supérieure.',
                        tarifs: [{ weight: '5g', price: 50.00 }, { weight: '10g', price: 90.00 }]
                    } 
                ]
            }
        ]
    }, */
];
       /*  // ===================================
        // 3. EXTRACT (Direct Produits)
        // ===================================
        {
            id: 'EXTRACT',
            name: '🍯 EXTRACT',
            type: 'Extract',
            quality: '🍯 EXTRACT',
            image: 'CategExtra.png',
            // Pas de "farms", on met direct "products"
            products: [
                {
                    id: 'live-rosin',
                    name: 'Live Rosin 90u',
                    flag: '🧬',
                    farm: 'LABORATORY',
                    promoEligible: false,
                    type: 'Extract',
                    image: 'ProductRosin.jpg',
                    video: '',
                    description: 'Extraction sans solvant.',
                    tarifs: [
                        { weight: '1g', price: 60.00 },
                        { weight: '2g', price: 110.00 }
                    ]
                }
            ]
        },

        // ===================================
        // 4. EDIBLES (Direct Produits)
        // ===================================
        {
            id: 'EDIBLES',
            name: '🍬 EDIBLES',
            type: 'Edibles',
            quality: '🍬 EDIBLES',
            image: 'CategEdib.png',
            products: [
                {
                    id: 'gummies',
                    name: 'Gummies THC',
                    flag: '🍬',
                    farm: 'KITCHEN',
                    promoEligible: true,
                    type: 'Edibles',
                    image: 'ProductGummies.jpg',
                    video: '',
                    description: 'Paquet de 10x 50mg.',
                    tarifs: [
                        { weight: '1 Pqt', price: 25.00 },
                        { weight: '2 Pqt', price: 45.00 }
                    ]
                }
            ]
        } */

    // ============================================================
    //  MISTER FREEZE 74 — UI inspirée de la vidéo fournie
    // ============================================================
    let cart = loadJSON(storageKey('cart'), []);
    let orders = loadJSON(storageKey('orders'), []);
    let activeCategory = 'all';
    let searchTerm = '';
    let paymentMethod = 'Espèce';
    let selectedProduct = null;

    const STATUS_LABELS = {
        new: '🆕 Reçue',
        accepted: '✅ Acceptée',
        cancelled: '❌ Annulée',
        preparation: '📦 Préparation',
        delivery: '🚚 En livraison',
        ready: '📍 Prête sur place',
        done: '✔️ Terminée'
    };

    const TIER_RULES = [
        { name: 'Bronze', min: 0, next: 5, emoji: '🥉' },
        { name: 'Silver', min: 5, next: 10, emoji: '🥈' },
        { name: 'Gold', min: 10, next: 20, emoji: '🥇' },
        { name: 'Diamond', min: 20, next: null, emoji: '💎' }
    ];

    function telegramUser() {
        return tg?.initDataUnsafe?.user || {};
    }

    function storageKey(name) {
        const uid = telegramUser().id || 'guest';
        return `mf74_${uid}_${name}`;
    }

    function loadJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    function saveState() {
        localStorage.setItem(storageKey('cart'), JSON.stringify(cart));
        localStorage.setItem(storageKey('orders'), JSON.stringify(orders));
    }

    function escapeHTML(value) {
        return String(value ?? '')
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }

    function money(value) {
        return `${Number(value || 0).toFixed(2).replace('.', ',')} €`;
    }

    function haptic(type='selection') {
        try {
            if (!tg?.HapticFeedback) return;
            if (type === 'success' || type === 'error' || type === 'warning') {
                tg.HapticFeedback.notificationOccurred(type);
            } else {
                tg.HapticFeedback.selectionChanged();
            }
        } catch (e) {}
    }

    let toastTimer;
    function toast(message) {
        const el = document.getElementById('toast');
        if (!el) return;
        clearTimeout(toastTimer);
        el.textContent = message;
        el.classList.add('show');
        toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
    }

    function categoryIcon(category) {
        const value = `${category.name || ''} ${category.type || ''}`.toLowerCase();
        if (value.includes('fleur') || value.includes('weed')) return '🌿';
        if (value.includes('résine') || value.includes('resine') || value.includes('hash')) return '🍫';
        if (value.includes('blanche') || value.includes('blanche')) return '💨';
        if (value.includes('exta')) return '🍬';
        if (value.includes('mdma')) return '💎';
        if (value.includes('keta')) return '🔥';
        return '✨';
    }

    function flattenProducts() {
        const products = [];
        appData.forEach(category => {
            if (Array.isArray(category.products)) {
                category.products.forEach(product => products.push({...product, _categoryId: category.id, _categoryName: category.name}));
            }
            if (Array.isArray(category.farms)) {
                category.farms.forEach(farm => {
                    (farm.products || []).forEach(product => products.push({
                        ...product,
                        _categoryId: category.id,
                        _categoryName: category.name,
                        _farmId: farm.id
                    }));
                });
            }
        });
        return products;
    }

    function productFormats(product) {
        return Array.isArray(product.tarifs) ? product.tarifs.length : 0;
    }

    function allProductsFiltered() {
        return flattenProducts().filter(product => {
            const categoryMatch = activeCategory === 'all' || product._categoryId === activeCategory;
            const query = searchTerm.trim().toLowerCase();
            const searchMatch = !query || `${product.name || ''} ${product.farm || ''} ${product.description || ''}`.toLowerCase().includes(query);
            return categoryMatch && searchMatch;
        });
    }

    function getProductById(productId) {
        return flattenProducts().find(p => String(p.id) === String(productId));
    }

    function cartCount() {
        return cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    }

    function cartTotal() {
        return cart.reduce((sum, item) => sum + Number(item.totalPrice || 0), 0);
    }

    function updateCartBadge() {
        document.querySelectorAll('[data-cart-count]').forEach(el => {
            el.textContent = cartCount();
            el.classList.toggle('is-empty', cartCount() === 0);
        });
    }

    function renderShopHeader() {
        const user = telegramUser();
        const label = document.getElementById('shop-user-subtitle');
        if (label) {
            label.textContent = user.username ? `@${user.username} • 18+` : 'Coffee Shop • 18+';
        }
    }

    function renderHome() {
        const popular = flattenProducts().slice(0, 6);
        const popularEl = document.getElementById('popular-products');
        if (popularEl) {
            popularEl.innerHTML = popular.length
                ? popular.map(productCardHTML).join('')
                : `<div class="empty-inline">Les produits populaires apparaîtront ici dès qu'ils seront ajoutés au catalogue.</div>`;
        }

        const categories = document.getElementById('home-categories');
        if (categories) {
            categories.innerHTML = appData.map(category => `
                <button class="category-tile" data-open-category="${escapeHTML(category.id)}">
                    <span class="category-emoji">${categoryIcon(category)}</span>
                    <strong>${escapeHTML(category.name || category.id)}</strong>
                    <small>${escapeHTML(category.type || 'Sélection')}</small>
                </button>
            `).join('');
        }
    }

    function productCardHTML(product) {
        const firstPrice = product?.tarifs?.[0]?.price;
        return `
            <article class="product-card-v2">
                <button class="product-image-wrap" data-product-id="${escapeHTML(product.id)}">
                    <img src="${escapeHTML(product.image || 'Logo.jpg')}" alt="${escapeHTML(product.name || 'Produit')}" loading="lazy">
                    <span class="format-pill">${productFormats(product)} format${productFormats(product) > 1 ? 's' : ''}</span>
                </button>
                <div class="product-card-body">
                    <strong>${escapeHTML(product.name || 'Produit')}</strong>
                    <small>${escapeHTML(product.farm || product._categoryName || '')}</small>
                    <div class="product-price-line">
                        <span>${firstPrice != null ? `À partir de ${money(firstPrice)}` : 'Tarif à venir'}</span>
                        <span class="age-badge">18+</span>
                    </div>
                    <button class="gradient-btn small" data-product-id="${escapeHTML(product.id)}">Voir le produit</button>
                </div>
            </article>
        `;
    }

    function renderCatalogue() {
        const chips = document.getElementById('catalog-chips');
        if (chips) {
            chips.innerHTML = [
                `<button class="filter-chip ${activeCategory === 'all' ? 'active' : ''}" data-filter-category="all">Tout</button>`,
                ...appData.map(category => `
                    <button class="filter-chip ${activeCategory === category.id ? 'active' : ''}" data-filter-category="${escapeHTML(category.id)}">
                        ${escapeHTML(category.name || category.id)}
                    </button>
                `)
            ].join('');
        }

        const grid = document.getElementById('catalog-grid');
        const products = allProductsFiltered();
        if (grid) {
            grid.innerHTML = products.length
                ? products.map(productCardHTML).join('')
                : `<div class="empty-state"><span>❄️</span><strong>Aucun produit</strong><p>Cette sélection est vide pour le moment.</p></div>`;
        }
    }

    function openProduct(productId) {
        const product = getProductById(productId);
        if (!product) return;
        selectedProduct = product;
        const modal = document.getElementById('product-modal');
        const body = document.getElementById('product-modal-body');
        if (!modal || !body) return;

        const priceRows = (product.tarifs || []).map(t => `
            <div class="price-row-v2">
                <div>
                    <strong>${escapeHTML(t.weight)}</strong>
                    <span>${money(t.price)}</span>
                </div>
                <button class="add-cart-round" data-add-product="${escapeHTML(product.id)}" data-weight="${escapeHTML(t.weight)}" data-price="${Number(t.price)}">+</button>
            </div>
        `).join('');

        body.innerHTML = `
            <div class="product-detail-visual">
                ${product.video ? `<video controls playsinline poster="${escapeHTML(product.image || '')}" src="${escapeHTML(product.video)}"></video>` : `<img src="${escapeHTML(product.image || 'Logo.jpg')}" alt="${escapeHTML(product.name)}">`}
            </div>
            <div class="eyebrow">${escapeHTML(product._categoryName || 'SÉLECTION')}</div>
            <h2>${escapeHTML(product.name || '')}</h2>
            <p class="muted">${escapeHTML(product.farm || '')}</p>
            ${product.description ? `<p class="product-description-v2">${escapeHTML(product.description)}</p>` : ''}
            <div class="price-list-v2">${priceRows || '<p class="muted">Tarifs à venir.</p>'}</div>
        `;
        modal.classList.add('open');
        haptic();
    }

    function addToCart(productId, weight, price) {
        const product = getProductById(productId);
        if (!product) return;
        const id = `${productId}::${weight}`;
        const existing = cart.find(i => i.id === id);
        if (existing) {
            existing.quantity += 1;
            existing.totalPrice = existing.quantity * existing.unitPrice;
        } else {
            cart.push({
                id,
                productId,
                name: product.name,
                image: product.image,
                weight,
                quantity: 1,
                unitPrice: Number(price),
                totalPrice: Number(price)
            });
        }
        saveState();
        updateCartBadge();
        renderCart();
        haptic('success');
        toast('✅ Ajouté au panier');
    }

    function changeQty(id, delta) {
        const item = cart.find(i => i.id === id);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
        else item.totalPrice = item.quantity * item.unitPrice;
        saveState();
        updateCartBadge();
        renderCart();
    }

    function renderCart() {
        const list = document.getElementById('cart-items');
        const total = document.getElementById('cart-subtotal');
        if (total) total.textContent = money(cartTotal());

        if (list) {
            list.innerHTML = cart.length ? cart.map(item => `
                <div class="cart-item-v2">
                    <img src="${escapeHTML(item.image || 'Logo.jpg')}" alt="">
                    <div class="cart-item-main">
                        <strong>${escapeHTML(item.name)}</strong>
                        <small>${escapeHTML(item.weight)} • ${money(item.unitPrice)}</small>
                        <span>${money(item.totalPrice)}</span>
                    </div>
                    <div class="qty-control">
                        <button data-cart-delta="-1" data-cart-id="${escapeHTML(item.id)}">−</button>
                        <b>${item.quantity}</b>
                        <button data-cart-delta="1" data-cart-id="${escapeHTML(item.id)}">+</button>
                    </div>
                </div>
            `).join('') : `<p class="cart-empty-copy">Votre panier est vide.</p>`;
        }

        const user = telegramUser();
        const telegramLine = document.getElementById('cart-telegram-identity');
        if (telegramLine) {
            const username = user.username ? `@${user.username}` : 'Aucun @';
            telegramLine.textContent = `Telegram : ${username} · ID ${user.id || '—'}`;
        }
        const name = document.getElementById('customer-name');
        if (name && !name.value) {
            name.value = [user.first_name, user.last_name].filter(Boolean).join(' ');
        }
        updateModeUI();
    }

    function updateModeUI() {
        const select = document.getElementById('delivery-mode');
        const address = document.getElementById('delivery-address');
        const note = document.getElementById('mode-note');
        const mode = select?.value || 'Retrait sur place';
        const delivery = mode === 'Livraison';
        if (address) {
            address.hidden = !delivery;
            address.required = delivery;
        }
        if (note) {
            note.textContent = delivery
                ? 'L’adresse et les modalités de livraison seront confirmées après validation.'
                : 'L’adresse de retrait sera envoyée en privé après validation.';
        }
    }

    function createClientOrderId() {
        const d = new Date();
        const y = d.getFullYear();
        const m = String(d.getMonth()+1).padStart(2,'0');
        const day = String(d.getDate()).padStart(2,'0');
        const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
        return `MF-${y}${m}${day}-${rand}`;
    }

    function buildPayload(orderId) {
        const user = telegramUser();
        const mode = document.getElementById('delivery-mode')?.value || 'Retrait sur place';
        return {
            type: 'order',
            client_order_id: orderId,
            mode: mode === 'Retrait sur place' ? 'Sur place' : 'Livraison',
            address: (document.getElementById('delivery-address')?.value || '').trim(),
            phone: (document.getElementById('customer-phone')?.value || '').trim(),
            comment: (document.getElementById('customer-comment')?.value || '').trim(),
            payment: paymentMethod,
            total: Number(cartTotal().toFixed(2)),
            customer_name: (document.getElementById('customer-name')?.value || '').trim(),
            items: cart.map(item => ({
                name: item.name,
                weight: item.weight,
                quantity: item.quantity,
                unitPrice: Number(item.unitPrice.toFixed(2)),
                totalPrice: Number(item.totalPrice.toFixed(2))
            }))
        };
    }

    function submitOrder() {
        if (!cart.length) {
            toast('❌ Ton panier est vide.');
            return;
        }
        const phone = (document.getElementById('customer-phone')?.value || '').trim();
        const modeSelect = document.getElementById('delivery-mode');
        const mode = modeSelect?.value || 'Retrait sur place';
        const address = (document.getElementById('delivery-address')?.value || '').trim();

        if (mode === 'Livraison' && !address) {
            toast('📍 Indique ton adresse de livraison.');
            document.getElementById('delivery-address')?.focus();
            return;
        }

        const orderId = createClientOrderId();
        const payload = buildPayload(orderId);
        const raw = JSON.stringify(payload);
        if (raw.length > 3900) {
            toast('Commande trop volumineuse.');
            return;
        }

        if (!tg || typeof tg.sendData !== 'function') {
            toast('⚠️ Ouvre la boutique depuis le bouton /start.');
            return;
        }

        try {
            tg.sendData(raw);
            orders.unshift({
                order_id: orderId,
                created_at: new Date().toISOString(),
                status: 'new',
                total: payload.total,
                mode: payload.mode,
                items: payload.items
            });
            orders = orders.slice(0, 50);
            cart = [];
            saveState();
            updateCartBadge();
            renderCart();
            renderOrders();
            renderVIP();
            haptic('success');
            toast('✅ Commande envoyée !');
            setTab('orders');
        } catch (e) {
            console.error(e);
            toast('⚠️ Impossible d’envoyer la commande.');
        }
    }

    function renderOrders() {
        const container = document.getElementById('orders-list');
        if (!container) return;
        if (!orders.length) {
            container.innerHTML = `<div class="empty-state big"><span>🧾</span><strong>Aucune commande.</strong><p>Les commandes envoyées depuis cette Mini App apparaîtront ici.</p></div>`;
            return;
        }
        container.innerHTML = orders.map(order => `
            <article class="order-card">
                <div class="order-card-top">
                    <div><span class="eyebrow">COMMANDE</span><strong>${escapeHTML(order.order_id)}</strong></div>
                    <span class="status-pill status-${escapeHTML(order.status || 'new')}">${STATUS_LABELS[order.status] || STATUS_LABELS.new}</span>
                </div>
                <div class="order-meta">
                    <span>${new Date(order.created_at).toLocaleDateString('fr-FR')}</span>
                    <span>${escapeHTML(order.mode || '')}</span>
                    <b>${money(order.total)}</b>
                </div>
                <div class="order-products">${(order.items || []).slice(0,3).map(i => `<span>${escapeHTML(i.name)} · ${escapeHTML(i.weight)} × ${i.quantity}</span>`).join('')}</div>
            </article>
        `).join('');
    }

    function completedCount() {
        return orders.filter(o => o.status === 'done').length;
    }

    function currentTier(count) {
        return [...TIER_RULES].reverse().find(t => count >= t.min) || TIER_RULES[0];
    }

    function renderVIP() {
        const count = completedCount();
        const tier = currentTier(count);
        const tierName = document.getElementById('vip-level');
        const tierEmoji = document.getElementById('vip-medal');
        const completed = document.getElementById('vip-completed');
        const progress = document.getElementById('vip-progress');
        const copy = document.getElementById('vip-copy');
        const bar = document.getElementById('vip-progress-bar');

        if (tierName) tierName.textContent = tier.name;
        if (tierEmoji) tierEmoji.textContent = tier.emoji;
        if (completed) completed.textContent = count;

        if (tier.next == null) {
            if (progress) progress.textContent = 'MAX';
            if (copy) copy.textContent = 'Niveau maximum atteint.';
            if (bar) bar.style.width = '100%';
        } else {
            const inTier = count - tier.min;
            const span = tier.next - tier.min;
            const remaining = tier.next - count;
            if (progress) progress.textContent = `${inTier} / ${span}`;
            if (copy) copy.textContent = `Encore ${remaining} commande${remaining > 1 ? 's' : ''} terminée${remaining > 1 ? 's' : ''} pour atteindre le niveau suivant.`;
            if (bar) bar.style.width = `${Math.max(0, Math.min(100, (inTier/span)*100))}%`;
        }
    }

    function syncOrderFromURL() {
        const params = new URLSearchParams(location.search);
        const orderId = params.get('sync_order');
        const status = params.get('status');
        if (orderId && status && STATUS_LABELS[status]) {
            const order = orders.find(o => o.order_id === orderId);
            if (order) {
                order.status = status;
                order.updated_at = new Date().toISOString();
                saveState();
            }
        }
        return params.get('tab');
    }

    function setTab(tab) {
        document.querySelectorAll('.app-page').forEach(page => page.classList.remove('active'));
        document.querySelectorAll('.bottom-nav-v2 button').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`page-${tab}`)?.classList.add('active');
        document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');

        if (tab === 'home') renderHome();
        if (tab === 'catalog') renderCatalogue();
        if (tab === 'cart') renderCart();
        if (tab === 'orders') renderOrders();
        if (tab === 'vip') renderVIP();

        window.scrollTo({ top: 0, behavior: 'smooth' });
        haptic();
    }

    function openDrawer(open=true) {
        document.getElementById('side-drawer')?.classList.toggle('open', open);
        document.getElementById('drawer-backdrop')?.classList.toggle('open', open);
    }

    function initEvents() {
        document.addEventListener('click', (e) => {
            const tab = e.target.closest('[data-tab]');
            if (tab) {
                setTab(tab.dataset.tab);
                return;
            }

            const cat = e.target.closest('[data-open-category]');
            if (cat) {
                activeCategory = cat.dataset.openCategory;
                setTab('catalog');
                renderCatalogue();
                return;
            }

            const chip = e.target.closest('[data-filter-category]');
            if (chip) {
                activeCategory = chip.dataset.filterCategory;
                renderCatalogue();
                return;
            }

            const productBtn = e.target.closest('[data-product-id]');
            if (productBtn) {
                openProduct(productBtn.dataset.productId);
                return;
            }

            const add = e.target.closest('[data-add-product]');
            if (add) {
                addToCart(add.dataset.addProduct, add.dataset.weight, Number(add.dataset.price));
                return;
            }

            const delta = e.target.closest('[data-cart-delta]');
            if (delta) {
                changeQty(delta.dataset.cartId, Number(delta.dataset.cartDelta));
                return;
            }

            if (e.target.closest('#open-menu')) openDrawer(true);
            if (e.target.closest('#close-menu') || e.target.closest('#drawer-backdrop')) openDrawer(false);
            if (e.target.closest('#close-product')) document.getElementById('product-modal')?.classList.remove('open');
            if (e.target.closest('#hero-catalog-btn')) setTab('catalog');
            if (e.target.closest('[data-hero-mode]')) {
                const mode = e.target.closest('[data-hero-mode]').dataset.heroMode;
                setTab('cart');
                const select = document.getElementById('delivery-mode');
                if (select) {
                    select.value = mode;
                    updateModeUI();
                }
            }
            if (e.target.closest('#submit-order')) submitOrder();
            if (e.target.closest('#open-contact')) {
                if (tg?.openTelegramLink) tg.openTelegramLink(ORDER_CONTACT_URL);
                else location.href = ORDER_CONTACT_URL;
            }
        });

        document.getElementById('catalog-search')?.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            renderCatalogue();
        });
        document.getElementById('delivery-mode')?.addEventListener('change', updateModeUI);
        document.querySelectorAll('[data-payment]').forEach(btn => btn.addEventListener('click', () => {
            paymentMethod = btn.dataset.payment;
            document.querySelectorAll('[data-payment]').forEach(x => x.classList.toggle('active', x === btn));
        }));
    }

    function init() {
        renderShopHeader();
        updateCartBadge();
        renderHome();
        renderCatalogue();
        renderCart();
        renderOrders();
        renderVIP();
        initEvents();

        const requestedTab = syncOrderFromURL();
        renderOrders();
        renderVIP();
        setTab(['home','catalog','vip','cart','orders'].includes(requestedTab) ? requestedTab : 'home');
    }

    init();
});
