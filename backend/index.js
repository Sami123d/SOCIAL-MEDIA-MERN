import express from "express"; 
import cors from "cors"; 
import multer from "multer"; 
import dotenv from "dotenv"
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import userRoute from "./routers/users.js"
import authRoute from "./routers/auth.js"
const app = express();
dotenv.config()
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    // Place your code that relies on the MongoDB connection here
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use (helmet());
// jo bhi chez hoti hai vo app.use se guzarti hai 

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
// server setup
const port = 4000;
app.listen(port, ()=>{
    console.log(`server started at http://localhost:${port}`);
})
