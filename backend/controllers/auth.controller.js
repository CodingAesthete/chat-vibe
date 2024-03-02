import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json("Passwords don't match!");
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists!" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const maleAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      avatar: gender === "male" ? maleAvatar : femaleAvatar
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        avatar: newUser.avatar
      });
    }

  } catch (err) {
    console.log('Error in signing up: ', err.message);
    res.status(500).json({ error: "Internal Server Error!" })
  }
}

export const login = (req, res) => {
  console.log('LogIn');
}

export const logout = (req, res) => {
  console.log('LogOut');
}