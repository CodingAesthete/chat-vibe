import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js"
import mongoose from "mongoose";

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB: ', err);
  });

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log(`Server is running on port: 3000!`);
})