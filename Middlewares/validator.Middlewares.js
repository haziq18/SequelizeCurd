import joi from "joi";
import { validator } from "../Helpers/validate.Helpers.js";
const schema = joi.object({
  username: joi.string().required().email().min(4).max(10),
  password: joi.string().required(),
  confirmpassword: joi.ref("password"),
});

export const validateLogin = (req, res, next) => {
  const schemaValidator = validator(schema);
  const { error, value } = schemaValidator(req.body);
  if (error) return res.status(403).send(error);

  next();
};
