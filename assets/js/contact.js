var prefixHref="/Furni";

const regExName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,14})?$/;
const regExLastName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{3,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{3,14})?$/;
const regExEmail=/^[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}$/;
const regExZip=/^10000|[1-9]\d{4}$/;
const regExPhone=/^\+381\s6[0-9]\s[0-9]{3}\s[0-9]{3,4}$/;

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
let errors=0;
let fName=document.querySelector("#indexName");
let email=document.querySelector("#indexEmail");

fName.addEventListener("blur", function(){
    validateInput(regExName, fName);
});
email.addEventListener("blur", function(){
    validateInput(regExEmail, email);
})

if(window.location.pathname==prefixHref+"/contact.html"){
    let fNameMessage=document.querySelector("#fname");
    let lNameMessage=document.querySelector("#lname");
    let emailMessage=document.querySelector("#email");

    fNameMessage.addEventListener("blur", function(){
        validateInput(regExName, fNameMessage);
    });
    lNameMessage.addEventListener("blur", function(){
        validateInput(regExLastName, lNameMessage);
    });
    emailMessage.addEventListener("blur", function(){
        validateInput(regExEmail, emailMessage);
    })
}

if(window.location.pathname==prefixHref+"/checkout.html"){

    

    let country=document.querySelector("#c_country");
    let cfName=document.querySelector("#c_fname");
    let clName=document.querySelector("#c_lname");
    let city=document.querySelector("#c_city");
    let zip=document.querySelector("#c_postal_zip");
    let cEmail=document.querySelector("#c_email_address");
    let cPhone=document.querySelector("#c_phone");
    let cButton=document.querySelector("#place-order-button");

    function checkCountry(){
        if(country.selectedIndex=="0"){
            country.nextElementSibling.classList.remove("d-none");
            country.classList.add("border-danger");
            errors++;
        }else{
            country.nextElementSibling.classList.add("d-none");
            country.classList.remove("border-danger");
            country.classList.add("border-success");
            formErrors=0;
        }
    }

    function checkForm(){
        validateInput(regExName, cfName);
        validateInput(regExLastName, clName);
        validateInput(regExEmail, cEmail);
        validateInput(regExZip, zip);
        validateInput(regExPhone, cPhone);

        if(city.value==""){
            city.nextElementSibling.classList.remove("d-none");
            city.classList.add("border-danger");
            errors++;
        }else{
            city.nextElementSibling.classList.add("d-none");
            city.classList.remove("border-danger");
            city.classList.add("border-success");
            formErrors=0;
        }

        checkCountry();
    }
    cButton.addEventListener("click", function(){
        checkForm();

    if(!errors){
        window.location = "thankyou.html";

    }else{
        cButton.nextElementSibling.classList.remove("d-none");
        cButton.nextElementSibling.classList.add("d-block");
    }
    })
    //
}
