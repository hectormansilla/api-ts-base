import { Router } from "express";
import { getItems } from "../controllers/controller.order";
import { checkJwt } from "../middlewares/middleware.session";

const router = Router();

router.get('/', checkJwt, getItems)

export { router };