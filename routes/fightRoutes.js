import { Router } from "express";
import { fightersService } from "../services/fightService.js";
// import { createUserValid, updateUserValid } from "../middlewares/fight.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// OPTIONAL TODO: Implement route controller for fights

router.get(
  "/",
  (_req, res, next) => {
    try {
      const fights = fightersService.getAll();
      res.statusCode = 200;
      res.data = fights;
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
      const fight = fightersService.search(req.params);
      res.statusCode = 200;
      res.data = fight;
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
  // createFighterValid,
  (req, res, next) => {
    try {
      const fight = fightersService.create(req.body);
      res.statusCode = 201;
      res.data = fight;
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
  // updateFighterValid,
  (req, res, next) => {
    try {
      const updatedUser = fightersService.edit(req.params.id, req.body);
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
      fightersService.remove(req.params.id);
      res.statusCode = 200;
      res.data = "fight deleted";
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
