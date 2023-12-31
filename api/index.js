import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import ticketsRoute from "./routes/ticket.js";



const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/tickets", ticketsRoute);


const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

  app.listen(8000, () => {
    connect();
    console.log("Connected to backend.");
  });
  