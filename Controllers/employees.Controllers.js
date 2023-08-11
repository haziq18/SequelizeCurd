import Employee from "../Models/employee.Models.js";

export var addUser = async (req, res) => {
  try {
    const { firstName, lastName, age, salary } = req.body;
    const emp = Employee.build({
      firstName: firstName,
      lastName: lastName,
      age: age,
      salary: salary,
    });
    await emp.save();
    console.log(emp.toJSON());
  } catch (err) {
    res.status(400).send("error");
    return;
  }
  res.send("done");
};

export var getUser = async (req, res) => {
  try {
    const data = await Employee.findAll({
      where: {
        firstName: req.params.firstName,
      },
    });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send("error");
  }
};

export var delUser = async (req, res) => {
  try {
    await Employee.destroy({
      where: {
        firstName: req.params.firstName,
      },
    });
    res.status(200).send("Entry Deleted");
  } catch (err) {
    res.status(400).send("error");
  }
};

export var updateUser = async (req, res) => {
  try {
    var data = req.body
    await Employee.update(data,{
      where: {
        firstName: req.params.firstName,
      },
    });
    res.status(200).send("Entry Updated");
  } catch (err) {
    res.status(400).send("error");
  }
};
