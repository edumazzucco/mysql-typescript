import express from "express";
import usersRoute from "./routes/users";

import cors from "cors";
import dotenv from "dotenv";


const app = express();

dotenv.config();
app.use(express.json());

app.use(cors());

app.use("/", usersRoute);

app.listen(8080);

