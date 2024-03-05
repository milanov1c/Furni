window.onload = function () {
  fetchData();
};

function fetchData() {
  getJSONData("GET", "assets/data/furniture.json", function (response) {
    const furnitureBox = document.querySelector("#furniture");

    response.furnitures.forEach((furniture) => {
      const html = `
      <div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src="${furniture.image}" alt="${
        furniture.name
      }" class="img-fluid product-thumbnail">
							<h3 class="product-title">${furniture.name}</h3>
							<strong class="product-price">$ ${furniture.price.toFixed(2)}</strong>

                <span class="icon-cross" data-id=${furniture.id}  data-name="${
        furniture.name
      }" data-price=${furniture.price} data-image="${furniture.image}">
                  <img src="images/cross.svg" class="img-fluid add-to-cart">
                </span>
							
						</a>
					</div> 
          `;

      furnitureBox.innerHTML += html;
    });
  });
}

function getJSONData(method, url, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open(method, url, true);
  xhttp.send();

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const response = JSON.parse(xhttp.responseText);
      callback(response);
    }
  };

}
