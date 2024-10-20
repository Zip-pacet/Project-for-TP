import express from "express"; // Correct import for express
import PostController from "./PostController.js";

const router = express.Router(); // Create the router using express.Router()

// Define the routes
router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);

export default router;