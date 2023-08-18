import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const getCredentials = (req, res) => {
  console.log(req.body);
  try {
    if (req.body.password == "haziq123") {
      const username = req.body.username;
      const user = { name: username };
      const accesstoken = jwt.sign(user, process.env.privateKey, {
        expiresIn: "120d",
      });
      return res.json({ accesstoken: accesstoken, message: "authorized" });
    }
    else{
      console.log("object");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
