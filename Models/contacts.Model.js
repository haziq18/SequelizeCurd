import { DataTypes } from ("sequelize");
import sequelize from "../Config/sequelize.js";

const Contact = sequelize.define(
  "Contacts",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    phone_number: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default Contact;
