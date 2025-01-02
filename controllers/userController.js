import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerController(req, res) {
  try {
    // Validate request body
    const { fullName, username, email, password } = req.body;

    // Check if username already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ 
        success: false,
        message: "User already exists" });
        
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const UpdateUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
    });
    await User(UpdateUser).save();

    // Response

    res.status(200).json({
      succes: true,
      message: "User registered successfully",
      UpdateUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `error registering user ${error.message}`,
    });
  }
}

export async function loginController(req, res) {
  try {
    // Validate request body
    const { username, email, password } = req.body;

    // Check if user not exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not exists , please register",
      });
    }

    // Check if password is correct
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        success: false,
        message: "invalid credentials!!",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    // Response

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: "user logged in successfully",
        token,
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `this error ${error.message}`,
    });
  }
}

export async function authToken(req, res) {
   const token = req.cookies.token; // Access HttpOnly cookie

   if (!token) {
     return res.status(401).json({ message: "Unauthorized" });
   }

   try {
     const decoded = jwt.verify(token, process.env.SECRET_KEY);
     return res.status(200).json({ valid: true, user: decoded });
   } catch (err) {
     return res.status(401).json({ message: "Invalid or expired token" });
   }
}

export async function logoutController(req, res) {
  // Delete JWT token from the cookie
  try {
    return res.status(200).cookie("token","").json({
      success: true,
      message: "logout successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "logout failed",
    });
  }
}
