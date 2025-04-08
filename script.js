const currencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  INR: 83.2,
  JPY: 110,
  AUD: 1.3,
  CAD: 1.25,
  CHF: 0.91,
  CNY: 6.5,
  ZAR: 18.5
};

const currencyNames = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  INR: "Indian Rupee",
  JPY: "Japanese Yen",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  ZAR: "South African Rand"
};

window.onload = () => {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");

  for (const code in currencyRates) {
    let option1 = document.createElement("option");
    option1.value = code;
    option1.text = `${code} - ${currencyNames[code]}`;
    fromCurrency.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = code;
    option2.text = `${code} - ${currencyNames[code]}`;
    toCurrency.appendChild(option2);
  }

  fromCurrency.value = "USD";
  toCurrency.value = "INR";
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (isNaN(amount)) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  const converted = (amount / currencyRates[from]) * currencyRates[to];
  result.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}