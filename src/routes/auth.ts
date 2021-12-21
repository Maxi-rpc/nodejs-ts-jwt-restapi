import { Router } from "express";
const router: Router = Router();

// controllers
import { signUp, signIn, profile } from "../controllers/auth.controller";
// routes
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/profile", profile);

export default router;
