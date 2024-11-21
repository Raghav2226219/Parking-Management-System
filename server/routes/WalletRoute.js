
const express = require('express');
const router = express.Router();
const { getBalance, addFunds } = require('../controllers/WalletController'); 
const { protect } = require('../middlewares/jwtMiddleware');

router.post('/addFunds/:userId', protect, addFunds);

router.get('/balance/:userId', protect, getBalance);

module.exports = router;
