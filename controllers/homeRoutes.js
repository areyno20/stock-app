const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const apiKey = require('../public/js/APIKEY');

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




  

module.exports = router;
