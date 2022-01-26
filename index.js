import express from 'express';
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { hallBookingRouter } from "./routers/hallbooking.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("You are listening to the hall booking api!")
})

app.use("/hallbooking", hallBookingRouter)

app.listen(PORT, () => {
    console.log("App is running on " + PORT);
})

const MONGO_URL = process.env.MONGO_URL

const createConnection = async () => {
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    console.log("Mongodb is connected!")
    return client;

}

export const client = await createConnection();