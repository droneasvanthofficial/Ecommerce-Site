// Cart functionality
let cart = []

function addToCart(id, name, price) {
  cart.push({ id, name, price })
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
      itemElement.className = "card mb-3"
      itemElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Price: $${item.price}</p>
                </div>
            `
      cartItems.appendChild(itemElement)
      total += item.price
    })

    cartTotal.textContent = total.toFixed(2)
  }
}

// Add to cart button functionality
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart")
  addToCartButtons.forEach((button) => {
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
const loginForm = I
understand.I
;("ll continue the text stream from the cut-off point, maintaining coherence and consistency with the previous content. Here")
s
the
continuation: style.display = "none"
})
}

// Form submission
const loginForm = document.getElementById("login-form")
const signupForm = document.getElementById("signup-form")
const paymentForm = document.getElementById("payment-form")

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Add login logic here
    alert("Login functionality would be implemented here.")
  })
}

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Add signup logic here
    alert("Signup functionality would be implemented here.")
  })
}

if (paymentForm) {
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Add payment processing logic here
    alert("Payment processing would be implemented here.")
    cart = []
    updateCart()
    checkoutForm.style.display = "none"
    checkoutBtn.style.display = "block"
  })
}

