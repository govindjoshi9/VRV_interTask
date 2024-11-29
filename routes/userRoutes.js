const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  logout,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// User CRUD operations (Admin Only)
router.get("/", authMiddleware, roleMiddleware(["Admin"]), getAllUsers); // Get all users
router.get("/:id", authMiddleware, roleMiddleware(["Admin"]), getUserById); // Get single user by ID
router.post("/", authMiddleware, roleMiddleware(["Admin"]), createUser); // Create a new user
router.put("/:id", authMiddleware, roleMiddleware(["Admin"]), updateUser); // Update a user
router.delete("/:id", authMiddleware, roleMiddleware(["Admin"]), deleteUser); // Delete a user

// Logout (Accessible to all logged-in users)
router.post("/logout", authMiddleware, logout);

module.exports = router;
