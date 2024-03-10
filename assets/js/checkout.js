window.onload = function () {
  displayOrderForCheckout();
};

function displayOrderForCheckout() {
  let items = getLocalStorageItems();

  // if (items.length === 0) {
  //   document.querySelector("#place-order-button").style.display = "none";
  //   return;
  // }

  const orderItems = document.querySelector("#order-items");
  var html = ``;
  var totalSum = 0;
  items.forEach((item) => {
    html += `
        <tr>
        <td>${item.name} <strong class="mx-2">x</strong> ${item.count}</td>
        <td>$${item.price}</td>
      </tr>
      `;

    totalSum += item.price * item.count;
  });

  html += `
  <tr>
        <td class="text-black font-weight-bold"><strong>Order Total</strong></td>
        <td class="text-black font-weight-bold"><strong>$${totalSum.toFixed(
          2
        )}</strong></td>
      </tr>
  `;
  orderItems.innerHTML = html;
}

function getLocalStorageItems() {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  if (cartItems == null) {
    return [];
  }
  return cartItems;
}

function placeOrder() {
  localStorage.removeItem("cart");
  
}
