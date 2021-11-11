import express from "express";
import {
  getAllTest,
  getTestById,
  createTest,
  updateTest,
  deleteTest
} from "../controllers/TestController.js";

const router = express.Router();

router.get("/getAllTest", getAllTest);
router.get("/getTest/:id", getTestById);
router.post("/createTest", createTest);
router.patch("/updateTest/:id", updateTest);
router.delete("/deleteTest/:id", deleteTest);

export default router;
