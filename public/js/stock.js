var apikey = config.API_KEY;

function dailyStocks () {
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    
    var symbol = document.getElementById("symbol").value;
    // var interval = document.getElementById("interval").value;
    var API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+symbol+'&interval=5min&apikey='+apikey;
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
                valueFormatString: "HH:mm DD MMM"
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
                xValueFormatString: "HH:mm DD MMM YYYY",
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
    var API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol='+symbol+'&apikey='+apikey;
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
    var API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol='+symbol+'&apikey='+apikey;
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

function overviewStocks (){
    var symbol = $("#symbol").val();
    var API_URL = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='+symbol+'&apikey='+apikey;
    fetch(API_URL)
    .then(function(response) {
        return response.json();
    }
    )
    .then(function(data) {
        console.log(data);
        var symbol = data['Symbol'];
        var name = data['Name'];
        var description = data['Description'];
        var exchange = data['Exchange'];
        var currency = data['Currency'];
        var country = data['Country'];
        var sector = data['Sector'];
        var industry = data['Industry'];
        var address = data['Address'];
        var fullTimeEmployees = data['FullTimeEmployees'];
        var fiscalYearEnd = data['FiscalYearEnd'];
        var latestQuarter = data['LatestQuarter'];
        var marketCapitalization = data['MarketCapitalization'];
        var ebitda = data['EBITDA'];
        var peratio = data['PERatio'];
        var pegRatio = data['PEGRatio'];
        var bookValue = data['BookValue'];
        var dividendPerShare = data['DividendPerShare'];
        var dividendYield = data['DividendYield'];
        var eps = data['EPS'];
        var revenuePerShareTTM = data['RevenuePerShareTTM'];
        var profitMargin = data['ProfitMargin'];
            
        var overview = document.getElementById("overview");

        overview.innerHTML = 
        "<p>Symbol: " + symbol + "</p>" +
        "<p>Name: " + name + "</p>" +
        "<p>Description: " + description + "</p>" +
        "<p>Exchange: " + exchange + "</p>" +
        "<p>Currency: " + currency + "</p>" +
        "<p>Country: " + country + "</p>" +
        "<p>Sector: " + sector + "</p>" +
        "<p>Industry: " + industry + "</p>" +
        "<p>Address: " + address + "</p>" +
        "<p>Fiscal Year End: " + fiscalYearEnd + "</p>" +
        "<p>Latest Quarter: " + latestQuarter + "</p>" +
        "<p>Market Capitalization: " + marketCapitalization + "</p>" +
        "<p>EBITDA: " + ebitda + "</p>" +
        "<p>PERatio: " + peratio + "</p>" +
        "<p>PEGRatio: " + pegRatio + "</p>" +
        "<p>Book Value: " + bookValue + "</p>" +
        "<p>Dividend Per Share: " + dividendPerShare + "</p>" +
        "<p>Dividend Yield: " + dividendYield + "</p>" +
        "<p>EPS: " + eps + "</p>" +
        "<p>Revenue Per Share TTM: " + revenuePerShareTTM + "</p>" +
        "<p>Profit Margin: " + profitMargin + "</p>";
        });

    }