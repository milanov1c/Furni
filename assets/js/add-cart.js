const furnitureButton = document.getElementById("furniture");


furnitureButton.addEventListener("click", function(event) {
    if (event.target.matches(".img-fluid.add-to-cart")) {
        addToCart(event);
    }
});

function addToCart(event) {
    const dataHolder = event.target.closest(".icon-cross");

    const furniture = {
        id: parseInt(dataHolder.dataset.id),
        name: dataHolder.dataset.name,
        price: parseFloat(dataHolder.dataset.price),
        image: dataHolder.dataset.image,
        count: 1
    }

    putToLocalStorage(furniture)
}


function putToLocalStorage(furniture) {
    const existingCartItems =  getCartFromStorage()

    let isExisting = false;

    for(let i = 0; i < existingCartItems.length; i++){
        if(existingCartItems[i].id === furniture.id){
            let cartItem = existingCartItems[i];
            cartItem.count = cartItem.count + 1;
            isExisting = true;
            break;
        }
    }

    if(!isExisting){
        existingCartItems.push(furniture)
    }

    localStorage.setItem("cart", JSON.stringify(existingCartItems));
}

function getCartFromStorage(){
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    if(cartItems == null){
        return [];
    }
    return cartItems
}