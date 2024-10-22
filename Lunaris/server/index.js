import express from "express";
import cors from "cors";
import pool from "./db.js";
import fileUpload from "express-fileupload";
import router from "./router.js";

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

app.use(
  cors({
    exposedHeaders: ["x-total-count"],
  })
);

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
