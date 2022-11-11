const router = require("express").Router();
const Passenger = require("../models/Passenger");

//Create Passenger
router.post("/", async (req, res) => {
    const newPassenger = new Passenger(req.body);
   
        try {
          const savedPassenger = await newPassenger.save();
          res.status(200).json(savedPassenger);
        } catch (err) {
          res.status(500).json(err);
        }
  
  });

  module.exports = router;