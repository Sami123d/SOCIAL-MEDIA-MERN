import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const Router = express.Router();
Router.post("/register", async (req, res) => {
  try {
    //GENERATE NEW PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // SAVE USER and RETURN
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// // LOGIN
Router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
     return res.status(404).json("email not found");
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    
    if(!validPassword){return res.status(400).json("pas not match")}
   
    res.status(200).json(user);
  } catch (Err) {
    res.status(500).json(Err)
  }
});

export default Router;


// Router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       // To avoid exposing information, respond with a generic error message
//       return res.status(400).json({ error: "Invalid email or password" });
//     }

//     // Compare passwords
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );

//     if (!validPassword) {
//       // To avoid exposing information, respond with a generic error message
//       return res.status(400).json({ error: "Invalid email or password" });
//     }

//     // Respond with user data
//     res.status(200).json(user);
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
// export default Router;