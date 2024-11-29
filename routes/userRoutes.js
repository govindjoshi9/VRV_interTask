const express = require("express");
const router = express.Router();
const {
  logout,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const {
  authenticateJWT,
  authorizeRole,
} = require("../middleware/authMiddleware");

// LOGOUT
router.post("/logout", authenticateJWT, logout);

// READ: Get all users (Admin only)
router.get("/", authenticateJWT, authorizeRole("Admin"), getAllUsers);

// READ: Get a single user by ID
router.get("/:id", authenticateJWT, getUserById);

// CREATE: Create a new user (Admin only)
router.post("/", authenticateJWT, authorizeRole("Admin"), createUser);

// UPDATE: Update a user by ID (Admin only)
router.put("/:id", authenticateJWT, authorizeRole("Admin"), updateUser);

// DELETE: Delete a user by ID (Admin only)
router.delete("/:id", authenticateJWT, authorizeRole("Admin"), deleteUser);

module.exports = router;
