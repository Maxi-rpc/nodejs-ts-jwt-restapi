// route for testing
import { Router } from "express";
const router: Router = Router();

import { getUser, getUsers } from "../controllers/test.controller";

router.get("/user", getUser);

router.get("/users", getUsers);

export default router;
