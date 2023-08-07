// variaveis

const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartElement = document.getElementById("cart");
let cartTotal = 0;
let cartVisible = false;

//Adicionando os itens ao carrinho

function addToCart(itemName, itemPrice) {
  const item = document.createElement("li");
  item.innerHTML = `
    <span>${itemName}</span>
    <span>R$${itemPrice}</span>
    <button onclick="removeFromCart(this, ${itemPrice})">Remover</button>
  `;
  cartItemsElement.appendChild(item);

  cartTotal += itemPrice;
  cartTotalElement.textContent = cartTotal;
}

// Remover os itens do carrinho

function removeFromCart(itemElement, itemPrice) {
  const liElement = itemElement.parentElement;
  cartItemsElement.removeChild(liElement);

  cartTotal -= itemPrice;
  cartTotalElement.textContent = cartTotal;
}

//Limpando o carrinho

function clearCart() {
  cartItemsElement.innerHTML = "";
  cartTotal = 0;
  cartTotalElement.textContent = cartTotal;
}

//Abrindo/Fechando o carrinho

function toggleCart() {
  cartVisible = !cartVisible;
  if (cartVisible) {
    cartElement.style.display = "block";
  } else {
    cartElement.style.display = "none";
  }
}