const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mojukumar:mojukumar123@cluster0.5bs7fmm.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log("connected"))
  .catch(err => console.error("Connection error", err));
