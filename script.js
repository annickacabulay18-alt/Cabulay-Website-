
const menuItems = {

    cakes: [
        {
            name: "Chocolate Cake",
            description: "Rich and moist chocolate cake.",
            price: 120,
            image: "Images/Choc.jpeg"
        },
        {
            name: "Strawberry Shortcake",
            description: "Soft cake with fresh strawberries and cream.",
            price: 135,
            image: "Images/Straw.jpeg"
        },
        {
            name: "Red Velvet Cake",
            description: "Classic red velvet with cream cheese frosting.",
            price: 140,
            image: "Images/Red.jpeg"
        },
        {
            name: "Cheesecake",
            description: "Creamy cheesecake with a buttery crust.",
            price: 150,
            image: "Images/Cheese.jpeg"
        },
        {
            name: "Ube Cake",
            description: "Soft Filipino-inspired purple yam cake.",
            price: 125,
            image: "Images/Ube Chiffon.jpeg"
        },
        {
            name: "Carrot Cake",
            description: "Moist spiced cake with cream cheese icing.",
            price: 130,
            image: "Images/Carrot.jpeg"
        },
        {
            name: "Black Forest Cake",
            description: "Chocolate cake with cream and cherries.",
            price: 145,
            image: "Images/Black.jpeg"
        },
        {
            name: "Lemon Cake",
            description: "Light cake with a refreshing lemon flavor.",
            price: 115,
            image: "Images/Lemon.jpeg"
        },
        {
            name: "Mango Cake",
            description: "Soft cake with sweet mango cream.",
            price: 140,
            image: "Images/Mango.jpeg"
        },
        {
            name: "Tiramisu",
            description: "Coffee-flavored dessert with creamy layers.",
            price: 155,
            image: "Images/Tira.jpeg"
        }
    ],

    pastries: [
        {
            name: "Croissant",
            description: "Flaky and buttery French pastry.",
            price: 75,
            image: "Images/croi.jpeg"
        },
        {
            name: "Cinnamon Roll",
            description: "Soft roll with cinnamon sugar and icing.",
            price: 85,
            image: "Images/Cinna.jpeg"
        },
        {
            name: "Blueberry Muffin",
            description: "Soft muffin filled with blueberries.",
            price: 65,
            image: "Images/Muff.jpeg"
        },
        {
            name: "Chocolate Chip Cookie",
            description: "Freshly baked cookie with chocolate chips.",
            price: 45,
            image: "Images/CCC.jpeg"
        },
        {
            name: "Banana Bread",
            description: "Moist homemade bread with ripe bananas.",
            price: 60,
            image: "Images/BB.jpeg"
        },
        {
            name: "Cheese Danish",
            description: "Flaky pastry with creamy cheese filling.",
            price: 80,
            image: "Images/CD.jpeg"
        },
        {
            name: "Apple Pie",
            description: "Golden crust filled with cinnamon apples.",
            price: 95,
            image: "Images/AP.jpeg"
        },
        {
            name: "Egg Tart",
            description: "Buttery crust with smooth egg custard.",
            price: 55,
            image: "Images/ET.jpeg"
        },
        {
            name: "Ensaymada",
            description: "Soft Filipino bread topped with butter and cheese.",
            price: 50,
            image: "Images/Ensay.jpeg"
        },
        {
            name: "Donuts",
            description: "Fluffy donut with your sweet choice.",
            price: 50,
            image: "Images/Donuts.jpeg"
        }
    ],

    drinks: [
        {
            name: "Iced Coffee",
            description: "Chilled coffee with a smooth flavor.",
            price: 90,
            image: "Images/ico.jpeg"
        },
        {
            name: "Caramel Macchiato",
            description: "Espresso mixed with milk and caramel.",
            price: 120,
            image: "Images/cm.jpeg"
        },
        {
            name: "Matcha Latte",
            description: "Earthy matcha blended with creamy milk.",
            price: 115,
            image: "Images/ml.jpeg"
        },
        {
            name: "Iced Chocolate",
            description: "Sweet chocolate drink served cold.",
            price: 100,
            image: "Images/ic.jpeg"
        },
        {
            name: "Strawberry Milk",
            description: "Refreshing milk drink with strawberry flavor.",
            price: 95,
            image: "Images/sm.jpeg"
        },
        {
            name: "Vanilla Latte",
            description: "Espresso and milk with sweet vanilla.",
            price: 110,
            image: "Images/vl.jpeg"
        },
        {
            name: "Fresh Lemonade",
            description: "Sweet and tangy refreshing lemonade.",
            price: 75,
            image: "Images/fl.jpeg"
        },
        {
            name: "Blueberry Smoothie",
            description: "Blended blueberries with creamy yogurt.",
            price: 120,
            image: "Images/bs.jpeg"
        },
        {
            name: "Iced Americano",
            description: "Bold espresso served over ice.",
            price: 85,
            image: "Images/ia.jpeg"
        },
        {
            name: "Mango Smoothie",
            description: "Sweet mango blended into a creamy drink.",
            price: 120,
            image: "Images/ms.jpeg"
        }
      

      
    ]

};




