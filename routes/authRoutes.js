import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    try {
      // TODO: Implement login action (get the user if it exist with entered credentials)
      const data = authService.login(req.body);
      res.data = data;
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
