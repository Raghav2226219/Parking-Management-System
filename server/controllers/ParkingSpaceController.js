const ParkingSlot = require('../models/ParkingSpaceModel'); 

const getAllParkingSpaces = async (req, res) => {
  try {
    const spaces = await ParkingSlot.find();
    res.status(200).json({ success: true, data: spaces });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const addParkingSpace = async (req, res) => {
    const { slotId, type } = req.body;

    if (!slotId || !type) {
      return res.status(400).json({ success: false, message: 'SlotId and Type are required' });
    }

    const slotExists = await ParkingSlot.findOne({slotId});
    if (slotExists){
        return res.status(400).json({ message: "Slot already exists"});
    }

    const newslot = new ParkingSlot({slotId, type});
    await newslot.save();
    res.status(201).json({ message: "Parking Slot added", newslot});
   
};

const updateParkingSpace = async (req, res) => {
  try {
    const { slotId } = req.body; 
    const { isAvailable } = req.body; 

    const slot = await ParkingSlot.findOne({ slotId });

    if (!slot) {
      return res.status(404).json({message: "Slot not found" });
    }

    slot.isAvailable = isAvailable;

    await slot.save();
    res.status(200).json({ success: true, data: slot });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { getAllParkingSpaces, addParkingSpace, updateParkingSpace };
