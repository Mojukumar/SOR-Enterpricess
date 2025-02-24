const router = require("express").Router();
const carModel = require("../models/carsModel");

router.post("/add",async (req,res) =>{
    try {
        const data = req.body;
        const newCar = new carModel(data);
        await newCar.save().then(() => {
            res.status(200).json({message:"Car Added Successfully"})
        });
    } catch (error) {
        console.log(error);
    }
});
 //get requist
 router.get("/getCar",async (req,res) => {
    let cars;
    try {
        cars = await carModel.find();
        res.status(200).json({ cars });
    } catch (error) {
        console.log(error);
    }
});
//get requist by id
router.get("/getCar/:id",async (req,res) => {
    let cars;
    const id = req.params.id;
    try {
        cars = await carModel.findById(id);
        res.status(200).json({ cars });
    } catch (error) {
        console.log(error);
    }
});
//update cars by id
router.put("/updateCar/:id",async (req,res) => {
    const id = req.params.id;
    const {brand,name,model,image,price,rent} = req.body;
    let cars;
    try {
        cars = await carModel.findByIdAndUpdate(id,{brand,name,model,image,price,rent});
        cars = await cars.save().then(() => res.json({message:"Data Updated Successfully"}));
    } catch (error) {
        console.log(error);
    }
});
//delete data by id
router.delete("/deleteCar/:id", async (req, res) => {
    const id = req.params.id;
    try {
      console.log('Deleting car with ID:', id);
      await carModel.findByIdAndDelete(id).then(() => res.status(201).json({ message: "Car Deleted successfully" }));
      console.log('Car deleted successfully');
    } catch (error) {
      console.error('Error deleting car:', error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
module.exports = router;