import { Router } from "express";
const router: Router = Router();

import authRoutes from "./auth";
// routes
router.get("/", authRoutes);

export default router;
