const regExName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,14})?$/;
const regExLastName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{3,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{3,14})?$/;
const regExEmail=/^[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}$/;
const regExPassword=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

function validateInput(regex, input){
    if(!regex.test(input.value)){
        input.classList.add("border-danger");
        input.nextElementSibling.classList.remove("d-none");
        errors++;
    }else{
        input.classList.remove("border-danger");
        input.classList.add("border-success");
        input.nextElementSibling.classList.add("d-none");
        errors=0;
    }
}

if(window.location.pathname=="/index.html" || window.location.pathname=="/shop.html" || window.location.pathname=="/about.html"){
    let fName=document.querySelector("#indexName");
    let email=document.querySelector("#indexEmail");
    
    fName.addEventListener("blur", function(){
        validateInput(regExName, fName);
    });
    email.addEventListener("blur", function(){
        validateInput(regExEmail, email);
    })
}