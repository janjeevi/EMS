const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/employee,employeeRoutes);

mongoose.connect(
  "mongodb://127.0.0.1:27017/hrpanel"
)

.then(() => {

  console.log("MongoDB Connected");

})

.catch((error) => {

  console.log(error);

});

app.get("/", (req, res) => {

  res.send("HR Backend Running");

});

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});