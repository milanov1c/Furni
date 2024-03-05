window.onload = function () {
  displayCart();
  displayTotalPrice();
};

function displayCart() {
  existingCartItems = getLocalStorageItems();

  const cartItems = document.querySelector("#cart-items");
  existingCartItems.forEach((item) => {
    const html = `
            <tr id="item-row-${item.id}">
            <td class="product-thumbnail">
                <img src="${item.image}" alt="image-${
      item.name
    }" class="img-fluid">
            </td>
            <td class="product-name">
                <h2 class="h5 text-black">${item.name}</h2>
            </td>
            <td>$${item.price}</td>
            <td>
                <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                <div class="input-group-prepend">
                    <button onclick="decreaseCount(${
                      item.id
                    })" class="btn btn-outline-black decrease" type="button">&minus;</button>
                </div>
                <input type="text" id="item-quantity-${
                  item.id
                }" class="form-control text-center quantity-amount" value="${
      item.count
    }" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                <div class="input-group-append">
                    <button onclick="increaseCount(${
                      item.id
                    })" class="btn btn-outline-black increase" type="button">&plus;</button>
                </div>
                </div>

            </td>
            <td id="item-total-price-${item.id}">$${(
      item.price * item.count
    ).toFixed(2)}</td>
            <td>
            <a onclick="deleteItem(${item.id})" class="btn btn-black btn-sm">
            X
            </a>
            </td>
            </tr>
          `;

    cartItems.innerHTML += html;
  });
}

function getLocalStorageItems() {
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  if (cartItems == null) {
    return [];
  }
  return cartItems;
}

function getItemById(id) {
  const items = getLocalStorageItems();
  let item = null;

  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      item = items[i];
      break;
    }
  }

  return item;
}

function getItemIndexFromLocalStorage(id) {
  const items = getLocalStorageItems();
  let index = null;

  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      index = i;
      break;
    }
  }

  return index;
}

function saveUpdatedItem(index, item) {
  let cartItems = getLocalStorageItems();
  cartItems[index] = item;
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function increaseCount(id) {
  let item = getItemById(id);
  let index = getItemIndexFromLocalStorage(id);
  if (item == null || index == null) {
    return;
  }

  item.count = item.count + 1;

  saveUpdatedItem(index, item);
  updateQuantityAndTotalPriceInTable(id, item);
}

function decreaseCount(id) {
  let item = getItemById(id);
  let index = getItemIndexFromLocalStorage(id);
  if (item == null || index == null) {
    return;
  }

  item.count = item.count - 1;

  saveUpdatedItem(index, item);
  updateQuantityAndTotalPriceInTable(id, item);
}

function updateQuantityAndTotalPriceInTable(id, item) {
  const quantityInput = document.querySelector(`#item-quantity-${id}`);
  if (quantityInput) {
    quantityInput.value = item.count;
  }

  const totalPriceCell = document.querySelector(`#item-total-price-${id}`);
  if (totalPriceCell) {
    totalPriceCell.textContent = `$${(item.price * item.count).toFixed(2)}`;
  }

  displayTotalPrice()
}

function deleteItem(id) {
  let cartItems = getLocalStorageItems();
  const index = getItemIndexFromLocalStorage(id);
  if (index !== null) {
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    const itemRow = document.querySelector(`#item-row-${id}`);
    if (itemRow) {
      itemRow.remove();
    }
  }
}

function displayTotalPrice(){
    let cartItems = getLocalStorageItems();

    let totalPrice = 0;

    for(let i = 0; i < cartItems.length; i++){
        totalPrice += cartItems[i].price * cartItems[i].count
    }

    const totalPriceSpan = document.querySelector("#totalPrice")
    totalPriceSpan.textContent= `$${totalPrice.toFixed(2)}`
}