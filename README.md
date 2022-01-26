# hall_booking

Heroku url: https://hall-booking-backend-app.herokuapp.com/

Method: post

/create-room = For creating a room 
{
noOfSeats: "",
amenities: "",
pricePerHour: ""
}


Method: post

/book-room = for booking a room (post)
{
customerName: "",
date:"",
startTime: "",
endTime: "",
roomId: "",
bookingStatus: "" (it could be yes or no)
}


Method: get

/all-rooms = for getting all rooms with booked data (get)

Method: get

/all-customers - for getting all customers with booked data (get)
