const express = require("express");

const router = express.Router();

const Employee =
  require("../models/Employee");


// TEST ROUTE

router.get("/", (req, res) => {

  res.send("Employee Route Working");

});


// ADD EMPLOYEE

router.post("/add", async (req, res) => {

  try {

    const employee =
      new Employee(req.body);

    await employee.save();

    res.status(201).json({
      message: "Employee Added"
    });

  }

  catch (error) {

    res.status(500).json(error);

  }

});


// DELETE EMPLOYEE

router.delete("/:id", async (req, res) => {

  try {

    await Employee.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Employee Deleted"
    });

  }

  catch (error) {

    res.status(500).json(error);

  }

});


// UPDATE EMPLOYEE

router.put("/:id", async (req, res) => {

  try {

    const updatedEmployee =
      await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedEmployee);

  }

  catch (error) {

    res.status(500).json(error);

  }

});


module.exports = router;