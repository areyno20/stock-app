function dailyStocks () {
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    
    var symbol = document.getElementById("symbol").value;
    // var interval = document.getElementById("interval").value;
    var API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+symbol+'&interval=5min&apikey=GPC9UGIE9X6VAHJ0';
    fetch(API_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var stockData = data['Time Series (5min)'];
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
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            title:{
                text: "Stock Price of " +symbol+ " - Daily Graph (As of "+currentDate+")"
            },
            axisX: {
                valueFormatString: "DD MMM"
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
                xValueFormatString: "DD MMM YYYY",
                risingColor: "#CBE8C8",
                fallingColor: "#FFCCCC",
                dataPoints: dataPoints
            }]
        };
        $("#chartContainer").CanvasJSChart(options);
    });
}

function weeklyStocks () {
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    
    var symbol = document.getElementById("symbol").value;
    // var interval = document.getElementById("interval").value;
    var API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol='+symbol+'&apikey=GPC9UGIE9X6VAHJ0';
    fetch(API_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var stockData = data['Weekly Adjusted Time Series'];
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
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            title:{
                text: "Stock Price of " +symbol+ " - Weekly Graph (As of "+currentDate+")"
            },
            axisX: {
                valueFormatString: "DD MMM YYYY",
                minimum: date.setMonth(date.getMonth() - 6)
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
                xValueFormatString: "DD MMM YYYY",
                risingColor: "#CBE8C8",
                fallingColor: "#FFCCCC",
                dataPoints: dataPoints
            }]
        };
        $("#chartContainer").CanvasJSChart(options);
    });
}

function monthlyStocks () {
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    
    var symbol = document.getElementById("symbol").value;
    // var interval = document.getElementById("interval").value;
    var API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol='+symbol+'&apikey=GPC9UGIE9X6VAHJ0';
    fetch(API_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var stockData = data['Monthly Adjusted Time Series'];
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
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            title:{
                text: "Stock Price of " +symbol+ " - Monthly Graph (As of "+currentDate+")"
            },
            axisX: {
                valueFormatString: "DD MMM YYYY",
                minimum: date.setMonth(date.getMonth() - 36)
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
                xValueFormatString: "DD MMM",
                risingColor: "#CBE8C8",
                fallingColor: "#FFCCCC",
                dataPoints: dataPoints
            }]
        };
        $("#chartContainer").CanvasJSChart(options);
    });
}