// SHOPPING CART
let cart = {};


// DISPLAY SELECTED CATEGORY
function showCategory(category) {

    const menuContainer = document.querySelector(".menu-container");
    const fullMenu = document.getElementById("full-menu");
    const productList = document.getElementById("product-list");

    const title = document.getElementById("menu-title");
    const description = document.getElementById("menu-description");

    menuContainer.style.display = "none";
    fullMenu.style.display = "block";

    title.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    description.textContent = "Choose something delicious from our menu.";

    const products = menuItems[category];

    // DISPLAY PRODUCTS
    productList.innerHTML = products.map(function(item, index) {

        const unit = category === "cakes" ? " per slice" : "";

        return `
            <div class="product-card">

                <img src="${item.image}" alt="${item.name}"
                     onerror="this.onerror=null;this.src='Images/Cakes.jpeg';">

                <div class="product-info">

                    <h3>${item.name}</h3>

                    <p>${item.description}</p>

                    <span>₱${item.price.toFixed(2)}${unit}</span>

                    <button class="add-to-cart-button"
                        onclick="addToCart('${category}', ${index})">
                        Add Order
                    </button>

                </div>

            </div>
        `;

    }).join("");

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}


// RETURN TO ORIGINAL CATEGORY CARDS
function showOverview() {

    const menuContainer = document.querySelector(".menu-container");
    const fullMenu = document.getElementById("full-menu");

    const title = document.getElementById("menu-title");
    const description = document.getElementById("menu-description");

    fullMenu.style.display = "none";
    menuContainer.style.display = "grid";

    title.textContent = "Our Little Treats";

    description.textContent =
        "Something sweet, something refreshing, something just for you.";

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}


// ADD PRODUCT
function addToCart(category, index) {

    const product = menuItems[category][index];
    const id = category + "-" + index;

    if (cart[id]) {

        cart[id].quantity++;

    } else {

        cart[id] = {
            name: product.name,
            price: product.price,
            quantity: 1
        };

    }

    updateCart();

    alert(product.name + " added to your cart!");

}


// UPDATE QUANTITY
function updateCartItem(id, change) {

    if (!cart[id]) return;

    cart[id].quantity += change;

    if (cart[id].quantity <= 0) {
        delete cart[id];
    }

    updateCart();

}


// DISPLAY CART
function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    let total = 0;
    let count = 0;

    const items = Object.entries(cart);

    if (items.length === 0) {

        cartItems.innerHTML = "<p>Your cart is currently empty.</p>";

    } else {

        cartItems.innerHTML = items.map(function(entry) {

            const id = entry[0];
            const item = entry[1];

            const subtotal = item.price * item.quantity;

            total += subtotal;
            count += item.quantity;

            return `
                <div class="cart-item">

                    <div class="cart-item-info">

                        <h3>${item.name}</h3>

                        <p>₱${item.price.toFixed(2)} each</p>

                        <p>Subtotal: ₱${subtotal.toFixed(2)}</p>

                    </div>

                    <div class="cart-controls">

                        <button onclick="updateCartItem('${id}', -1)">
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="updateCartItem('${id}', 1)">
                            +
                        </button>

                    </div>

                </div>
            `;

        }).join("");

    }

    cartCount.textContent = count;
    cartTotal.textContent = total.toFixed(2);

}


// CHECKOUT
function checkout() {

    const items = Object.values(cart);

    if (items.length === 0) {

        alert("Your cart is empty! Please add something first.");
        return;

    }

    let orderDetails = "";
    let total = 0;

    items.forEach(function(item) {

        const subtotal = item.price * item.quantity;

        orderDetails +=
            item.name + " x" + item.quantity +
            " - ₱" + subtotal.toFixed(2) + "\n";

        total += subtotal;

    });

    const customerName = prompt("Please enter your name:");

    if (!customerName || customerName.trim() === "") {
        alert("Please enter your name to continue.");
        return;
    }

    const contactNumber = prompt("Please enter your contact number:");

    if (!contactNumber || contactNumber.trim() === "") {
        alert("Please enter your contact number to continue.");
        return;
    }

    const subject = "Cafe Order - " + customerName;

    const body =
        "Hello Little Moments Cafe!\n\n" +
        "I would like to place an order.\n\n" +
        "Customer Name: " + customerName + "\n" +
        "Contact Number: " + contactNumber + "\n\n" +
        "ORDER DETAILS:\n" +
        orderDetails +
        "\nTotal: ₱" + total.toFixed(2) +
        "\n\nThank you!";

    const email = "littlemomentscafe@email.com";

    window.location.href =
        "mailto:" + email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

}
