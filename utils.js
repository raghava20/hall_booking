import { ObjectId } from "mongodb";
import { client } from "./index.js";

export const createRoom = async (data) => {
    return await client.db('hallbooking').collection('rooms').insertOne(data)
}

export const bookRoom = async (data) => {
    const result = await client.db('hallbooking').collection('rooms').findOne({ _id: ObjectId(data._id) })

    if (result) {
        if (result.date === data.date) {
            if (result.startTime === data.startTime || result.endTime === data.endTime)
                return "The room is booked already.";
            else return "The room is booked, may be check for timing to book your slot!";
        }
    }

    return await client.db('hallbooking').collection('booking').insertOne(data)
}
export const getAllRooms = async () => {
    return await client.db('hallbooking').collection('booking').find({ bookingStatus: "yes" }).toArray()
}

export const getAllCustomers = async () => {
    return await client.db('hallbooking').collection('booking').find({}, { roomId: 0, bookingStatus: 0, _id: 0 }).toArray()
}


