import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import router from "./router.js";
import cors from "cors";

const PORT = 3001;
const DB_URL =
  "mongodb+srv://user:lunaris1@cluster0.m3yuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    // No need to pass useNewUrlParser or useUnifiedTopology in the options
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
