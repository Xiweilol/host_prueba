// Archivo: script.js

// Carrito inicial vacío
let cart = [];

function addToCart(productName, productPrice, event) {
    // Selecciona la cantidad del producto en la misma fila que el botón clicado
    const quantity = parseInt(
        event.target.closest('tr').querySelector('.quantity').value
    );
    if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, introduce una cantidad válida.");
        return;
    }
    // Añade el producto al carrito
    cart.push({ name: productName, price: productPrice, quantity: quantity });
    // Actualiza el carrito en la interfaz
    updateCart();
}


// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');
    // Vacía la lista del carrito antes de agregar los elementos
    cartItems.innerHTML = '';
    // Recorre los productos en el carrito y actualiza la lista
    let totalAmount = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        // Agrega el elemento a la lista
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}`;
        cartItems.appendChild(li);
    });
    // Muestra el total de la compra
    total.innerText = `Total: $${totalAmount}`;
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    updateCart();
}

// Filtrar productos por categoría
const categorySelect = document.getElementById('categorySelect');
categorySelect.addEventListener('change', function() {
    const selectedCategory = categorySelect.value;
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (selectedCategory === 'all' || product.dataset.category === selectedCategory) {
            product.style.display = 'table-row';
        } else {
            product.style.display = 'none';
        }
    });
});
