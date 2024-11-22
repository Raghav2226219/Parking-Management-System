const express = require('express');
const router = express.Router();
const { getBalance, addFunds } = require('../controllers/WalletController');
const { protect } = require('../middlewares/jwtMiddleware');

router.post('/addFunds/:id', protect, addFunds);
router.get('/balance/:id', protect, getBalance);

module.exports = router;