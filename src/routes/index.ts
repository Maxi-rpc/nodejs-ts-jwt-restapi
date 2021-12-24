import { Router } from "express";
const router: Router = Router();

// route auth
import authRoutes from "./auth";

// route for testing
import testRoutes from "./test";

// routes
router.use("/auth", authRoutes);
//test
router.use("/test", testRoutes);

export default router;
