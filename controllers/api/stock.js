//dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const react = require('react');
const CanvasJSReact = require('./canvasjs.react.js');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// key: 'GPC9UGIE9X6VAHJ0' 

const cors = require('cors');
router.use(cors());
router.options('*', cors());

const dotenv = require('dotenv');
dotenv.config();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// app.get('/', function (req, res) {
//     res.render('list',{query, stock_Dates, stock_Open, stock_High, stock_Low, stock_Close, stock_Volume});
// });

//const interval = require('/interval.js'); // not sure if this is needed

// ***** Code for specific intervals if we implement a desired interval *****
// router.get('/stock/:type/:symbol', function (req, res) {
//     const interval = require('/interval.js');
//     const symbol = req.params.symbol;
//     const range = req.params.range;

//     const url = `https://www.alphavantage.co/query?function=${interval}&symbol=${symbol}&interval=${range}&apikey=${process.env.API_KEY}`;

// });

// Daily data for specific stock symbol
router.get('/daily/:symbol', function (req, res) {
    const symbol = req.params.symbol;
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=30min&apikey=${process.env.API_KEY}`;

    class App extends Component {
        constructor() {
            super();
            this.state = {
                dataPoint: []
            }
        }
    componentChart() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const stockData = data['Time Series (IntraDaily)'];
            const newData = Object.keys(stockData).reduce((result, key) => {
                const value = stockData[key];
                const tmp = {
                    x: new Date(key),
                    y: [parseFloat(value['1. open']), parseFloat(value['2. high']), 
                    parseFloat(value['3. low']), parseFloat(value['4. close'], parseFloat(value['5. volume']))],
                    color: parseFloat(value['4. close']) > parseFloat(value['1. open']) ? 'green' : 'red'
                }
                result.push(tmp);
                return result;
            }, [])
            console.log(newData);
            this.setState({
                dataPoint: newData.slice(0, 50)
            })
        })
    }
    render () {
        const options = {
            title: {
                text: "Stock Chart with Range Selector"
            },
            axisX: {
                valueFormatString: "DD MMM"
            },
            axisY: {
                prefix: "$",
                title: "Price (in USD)"
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                verticalAlign: "bottom",
                horizontalAlign: "left",
                dockInsidePlotArea: true,
                itemclick: toogleDataSeries
            },
            data: [{
                type: "candlestick",
                name: "${symbol}",
                showInLegend: true,
                yValueFormatString: "$#,###.##",
                xValueFormatString: "DD MMM, YYYY",
                dataPoints: [
                    this.state.data_points
                ]
            }]
        }
        return (
            <div>
                <CanvasJSChart options = {options}
                    onRef={ref => this.chart = ref}
                />
            </div>
        );
    }
    }
});


//weekly data for specific stock symbol
router.get('/weekly/:symbol', function (req, res) {
    const symbol = req.params.symbol;

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${process.env.API_KEY}`;
    
    class App extends Component {
        constructor() {
            super();
            this.state = {
                dataPoint: []
            }
        }
    componentChart() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const stockData = data['Weekly Time Series'];
        const newData = Object.keys(stockData).reduce((result, key) => {
            const value = stockData[key];
            const tmp = {
                x: new Date(key),
                y: [parseFloat(value['1. open']), parseFloat(value['2. high']), 
                parseFloat(value['3. low']), parseFloat(value['4. close'], parseFloat(value['5. volume']))],
                color: parseFloat(value['4. close']) > parseFloat(value['1. open']) ? 'green' : 'red'
            }
            result.push(tmp);
            return result;
        }, [])
        console.log(newData);
        res.json(newData);
    })
    }
    render() {
    const options = {
        title: {
            text: "Stock Chart with Range Selector"
        },
        axisX: {
            valueFormatString: "DD MMM"
        },
        axisY: {
            prefix: "$",
            title: "Price (in USD)"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "candlestick",
            name: "${symbol}",
            showInLegend: true,
            yValueFormatString: "$#,###.##",
            xValueFormatString: "DD MMM, YYYY",
            dataPoints: [
                this.state.data_points
            ]
        }]
    }
    return (
        <div>
            <CanvasJSChart options = {options}
                onRef={ref => this.chart = ref}
            />
        </div>
    );
    }
    }
});


