import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  const regex = /[^a-zA-Z0-9]{3,}/;

  let message = "Missing data: ";
  let errorMessage = [];
  if (!firstName || typeof firstName !== "string") {
    errorMessage.push("first name");
  }
  if (!lastName || typeof lastName !== "string") {
    errorMessage.push("last name");
  }
  if (!email || typeof email !== "string" || email.includes("@gmail")) {
    errorMessage.push("email should contain @gmail domain");
  }
  if (!phoneNumber || typeof phoneNumber !== "string") {
    errorMessage.push("phone number");
  }
  if (!password || typeof password !== "string" || !regex.test(password)) {
    errorMessage.push("password should have at least 3 symbols");
  }

  if (errorMessage.length > 0) {
    message += errorMessage.join(", ");
    return res.status(400).json({ error: true, message });
  }

  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  if (firstName || lastName || email || phoneNumber || password) {
    next();
  }

  return res.status(400).json({ error: true, message: "Missing data" });
};

export { createUserValid, updateUserValid };
