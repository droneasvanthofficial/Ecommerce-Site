// Initialize cart from local storage or create an empty one
let cart = JSON.parse(localStorage.getItem("cart")) || []

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function addToCart(id, name, price) {
  let existingItem = cart.find(item => item.id === id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ id, name, price, quantity: 1 })
  }
  saveCart()
  updateCart()
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id)
  saveCart()
  updateCart()
}

function changeQuantity(id, action) {
  let item = cart.find(item => item.id === id)
  if (item) {
    if (action === "increase") {
      item.quantity += 1
    } else if (action === "decrease" && item.quantity > 1) {
      item.quantity -= 1
    } else {
      removeFromCart(id)
      return
    }
  }
  saveCart()
  updateCart()
}

function updateCart() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (cartItems) {
    cartItems.innerHTML = ""
    let total = 0

    cart.forEach((item) => {
      const itemElement = document.createElement("div")
      itemElement.className = "cart-item"
      itemElement.innerHTML = `
        <div class="card mb-3">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Price: $${item.price.toFixed(2)}</p>
              <p class="card-text">Quantity: 
                <button class="btn btn-sm btn-secondary change-qty" data-id="${item.id}" data-action="decrease">-</button>
                <span>${item.quantity}</span>
                <button class="btn btn-sm btn-secondary change-qty" data-id="${item.id}" data-action="increase">+</button>
              </p>
            </div>
            <button class="btn btn-danger btn-sm remove-item" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `
      cartItems.appendChild(itemElement)
      total += item.price * item.quantity
    })

    cartTotal.textContent = total.toFixed(2)

    // Attach event listeners for remove and quantity buttons
    document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", () => removeFromCart(button.dataset.id))
    })

    document.querySelectorAll(".change-qty").forEach(button => {
      button.addEventListener("click", () => changeQuantity(button.dataset.id, button.dataset.action))
    })
  }
}

// Add to cart button functionality
document.addEventListener("DOMContentLoaded", () => {
  updateCart() // Update cart on page load

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      const id = button.dataset.id
      const name = button.dataset.name
      const price = Number.parseFloat(button.dataset.price)
      addToCart(id, name, price)
    })
  })
})

// Checkout functionality
const checkoutBtn = document.getElementById("checkout-btn")
const checkoutForm = document.getElementById("checkout-form")

if (checkoutBtn && checkoutForm) {
  checkoutBtn.addEventListener("click", () => {
    checkoutForm.style.display = "block"
    checkoutBtn.style.display = "none"
  })
}

// Form submission
const loginForm = document.getElementById("login-form")
const signupForm = document.getElementById("signup-form")
const paymentForm = document.getElementById("payment-form")

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Login functionality would be implemented here.")
  })
}

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Signup functionality would be implemented here.")
  })
}

if (paymentForm) {
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Payment processing would be implemented here.")

    // Clear cart after successful payment
    cart = []
    saveCart()
    updateCart()

    checkoutForm.style.display = "none"
    checkoutBtn.style.display = "block"
  })
}


