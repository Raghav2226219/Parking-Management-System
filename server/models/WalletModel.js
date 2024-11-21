const mongoose = require('mongoose');

const walletSchema = mongoose.Schema({    
_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }, 
    balance: { type: Number, default: 0 }});

module.exports = mongoose.model('Wallet', walletSchema);
