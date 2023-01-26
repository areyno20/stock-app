//dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');

// const alpha = require('alphavantage')({ key: 'GPC9UGIE9X6VAHJ0' });  // npm alphavantage for npm install (may not use)

const cors = require('cors');
router.use(cors());
router.options('*', cors());

const dotenv = require('dotenv');
dotenv.config();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//const interval = require('/interval.js'); // not sure if this is needed

// ***** Code for specific intervals if we implement a desired interval *****
// router.get('/stock/:type/:symbol', function (req, res) {
//     const interval = require('/interval.js');
//     const symbol = req.params.symbol;
//     const range = req.params.range;

//     const url = `https://www.alphavantage.co/query?function=${interval}&symbol=${symbol}&interval=${range}&apikey=${process.env.API_KEY}`;

//     try {
//         axios.get(url)
//             .then((response) => {
//             res.json(response.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     const output = getChartData(apiData.data, req.params.type);
//     res.json(output);
//     } catch (err){
//     console.log(err)
//     res.status(500).json(err);

//     }
// });

// Daily data for specific stock symbol
router.get('/daily/:symbol', function (req, res) {
    const symbol = req.params.symbol;
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=30min&apikey=${process.env.API_KEY}`;

    try {
        axios.get(url)
            .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    } catch (err){
    console.log(err)
    res.status(500).json(err);
    }
});

//weekly data for specific stock symbol
router.get('/weekly/:symbol', function (req, res) {
    const symbol = req.params.symbol;

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${process.env.API_KEY}`;
    
    try {
        axios.get(url)
            .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    } catch (err){
    console.log(err)
    res.status(500).json(err);
    }
});

//monthly data for specific stock symbol
router.get('/monthly/:symbol', function (req, res) {
    const symbol = req.params.symbol;

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${process.env.API_KEY}`;

    try {
        axios.get(url)
            .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    } catch (err){
    console.log(err)
    res.status(500).json(err);
    }
});

//yearly data for specific stock symbol
router.get('/yearly/:symbol', function (req, res) {
    const symbol = req.params.symbol;
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_YEARLY&symbol=${symbol}&apikey=${process.env.API_KEY}`;

    try {
        axios.get(url)
            .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    } catch (err){
    console.log(err)
    res.status(500).json(err);
    }
});

// Search for stock symbol
// router.get('/search/:symbol', function (req, res) {
//     const symbol = req.params.symbol;

//     const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${process.env.API_KEY}`;
    
//     try {
//         axios.get(url)
//             .then((response) => {
//             res.json(response.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     } catch (err){
        
//     console.log(err)
//     res.status(500).json(err);
//     }
// });

//company overview from symbol
router.get('/summary/:symbol/', function (req, res) {
    const symbol = req.params.symbol;

    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.API_KEY}`;

    try {
        axios.get(url)
            .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    } catch (err){
    console.log(err)
    res.status(500).json(err);
    }
});


module.exports = router;