const input = document.querySelector("#number");
const currency = document.querySelector("#currency");
const KZT = document.querySelector("#KZT");
const EUR = document.querySelector("#EUR");
const USD = document.querySelector("#USD");

const currencies = {
  USD: {
    EUR: 0.84283,
    KZT: 429,
    USD: 1,
  },
  EUR: {
    USD: 1.176335,
    KZT: 431,
    EUR: 1,
  },
  KZT: {
    EUR: 0.0018446,
    USD: 0.00232,
    KZT: 1,
  },
};

function calcCurrency() {
  const value = input.value;
  const currencyValue = currencies[currency.value];
  KZT.value = currency.value === "KZT" ? "-" : value * currencyValue.KZT;
  USD.value = currency.value === "USD" ? "-" : value * currencyValue.USD;
  EUR.value = currency.value === "EUR" ? "-" : value * currencyValue.EUR;
}

input.addEventListener("input", calcCurrency);
