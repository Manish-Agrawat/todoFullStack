import express from "express";
import {
  registerController,
  loginController,
  logoutController,
  authToken,
} from "../controllers/userController.js";

const router = express.Router();

// Endpoint to get all USERS

router.post("/register", registerController); // Register a user

router.post("/login", loginController); // Login a user

router.get("/logout", logoutController); // Log out a user

router.get("/token-verify",  authToken);

export default router;
