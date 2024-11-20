const express = require('express');
const router = express.Router();
const {getAllParkingSpaces, addParkingSpace, updateParkingSpace } = require("../controllers/ParkingSpaceController");

router.get('/view', getAllParkingSpaces);

router.put('/updateslot', updateParkingSpace);

router.post('/addslot', addParkingSpace);

module.exports = router;