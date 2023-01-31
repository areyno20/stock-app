const router = require('express').Router();
const jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
const fetch = require('node-fetch');

const cors = require('cors');
router.use(cors());
router.options('*', cors());

require('dotenv').config();


//homepage
router.get('/', (req, res) => {
  res.render('home');
});

//login page
router.get('/login', (req, res) => {
  res.render('login');
});

//sigup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

//stock page
router.get('/stockdashboard', (req, res) => {
  res.render('stockdashboard');
});

// router.get('/stockdashboard/symbol', (req, res) => {
//   var symbol = req.query.symbol;
//   var API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+symbol+'&interval=5min&apikey='+process.env.API_KEY;
  
//   const date = new Date();
    
//   let day = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   let currentDate = `${day}-${month}-${year}`;
  
//   fetch(API_URL)
//   .then(function(response) {
//       return response.json();
//   })
//   .then(function(data) {
//       console.log(data);
//       var stockData = data['Time Series (Daily)'];
//       var dataPoints = [];
//       for (var key in stockData) {
//           if (stockData.hasOwnProperty(key)) {
//               dataPoints.push({
//                   x: new Date(key),
//                   y: [
//                       Number(stockData[key]['1. open']),
//                       Number(stockData[key]['2. high']),
//                       Number(stockData[key]['3. low']),
//                       Number(stockData[key]['4. close'])
//                   ]
//               });
//           }
//       }
//       console.log(dataPoints);
//       var options = {
//           animationEnabled: true,
//           theme: "light2", // "light1", "light2", "dark1", "dark2"
//           exportEnabled: true,
//           title:{
//               text: "Stock Price of " +symbol+ " - Daily Graph ("+currentDate+")"
//           },
//           axisX: {
//               valueFormatString: "MMM",
//               minimum: date.setMonth(date.getMonth() - 6)
//           },
//           axisY: {
//               prefix: "$",
//               title: "Price",
//           }, 
//           legend: {
//               dockInsidePlotArea: true
//           },
//           data: [{
//               type: "candlestick",
//               risingColor: "#00BFFF",
//               fallingColor: "#FFCCCC",
//               dataPoints: dataPoints
//           }]
//       };
//       $("#chartContainer").CanvasJSChart(options);
//   });     
// });



  

module.exports = router;
