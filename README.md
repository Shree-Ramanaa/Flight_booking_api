# Flight_Booking_API

# Overview : 
    Welcome to version 1.0 of Flight_Booking_API used for flight tickets booking and management. Two type of users are authenticated,
    admin and user.The admin API end calls deals with flights management. The user API end calls deals with booking of flight tickets.
    
# API calls :
    Login :
        Used by both admin and user to authenticate and get access to api calls. Uses JsonWebToken for authentication. Generates a token
        that is to be passed in other API calls for authentication.
        
        Path: https://flighbookingapi-sc07.onrender.com/login
        HTTP Method: GET
        Req Body: {
                    email: {type: String, required: true},
                    password:{type: String, required: true}
                  }
        
        
    Signup :
        Used by admin and user to signup if they are not logged in yet.
        
        Path: https://flighbookingapi-sc07.onrender.com/user/signup
        HTTP Method: POST
        Req Body: {
                    email: {type: String, required: true},
                    password:{type: String, required: true},
                    isAdmin: {type: Boolean, required: true},
                    bookedFlights: [{ type: mongoose.Types.ObjectId }],
                  }
      
      
    AddFlights :
        Used by admin to add flights with insight informations.
        
        Path: https://flighbookingapi-sc07.onrender.com/admin/application/add_flights
        HTTP Method: POST
        Req Body: {
                    name: {type : String, required: true},
                    flightNumber: {type: Number, required: true},
                    boardingLocation: {type: String, required: true},
                    departureLocation: {type: String, required: true},
                    takeoff: {type: Date, required: true},
                    landing: {type: Date, required: true},
                    price: {type: Number, required: true},
                    totalSeats: { type: Number, default: 60 },
                    bookedSeats: { type: Number, default: 0 },
                    usersBooked: [{ type: mongoose.Types.ObjectId }],
                  }
      
      
    RemoveFlights :
        Used by admin to remove flights.
        
        Path: https://flighbookingapi-sc07.onrender.com/admin/application/remove_flights
        HTTP Method: POST
        Req Body: {
                    flightNumber: {type: Number, required: true}
                  }
    
    
    ViewBookings :
        Used by admin to view all the flight ticket bookings. Lists down for each flights.
        
        Path: https://flighbookingapi-sc07.onrender.com/admin/application/view_bookings
        HTTP Method: GET
    
    
    SearchFlights :
        Used by user to search flights on specific date.
        
        Path:  https://flighbookingapi-sc07.onrender.com/user/application/search
        HTTP Method: POST
        Req Body: {
                    date: {type: Date, required: true}
                  }
        
    MyBookings :
        Used by user to list out all the bookings made under that user.
        
        Path: https://flighbookingapi-sc07.onrender.com/user/application/my_bookings
        HTTP Method: GET
        Req Body: {
                    email: {type: String, required: true}
                  }
                  
                  
    BookTickets :
        Used by user to book tickets.
        
        Path: https://flighbookingapi-sc07.onrender.com/user/application/book_ticket
        HTTP Method: POST
        Req Body: {
                    email: {type: String, required: true},
                    flightNumber: {type: Number, required: true},
                    requiredSeats: {type: Number, required: true}
                   }
