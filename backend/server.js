import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import { app, server } from "./sockets/socket.js";


dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB: ', err);
  });

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(3000, () => {
  console.log(`Server is running on port: 3000!`);
})