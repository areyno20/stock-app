var apikey = config.API_KEY;

function currencyConverter() {

var currencyOne = document.getElementById("currencyone").value;
var currencyTwo = document.getElementById("currencytwo").value;
var USD = document.getElementById("USD").value;


var URL = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+currencyOne+'&to_currency='+currencyTwo+'&apikey=GPC9UGIE9X6VAHJ0';

fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    var stockData = data['Realtime Currency Exchange Rate'];
    var dataPoints = [];
    for (var key in stockData) {
        if (stockData.hasOwnProperty(key)) {
            dataPoints.push({
                x: new Date(key),
                y: [
                    Number(stockData[key]['1. open']),
                    Number(stockData[key]['2. high']),
                    Number(stockData[key]['3. low']),
                    Number(stockData[key]['4. close'])
                ]
            });
        }
    }
    console.log(dataPoints);
    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Currency Converter"
        },
        axisX: {
            valueFormatString: "HH DD MMM"
        },
        axisY: {
            prefix: "$",
            title: "Price",
        }, 
        legend: {
            dockInsidePlotArea: true
        },
        data: [{
            type: "candlestick",
            showInLegend: true,
            legendText: "Currency in USD",
            xValueType: "dateTime",
            yValueFormatString: "$###0.00",
            xValueFormatString: "HH DD MMM YYYY",
            risingColor: "#CBE8C8",
            fallingColor: "#FFCCCC",
            dataPoints: dataPoints
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
})
.catch(function(err) {
    console.log(err);
});
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
