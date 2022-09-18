let formElement = document.querySelector(".js-formElement")
let formInputValue = document.querySelector(".js-inputValue");
let formOutputValue = document.querySelector(".js-outputValue");
let formCurrencyHave = document.querySelector(".js-currencyHave");
let formCurrencyWant = document.querySelector(".js-currencyWant");
let eureur = 1;
let eurpln = 4.73;
let eurtry = 18.14;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
     
    let inputValue = formInputValue.value;
    let currencyHave = formCurrencyHave.value;
    let currencyWant = formCurrencyWant.value;
    
    let referenceEuroValue
    switch(currencyHave) {
 
        case("pln"):
            referenceEuroValue = eureur/eurpln;
        break;
    
        case("eur"):
            referenceEuroValue = eureur/eureur;
        break;
    
        case("try"):
            referenceEuroValue = eureur/eurtry;
        break;
    }

    let outputValue
    switch(currencyWant) {
 
        case("pln"):
            outputValue = referenceEuroValue*inputValue*eurpln;
        break;
    
        case("eur"):
            outputValue = referenceEuroValue*inputValue*eureur;
        break;
    
        case("try"):
            outputValue = referenceEuroValue*inputValue*eurtry;
        break;
    }
    
    outputValue = outputValue.toFixed(2);
    formOutputValue.value = outputValue;
})