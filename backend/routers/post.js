import express from "express";


 const Router = express.Router();

Router.get("/",(req, res)=>{res.send("hey i am users router")})
export default Router