// route for testing
import { Router } from "express";
const router: Router = Router();

import { getUser, getUsers } from "../controllers/test.controller";

router.route("/user").get(getUser);

router.route("/users").get(getUsers);

export default router;
