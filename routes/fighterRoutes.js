import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import { createFighterValid, updateFighterValid } from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter

router.get(
  "/",
  (_req, res, next) => {
    try {
      const users = fighterService.getAll();
      res.statusCode = 200;
      res.data = users;
    } catch (error) {
      res.statusCode = 500;
      res.err = error.mesagge;
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
      const user = fighterService.search(req.params);
      res.statusCode = 200;
      res.data = user;
    } catch (error) {
      res.statusCode = 404;
      res.err = error.message;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.post(
  "/",
  createFighterValid,
  (req, res, next) => {
    try {
      const user = fighterService.create(req.body);
      res.statusCode = 201;
      res.data = user;
    } catch (error) {
      res.statusCode = 400;
      res.err = error.message;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.put(
  "/:id",
  updateFighterValid,
  (req, res, next) => {
    try {
      const updatedUser = fighterService.edit(req.params.id, req.body);
      res.statusCode = 200;
      res.data = updatedUser;
    } catch (error) {
      res.statusCode = 404;
      res.err = error.message;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.delete(
  "/:id",
  (req, res, next) => {
    try {
      fighterService.remove(req.params.id);
      res.statusCode = 200;
      res.data = "fighter deleted";
    } catch (error) {
      res.statusCode = 404;
      res.err = error.message;
    } finally {
      next();
    }
  },
  responseMiddleware
);

export { router };
