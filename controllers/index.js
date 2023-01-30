const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//const stockRoutes = require('./stocks/stock');
// const currencyRoutes = require('./currency');
// const canvasjsRoutes = require('./canvasjs');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//router.use('/stocks/stock', stockRoutes);
// router.use('/currency', currencyRoutes);
// router.use('/canvasjs', canvasjsRoutes);

module.exports = router;
