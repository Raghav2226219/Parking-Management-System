const Wallet = require("../models/WalletModel");

const getBalance = async (req, res) => {
    try {
        // Correcting query syntax
        const wallet = await Wallet.findOne({ _id: req.params._id });
        
        if (!wallet) {
            return res.status(404).json({ message: 'Unable to find the wallet' });
        }

        res.status(200).json({ wallet });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching balance', error });
    }
};

const addFunds = async (req, res) => {
    try {
        const { _id } = req.params;
        const { amount } = req.body;

        if (amount < 0) {
            return res.status(400).json({ message: "Invalid entered amount" });
        }

        let wallet = await Wallet.findOne({ _id });

        if (!wallet) {
            wallet = await Wallet.create({ _id, balance: amount });
        } else {
            wallet.balance += amount;
            await wallet.save();
        }
        res.status(200).json({ message: 'Funds added successfully', wallet });
    } catch (error) {
        res.status(500).json({ message: 'Error adding funds', error });
    }
};

module.exports = { getBalance, addFunds };
