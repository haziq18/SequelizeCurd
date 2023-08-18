import Employee from "../Models/employees.Models.js";
import { sendResponse } from "../Helpers/response.Helpers.js";
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
    sendResponse(200,"success",emp.toJSON(),res);
  } catch (err) {
    sendResponse(400,"error",err,res);
    return;
  }
  return;
};

export var getUser = async (req, res) => {
  try {
    const data = await Employee.findAll({
      where: {
        firstName: req.params.firstName,
      },
    });
    sendResponse(200,"success",data,res)
  } catch (err) {
    sendResponse(400,"error",err,res);
  }
};

export var delUser = async (req, res) => {
  try {
    await Employee.destroy({
      where: {
        firstName: req.params.firstName,
      },
    });
    sendResponse(200,"success",null,res);
  } catch (err) {
    sendResponse(400,"error",err,res);
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
    sendResponse(200,"success",null,res);
  } catch (err) {
    sendResponse(400,"error",err,res);
  }
};
