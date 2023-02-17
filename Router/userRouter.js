

import { Router } from "express";
import {
  addLink,
} from "../controllers/userController.js";

const router = Router();
// Authorization
router.use(isLoggedIn);

// Routes
router.get("/add", renderAddLink);
router.post("/add", addLink);
// router.get("/", isLoggedIn, renderLinks);
// router.get("/delete/:id", deleteLink);
// router.get("/edit/:id", renderEditLink);
// router.post("/edit/:id", editLink);

export default router;