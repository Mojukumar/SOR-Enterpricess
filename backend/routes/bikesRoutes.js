const router = require("express").Router();
const bikeModel = require("../models/bikesModel");

router.post("/add1",async (req,res) =>{
    try {
        const data = req.body;
        const newBike = new bikeModel(data);
        await newBike.save().then(() => {
            res.status(200).json({message:"Bike Added Successfully"})
        });
    } catch (error) {
        console.log(error);
    }
});
router.get("/getBike",async (req,res) => {
    let bikes;
    try {
        bikes = await bikeModel.find();
        res.status(200).json({ bikes });
    } catch (error) {
        console.log(error);
    }
});
//get requist by id
router.get("/getBike/:id",async (req,res) => {
    let bikes;
    const id = req.params.id;
    try {
        bikes = await bikeModel.findById(id);
        res.status(200).json({ bikes });
    } catch (error) {
        console.log(error);
    }
});
//update bikess by id
router.put("/updateBike/:id",async (req,res) => {
    const id = req.params.id;
    const {brand,name,model,image,price,rent} = req.body;
    let bikes;
    try {
        bikes = await bikeModel.findByIdAndUpdate(id,{brand,name,model,image,price,rent});
        bikes = await bikes.save().then(() => res.json({message:"Data Updated Successfully"}));
    } catch (error) {
        console.log(error);
    }
});
//delete data by id
router.delete("/deleteBike/:id", async (req, res) => {
    const id = req.params.id;
    console.log('Deleting bike with ID:', id);
  
    try {
      await bikeModel.findByIdAndDelete(id).then(() => res.status(201).json({ message: "Bike Deleted successfully" }));
      console.log('Bike deleted successfully');
    } catch (error) {
      console.error('Error deleting bike:', error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  
module.exports = router;