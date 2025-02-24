const router = require("express").Router();
const cycleModel = require("../models/cyclesModel");

router.post("/add2",async (req,res) =>{
    try {
        const data = req.body;
        const newCycle = new cycleModel(data);
        await newCycle.save().then(() => {
            res.status(200).json({message:"Cycle Added Successfully"})
        });
    } catch (error) {
        console.log(error);
    }
});
//get requist
router.get("/getCycle",async (req,res) => {
    let cycles;
    try {
        cycles = await cycleModel.find();
        res.status(200).json({ cycles });
    } catch (error) {
        console.log(error);
    }
});
//get requist by id
router.get("/getCycle/:id",async (req,res) => {
    let cycles;
    const id = req.params.id;
    try {
        cycles = await cycleModel.findById(id);
        res.status(200).json({ cycles });
    } catch (error) {
        console.log(error);
    }
});
//update cars by id
router.put("/updateCycle/:id",async (req,res) => {
    const id = req.params.id;
    const {brand,name,model,image,price,rent} = req.body;
    let cycles;
    try {
        cycles = await cycleModel.findByIdAndUpdate(id,{brand,name,model,image,price,rent});
        cycles = await cycles.save().then(() => res.json({message:"Data Updated Successfully"}));
    } catch (error) {
        console.log(error);
    }
});
//delete data by id
router.delete("/deleteCycle/:id",async(req,res) => {
    const id = req.params.id;
    try {
        await cycleModel.findByIdAndDelete(id).then(() => res.status(201).json({message:"Cycle Deleted successfully"}))
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;