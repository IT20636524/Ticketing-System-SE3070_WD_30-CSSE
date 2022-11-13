const router = require("express").Router();
const Passenger = require("../model/Passenger");


//CREATE PASSENGER
router.post("/", async (req, res) => {
    const newPassenger = new Passenger(req.body);
   
        try {
          const savedPassenger = await newPassenger.save();
          res.status(200).json(savedPassenger);
        } catch (err) {
          res.status(500).json(err);
        }
  
 
  
  });

//GET ALL CARD
router.get("/", async (req, res) => {
    try {
      const card = await Passenger.find();
      res.status(200).json(card);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;