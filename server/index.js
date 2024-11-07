import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

const app = express();
app.use(express.json());

// mongodb connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error(err);
  });
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use('/server/user',userRouter)
app.use('/server/auth',authRouter)

// This is middleware that will be used to 
app.use((err, req,res,next)=>{
const statusCode = err.statusCode || 500;
const message = err.message || "Internal Server Error"
return res.status(statusCode).json({
  success :false,
  statusCode,
  message
})})
