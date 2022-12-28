{
    const currencyHaveCalculation = (eureur, eurpln, eurtry) => {
        const formCurrencyHave = document.querySelector(".js-currencyHave");

        switch (formCurrencyHave.value) {
            case ("pln"):
                return eureur / eurpln;
            case ("eur"):
                return eureur / eureur;
            case ("try"):
                return eureur / eurtry;
        };
    };

    const currencyWantCalculation = () => {
        const eureur = 1;
        const eurpln = 4.73;
        const eurtry = 18.14;
        const formInputValue = document.querySelector(".js-inputValue");
        const formCurrencyWant = document.querySelector(".js-currencyWant");
        
        switch (formCurrencyWant.value) {
            case ("pln"):
                return currencyHaveCalculation(eureur, eurpln, eurtry) * formInputValue.value * eurpln;
            case ("eur"):
                return currencyHaveCalculation(eureur, eurpln, eurtry) * formInputValue.value * eureur;
            case ("try"):
                return currencyHaveCalculation(eureur, eurpln, eurtry) * formInputValue.value * eurtry;
        };
    };

    const outputResults = () => {
        const formOutputValue = document.querySelector(".js-outputValue");
        formOutputValue.value = currencyWantCalculation().toFixed(2);
    };

    const init = () => {
        const formElement = document.querySelector(".js-formElement")
        
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            outputResults();
        });

    };

    init();
};