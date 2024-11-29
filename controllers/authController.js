const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await User.create({ username, password, role });
    res.status(201).json({ token: generateToken(user._id, user.role) });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      res.json({ token: generateToken(user._id, user.role) });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
