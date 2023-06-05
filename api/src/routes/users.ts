import express from "express";
import { addUser, deleteUser, getUsers, updateuser } from "../controllers/user";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateuser);

router.delete("/:id", deleteUser);

export default router;