//monthly data for specific stock symbol
router.get('/monthly/:symbol', function (req, res) {
    const symbol = req.params.symbol;

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${process.env.API_KEY}`;

    class App extends Component {
        constructor() {
            super();
            this.state = {
                dataPoint: []
            }
        }
    componentChart() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const stockData = data['Monthly Time Series'];
        const newData = Object.keys(stockData).reduce((result, key) => {
            const value = stockData[key];
            const tmp = {
                x: new Date(key),
                y: [parseFloat(value['1. open']), parseFloat(value['2. high']), 
                parseFloat(value['3. low']), parseFloat(value['4. close'], parseFloat(value['5. volume']))],
                color: parseFloat(value['4. close']) > parseFloat(value['1. open']) ? 'green' : 'red'
            }
            result.push(tmp);
            return result;
        }, []);
        console.log(stockData);
        res.json(newData);
    })
    .catch(err => {
        console.log(err);
    })
    }
        render() {
            const options = {
                title: {
                    text: "Stock Chart with Range Selector"
                },
                axisX: {
                    valueFormatString: "DD MMM"
                },
                axisY: {
                    prefix: "$",
                    title: "Price (in USD)"
                },
                toolTip: {
                    shared: true
                },
                legend: {
                    cursor: "pointer",
                    verticalAlign: "bottom",
                    horizontalAlign: "left",
                    dockInsidePlotArea: true,
                    itemclick: toogleDataSeries
                },
                data: [{
                    type: "candlestick",
                    name: "${symbol}",
                    showInLegend: true,
                    yValueFormatString: "$#,###.##",
                    xValueFormatString: "DD MMM, YYYY",
                    dataPoints: [
                        this.state.data_points
                    ]
                }]
            }
            return (
                <div>
                    <CanvasJSChart options = {options}
                        onRef={ref => this.chart = ref}
                    />
                </div>
            );
        }
    }
});



//yearly data for specific stock symbol
router.get('/yearly/:symbol', function (req, res) {
    const symbol = req.params.symbol;
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_YEARLY&symbol=${symbol}&apikey=${process.env.API_KEY}`;

    class App extends Component {
        constructor() {
            super();
            this.state = {
                dataPoint: []
            }
        }
    componentChart() {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const stockData = data['Monthly Time Series'];
            const newData = Object.keys(stockData).reduce((result, key) => {
                const value = stockData[key];
                const tmp = {
                    x: new Date(key),
                    y: [parseFloat(value['1. open']), parseFloat(value['2. high']), 
                    parseFloat(value['3. low']), parseFloat(value['4. close'], parseFloat(value['5. volume']))],
                    color: parseFloat(value['4. close']) > parseFloat(value['1. open']) ? 'green' : 'red'
                }
                result.push(tmp);
                return result;
            }, []);
            console.log(stockData);
            res.json(newData);
        })
        .catch(err => {
            console.log(err);
        })
    }
        render() {
            const options = {
                title: {
                    text: "Stock Chart with Range Selector"
                },
                axisX: {
                    valueFormatString: "DD MMM"
                },
                axisY: {
                    prefix: "$",
                    title: "Price (in USD)"
                },
                toolTip: {
                    shared: true
                },
                legend: {
                    cursor: "pointer",
                    verticalAlign: "bottom",
                    horizontalAlign: "left",
                    dockInsidePlotArea: true,
                    itemclick: toogleDataSeries
                },
                data: [{
                    type: "candlestick",
                    name: "${symbol}",
                    showInLegend: true,
                    yValueFormatString: "$#,###.##",
                    xValueFormatString: "DD MMM, YYYY",
                    dataPoints: [
                        this.state.data_points
                    ]
                }]
            }
            return (
                <div>
                    <CanvasJSChart options = {options}
                        onRef={ref => this.chart = ref}
                    />
                </div>
            );
        }
    }
});

// Search for stock symbol
// router.get('/search/:symbol', function (req, res) {
//     const symbol = req.params.symbol;

//     const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${process.env.API_KEY}`;
    
// });

// //company overview from symbol
// router.get('/summary/:symbol/', function (req, res) {
//     const symbol = req.params.symbol;

//     const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.API_KEY}`;


// });


module.exports = router;