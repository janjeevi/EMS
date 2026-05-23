const Employee = require("../models/Employee");

const addEmployee = async (req, res) => {

  try {

    const employee = new Employee(req.body);

    await employee.save();

    res.status(201).json({
      message: "Employee Added Successfully"
    });

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = addEmployee;