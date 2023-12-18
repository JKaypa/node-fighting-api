import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const { name, health, power, defense } = req.body;

  let message = "Missing data: ";
  const errorMessage = [];

  if (!name || typeof name !== "string") {
    errorMessage.push("name");
  }
  if (!health || typeof health !== "number" || health < 80 || health > 120) {
    req.body.health = 100;
  }
  if (!power || typeof power !== "number" || power < 1 || power > 100) {
    errorMessage.push("power should be a number between 1 and 100");
  }
  if (!defense || typeof defense !== "number" || defense < 1 || defense > 10) {
    errorMessage.push("defense should be a number between 1 and 10");
  }
  if (errorMessage.length > 0) {
    message += errorMessage.join(", ");
    return res.status(400).json({ error: true, message });
  }
  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update

  const { name, health, power, defense } = req.body;

  if (name || health || power || defense) {
    next();
  }
  return res.status(400).json({ error: true, message: "Missing data" });
};

export { createFighterValid, updateFighterValid };
