import { Router } from "express";
const router: Router = Router();

// route auth
import authRoutes from "./auth";

// routes
router.use("/auth", authRoutes);

export default router;
