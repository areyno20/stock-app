const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;



router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('signup');
  });

router.get('/stockdashboard', (req, res) => {
  if (req.session.logged_in) {
    res.render('stockdashboard', {
      logged_in: req.session.logged_in
    });
    return;
  }
});

router.get('/currency', (req, res) => {
  if (req.session.logged_in) {
    res.render('currency', {
      logged_in: req.session.logged_in
    });
    return;
  }
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