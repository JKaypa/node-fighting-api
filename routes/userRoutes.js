import { Router } from "express";
import { userService } from "../services/userService.js";
import { createUserValid, updateUserValid } from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.get(
  "/",
  (_req, res, next) => {
    try {
      const users = userService.getAll();
      res.statusCode = 200;
      res.data = users;
    } catch (error) {
      res.statusCode = 500;
      res.err = "Something failed!";
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.get(
  "/:id",
  (req, res, next) => {
    try {
      const user = userService.search(req.params);
      res.statusCode = 200;
      res.data = user;
    } catch (error) {
      res.statusCode = 404;
      res.err = "User not found";
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.post(
  "/",
  createUserValid,
  (req, res, next) => {
    try {
      const user = userService.create(req.body);
      res.statusCode = 201;
      res.data = user;
    } catch (error) {
      res.statusCode = 400;
      res.err = "entity to create isn't valid";
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.put(
  "/:id",
  updateUserValid,
  (req, res, next) => {
    try {
      const updatedUser = userService.edit(req.params.id, req.body);
      res.statusCode = 200;
      res.data = updatedUser;
    } catch (error) {
      res.statusCode = 500;
      res.err = "User was not updated";
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.delete(
  "/:id",
  (req, res) => {
    try {
      userService.remove(req.params.id);
      res.statusCode = 200;
      res.data = "User deleted";
    } catch (error) {
      res.statusCode = 404;
      res.err = "User was not deleted";
    }
    res.send();
  },
  responseMiddleware
);

export { router };
