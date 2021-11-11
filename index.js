import express from "express";
import db from "./config/database.js";
import testTableRoute from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('database connected');
} catch (error) {
    console.error('error connecting to database: ', error);
}

app.use(cors());
app.use(express.json());
app.use('/', testTableRoute);

app.listen(5000, () => console.log('Server running at port 5000'));