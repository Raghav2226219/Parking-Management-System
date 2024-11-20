const mongoose = require('mongoose');

const parkingSlotSchema = new mongoose.Schema({
    slotId: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate slot IDs
    },
    type: {
        type: String,
        required: true,
        enum: ['2-wheeler', '3-wheeler', '4-wheeler'], // Restricts the types
    },
    isOccupied: {
        type: Boolean,
        default: true, // Defaults to unoccupied
    },
});


module.exports = mongoose.model('ParkingSlot', parkingSlotSchema);
