window.onload = function () {
  //fetchData();
  getJSONData("GET", "assets/data/furniture.json", function(response){
    displayProducts(response);
    saveToLS("products",response);
  });
  getJSONData("GET","assets/data/brands.json", function(response){
    displayCategories(response, "#brandDDL");
    saveToLS("brands",response);
  });
  getJSONData("GET","assets/data/categories.json", function(response){
    displayCategories(response, "#typeDDL");
    saveToLS("categories",response);
  });
  getJSONData("GET","assets/data/sort.json", function(response){
    displayCategories(response, "#sortDDL");
    saveToLS("sort",response);
  });
  document.querySelector("#brandDDL").addEventListener("change", function(){
    filterChange();
  });
  document.querySelector("#typeDDL").addEventListener("change", function(){
    filterChange();
  });
  document.querySelector("#sortDDL").addEventListener("change", function(){
    filterChange();
  });
};

function saveToLS(name, value){
  localStorage.setItem(name, JSON.stringify(value));
}

function returnFromLS(name){
  return JSON.parse(localStorage.getItem(name));
}






function filterProducts(products, filterType){
  let filteredProducts=[];
  let categoryID=null;
  let filterProperty=null;

  if(filterType=="brands")
  {
      categoryID=document.querySelector("#brandDDL").value;
      filterProperty="brand";
      //console.log(document.querySelector("#brandDDL").value)
  }
  if(filterType=="category")
  {
      categoryID=document.querySelector("#typeDDL").value;
      filterProperty="category";
      //console.log(document.querySelector("#typeDDL").value)
  }

  if(categoryID=="0")
  {
      filteredProducts=products;
  }
  else{
      filteredProducts=products.filter(product=> product[filterProperty]==categoryID);
  }

  
  return filteredProducts;

}

function sortProducts(products){
  let sortValue=document.querySelector("#sortDDL").value;
  let sortedProducts=[];
  console.log(sortValue)
  if(sortValue==="0"){
    return products;
  }else{
    sortedProducts=products.sort((first, second)=>{
      if(sortValue==="3"){
        return first.price - second.price;
        
      }
      if(sortValue==="4"){
        return second.price - first.price;
      }
      if(sortValue==="1"){
        if(first.name < second.name){
          return -1;
        }else if(first.name > second.name){
          return 1;
        }else{
          return 0;
        }
      }
      if(sortValue==="2"){
        if(first.name < second.name){
          return 1;
        }else if(first.name > second.name){
          return -1;
        }else{
          return 0;
        }
      }
    });
  }
  return sortedProducts;
}


function filterChange(){
  let products=returnFromLS("products");

  products=filterProducts(products, "brands");
  products=filterProducts(products, "category");
  products=sortProducts(products);

  displayProducts(products, "products");
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
function displayCategories(categoriesObj, displayBlock){
  const block=document.querySelector(displayBlock);
  let html=``;
  categoriesObj.forEach(cat=> {
    html+=`<option value="${cat.id}">${cat.name}</option>`;
  });
  block.innerHTML+=html;
}

function displayProducts(productsObj){
  const furnitureBlock = document.querySelector("#furniture");
  let html=``;
  productsObj.forEach(prod=>{
    html+= `
  <div class="col-12 col-md-4 col-lg-3 mb-5">
        <a class="product-item" href="#">
          <img src="${prod.image}" alt="${
    prod.name
  }" class="img-fluid product-thumbnail">
          <h3 class="product-title">${prod.name}</h3>
          <strong class="product-price">$ ${prod.price.toFixed(2)}</strong>

            <span class="icon-cross" data-id=${prod.id}  data-name="${
              prod.name
  }" data-price=${prod.price} data-image="${prod.image}">
              <img src="images/cross.svg" class="img-fluid add-to-cart">
            </span>
          
        </a>
      </div> 
      `
  });
  
  furnitureBlock.innerHTML=html;
}