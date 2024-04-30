import express from "express";
import User from  "../models/user.js"
import bcrypt from "bcrypt"

 const Router = express.Router();
Router.post("/register", async (req, res)=>{
  const newUser  = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        try{
        const user =   await newUser.save();
        res.status(200).json(user)
        }catch(err){
                console.log(err)
        }
//  const user  =await  new User ({
//   username: "ustad",
//   email: "ustad@mail.com",
//   password: "123456789"
//  })

//  await user.save()
//   res.send("ok")
})
// Router.post("/register",async (req, res)=>{
//       try{ //GENERATE NEW PASSWORD
//      const salt = await bcrypt.genSalt(10);
//      const hashedPassword =await bcrypt.hash(req.body.password, salt);
//      console.log(hashedPassword, "=========?hashed")
//     // CREATE NEW USER
//     const user  = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: hashedPassword
//     })


//     // SAVE USER and RETURN
    
//         await  user.save();
//         res.sendStatus(200).json(user)
//       }catch(err){
//            console.log(err)
//       }
   
//    res.send("polki")
// })
export default Router