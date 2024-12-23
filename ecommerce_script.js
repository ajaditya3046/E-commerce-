// Variables
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartList = document.querySelector('.cart-list');
const totalElement = document.getElementById('total');
const checkoutButton = document.getElementById('checkout');

let cart = [];
let total = 0;

// Add to Cart Functionality
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const product = e.target.parentElement;
    const id = product.getAttribute('data-id');
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));

    // Add product to cart
    cart.push({ id, name, price });
    updateCart();
  });
});

// Update Cart
function updateCart() {
  // Clear cart
  cartList.innerHTML = '';
  total = 0;

  // Add cart items
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price} <button class="remove-item" data-index="${index}">Remove</button>`;
    cartList.appendChild(li);

    // Calculate total
    total += item.price;
  });

  totalElement.textContent = total.toFixed(2);

  // Add event listeners to remove buttons
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      cart.splice(index, 1);
      updateCart();
    });
  });
}

// Checkout Button
checkoutButton.addEventListener('click', () => {
  alert('Thank you for your purchase!');
  cart = [];
  updateCart();
});
