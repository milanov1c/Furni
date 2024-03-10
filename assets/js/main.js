var prefixHref="/Furni";

getJSONData("GET", "assets/data/navigation.json", function(result){
    displayNav(result);
})


if(window.location.pathname==prefixHref+"/index.html"){
    window.onload=()=>{
        getJSONData("GET", "assets/data/furniture.json", function(result){
            displayProducts(result);
        });
        getJSONData("GET", "assets/data/services.json", function(result){
            displayServices(result);
        });
        getJSONData("GET", "assets/data/furniture.json", function(result){
            displayMiniProducts(result);
        });
        getJSONData("GET", "assets/data/testimonials.json", function(result){
            displayTestimonials(result);
        });
        getJSONData("GET", "assets/data/blogs.json", function(result){
            displayBlogs(result);
        });
        var swiper = new Swiper(".mySwiper", {
            pagination: {
              el: ".swiper-pagination",
              dynamicBullets: true,
            },
          });
    }

    function displayProducts(productsObj){
        const furnitureBlock=document.querySelector("#furniture");
        let html=``;
        
        for(let i=1; i<4 ;i++){
            html+=`<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a class="product-item" href="cart.html">
                <img src="${productsObj[i].image}" class="img-fluid product-thumbnail">
                <h3 class="product-title">${productsObj[i].name}</h3>
                <strong class="product-price">$${productsObj[i].price}</strong>

                <span class="icon-cross" data-id=${productsObj[i].id}  data-name="${
                    productsObj[i].name}" data-price=${productsObj[i].price} data-image="${productsObj[i].image}">
                    <img src="images/cross.svg" class="img-fluid add-to-cart">
                </span>
            </a>
        </div> `;
        }

        furnitureBlock.innerHTML+=html;
    }

    function displayServices(servicesObj){
        const servicesBlock=document.querySelector("#services");
        let html=``;
        
        servicesObj.forEach(service => {
            html+=`<div class="col-6 col-md-6">
                        <div class="feature">
                            <div class="icon">
                                <img src="images/${service.icon.src}" alt="${service.icon.alt}" class="img-fluid">
                            </div>
                            <h3>${service.heading}</h3>
                            <p>${service.paragraph}</p>
                        </div>
                    </div>`;
        });
        servicesBlock.innerHTML=html;
    }

    function displayMiniProducts(productsObj){
        const productsBlock=document.querySelector("#products-2");
        let html=``;
        for(let i=13; i<16; i++){
            html+=`<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="product-item-sm d-flex">
                <div class="thumbnail">
                    <img src="${productsObj[i].image}" alt="${productsObj[i].name}" class="img-fluid">
                </div>
                <div class="pt-3">
                    <h3>${productsObj[i].name}</h3>
                    <p>$${productsObj[i].price}</p>
                    <p><a href="shop.html">Read More</a></p>
                </div>
            </div>
        </div>`;
        }
        productsBlock.innerHTML=html;
    }

    function displayTestimonials(testimonialObj){
        const testimonialBlock=document.querySelector("#testimonials");
        let html=``;

        testimonialObj.forEach(testimonial=>{
            html+=`<div class="swiper-slide">
                <div class="item">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mx-auto">

                        <div class="testimonial-block text-center">
                            <blockquote class="mb-5">
                                <p>
                                    <q>${testimonial.testimonial}</q>
                                </p>
                            </blockquote>

                            <div class="author-info">
                                <div class="author-pic">
                                    <img src="images/${testimonial.picture}" alt="${testimonial.name}" class="img-fluid">
                                </div>
                                <h3 class="font-weight-bold">${testimonial.name}</h3>
                                <span class="position d-block mb-5">Occupation: ${testimonial.occupation}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div> `;
        });
        testimonialBlock.innerHTML=html;
    }

    function displayBlogs(blogsObj){
        const blogsBlock=document.querySelector("#blogs");
        let html=``;

        blogsObj.forEach(blog=>{
            html+=`<div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div class="post-entry">
                <a href="blog.html" class="post-thumbnail"><img src="images/${blog.image.src}" alt="${blog.image.alt}" class="img-fluid"></a>
                <div class="post-content-entry">
                    <h3><a href="#">${blog.title}</a></h3>
                    <div class="meta">
                        <span>by <a href="#">${blog.author.fName} ${blog.author.lName}</a></span> <span>on <a href="#">${formatDate(blog.date.day, blog.date.month, blog.date.year)}</a></span>
                    </div>
                </div>
            </div>
        </div>`;
        });
        blogsBlock.innerHTML=html;
    }

    function formatDate(day, month, year){
        const months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const monthString=months[month-1];
        const dayString=String(day);
        const yearString=String(year);

        return `${monthString} ${dayString}, ${yearString}`;
    }
}
if(window.location.pathname==prefixHref+"/about.html"){
    window.onload=()=>{
       
        getJSONData("GET", "assets/data/services.json", function(result){
            displayServices(result);
        });
        getJSONData("GET", "assets/data/team.json", function(result){
            displayTeam(result);
        });
    }

    function displayServices(servicesObj){
        const servicesBlock=document.querySelector("#services");
        let html=``;
        
        servicesObj.forEach(service => {
            html+=`<div class="col-6 col-md-6">
                        <div class="feature">
                            <div class="icon">
                                <img src="images/${service.icon.src}" alt="${service.icon.alt}" class="img-fluid">
                            </div>
                            <h3>${service.heading}</h3>
                            <p>${service.paragraph}</p>
                        </div>
                    </div>`;
        });
        servicesBlock.innerHTML=html;
    }

    function displayTeam(teamObj){
        const teamBlock=document.querySelector("#team");
        let html=``;

        teamObj.forEach(team=>{
            html+=`<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src="images/${team.image.src}" class="img-fluid mb-5" alt="${team.image.alt}">
            <h3 clas><span class="fw-bold">${team.name.fName}</span> ${team.name.lName}</h3>
                <span class="d-block position mb-4">${team.position}.</span>
                <p>${team.about}</p>
        </div> `;
        });
        
        teamBlock.innerHTML=html;
    }
}
if(window.location.pathname==prefixHref+"/services.html"){
    getJSONData("GET", "assets/data/services.json", function(result){
        displayServices(result);
    });
    getJSONData("GET", "assets/data/furniture.json", function(result){
        displayProducts(result);
    });
    getJSONData("GET", "assets/data/testimonials.json", function(result){
        displayTestimonials(result);
    });
    var swiper = new Swiper(".mySwiper2", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });

    function displayProducts(productsObj){
        const furnitureBlock=document.querySelector("#furniture");
        let html=``;
        
        for(let i=1; i<4 ;i++){
            html+=`<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a class="product-item" href="cart.html">
                <img src="${productsObj[i].image}" class="img-fluid product-thumbnail">
                <h3 class="product-title">${productsObj[i].name}</h3>
                <strong class="product-price">$${productsObj[i].price}</strong>

                <span class="icon-cross" data-id=${productsObj[i].id}  data-name="${
                    productsObj[i].name}" data-price=${productsObj[i].price} data-image="${productsObj[i].image}">
                    <img src="images/cross.svg" class="img-fluid add-to-cart">
                </span>
            </a>
        </div> `;
        }

        furnitureBlock.innerHTML+=html;
    }
    function displayServices(servicesObj){
        const servicesBlock=document.querySelector("#services");
        let html=``;
        
        servicesObj.forEach(service => {
            html+=`<div class="col-6 col-md-6">
                        <div class="feature">
                            <div class="icon">
                                <img src="images/${service.icon.src}" alt="${service.icon.alt}" class="img-fluid">
                            </div>
                            <h3>${service.heading}</h3>
                            <p>${service.paragraph}</p>
                        </div>
                    </div>`;
        });
        servicesBlock.innerHTML=html;
    }
    function displayTestimonials(testimonialObj){
        const testimonialBlock=document.querySelector("#testimonials");
        let html=``;

        testimonialObj.forEach(testimonial=>{
            html+=`<div class="swiper-slide">
                <div class="item">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mx-auto">

                        <div class="testimonial-block text-center">
                            <blockquote class="mb-5">
                                <p>
                                    <q>${testimonial.testimonial}</q>
                                </p>
                            </blockquote>

                            <div class="author-info">
                                <div class="author-pic">
                                    <img src="images/${testimonial.picture}" alt="${testimonial.name}" class="img-fluid">
                                </div>
                                <h3 class="font-weight-bold">${testimonial.name}</h3>
                                <span class="position d-block mb-5">Occupation: ${testimonial.occupation}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div> `;
        });
        testimonialBlock.innerHTML=html;
    }
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

function displayNav(navObj){
    const navBlock=document.querySelector("#myNav");
    let html=``;
    
    navObj.forEach(nav=>{
        html+=`<li class="nav-item">
        <a class="nav-link" href="${nav.path}">${nav.name}</a>
    </li>`;
    });
    
    navBlock.innerHTML=html;
}