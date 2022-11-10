import { check, validationResult } from "express-validator";

export const validateUser = [
//   check("name")
//     .trim()
//     .not()
//     .isEmpty()
//     .withMessage("Name is missing!")
//     .isLength({ min: 3, max: 20 })
//     .withMessage("Name must be from 3 to 20 characters long!"),
];

export const validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (!error.length) return next();

  res.status(400).json({ sucess: false, error: error[0].msg });
};
