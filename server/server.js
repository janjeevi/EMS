const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ems")
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});