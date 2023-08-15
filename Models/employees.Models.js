import { DataTypes } from "sequelize";
import sequelize from "../Config/sequelize.js";

const Employee = sequelize.define(
  "Employee",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    salary: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
    tableName: "Employee",
  }
);

export default Employee;
