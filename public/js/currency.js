var apikey = config.API_KEY;

function currencyConverter() {

var currencyOne = document.getElementById("currencyone").value;
var currencyTwo = document.getElementById("currencytwo").value;

var URL = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+currencyOne+'&to_currency='+currencyTwo+'&apikey='+apikey;

fetch(URL)
.then(res => res.json())
.then(res => {
    var rate = res.rates[currencyTwo];
    document.getElementById("rate").innerText = "1 " + currencyOne + " = " + rate + " " + currencyTwo;
    document.getElementById("currencyone_amount").addEventListener("input", currencyoneAmount);
    document.getElementById("currencytwo_amount").addEventListener("input", currencytwoAmount);

    function currencyoneAmount(e){
        var currencyoneAmount = e.target.value;
        document.getElementById("currencytwo_amount").value = currencyoneAmount * rate;
    }
    function currencytwoAmount(e){
        var currencytwoAmount = e.target.value;
        document.getElementById("currencyone_amount").value = currencytwoAmount / rate;
    }
})
}

//async function dataLoad(currencyOne, currencyTwo) {
  //  const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyOne}&to_currency=${currencyTwo}&apikey=GPC9UGIE9X6VAHJ0`;
  //  const response = await fetch(url); 
  //  const data = await response.json();
  //  console.log(data);
  //  return data;
//}


// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });
// function display(data) {
//     const entries = Object.entries(data);
//     for (var i = 0; i < entries.length; i++) {
//       select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
//       select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
//     }
//   }
  
//   btn.addEventListener("click", () => {
//     let currency1 = select[0].value;
//     let currency2 = select[1].value;
//     let value = num.value;
  
//     if (currency1 != currency2) {
//       convert(currency1, currency2, value);
//     } else {
//       alert("Choose Different Currencies !!!");
//     }
//   });
  
//   function convert(currency1, currency2, value) {
//     const host = "api.frankfurter.app";
//     fetch(
//       `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
//     )
//       .then((val) => val.json())
//       .then((val) => {
//         console.log(Object.values(val.rates)[0]);
//         ans.value = Object.values(val.rates)[0];
//       });
//   }
