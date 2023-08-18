import { Sequelize } from "sequelize";

const sequelize = new Sequelize("employeesdb", "root", "haziq123", {
  host: "localhost",
  dialect: "mysql",
});

try{
    sequelize.authenticate();
    console.log("connection established");
}catch(error){
    console.log("unable to connect");
}

sequelize.sync();
export default sequelize;
