import express from 'express';
import { createRoom, bookRoom, getAllRooms, getAllCustomers } from "../utils.js"

const router = express.Router();

router.route("/").get((req, res) => {
    res.send("Please check the instructions on the github!")
})

router.route("/create-room").post(async (req, res) => {
    const data = req.body;
    const response = await createRoom(data);
    res.send(response);
})

router.route("/book-room").post(async (req, res) => {
    const data = req.body;
    const response = await bookRoom(data);
    res.send(response);
})

router.route("/all-rooms").get(async (req, res) => {
    const response = await getAllRooms();
    res.send(response);
})

router.route("/all-customers").get(async (req, res) => {
    try {

        const response = await getAllCustomers();
        res.send(response);
    }
    catch (err) {
        console.error(err)
    }
})

export const hallBookingRouter = router;