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
        Req Body: email and password
        
    Signup :
        Used by user to signup if they are not logged in yet.
        
        Path: https://flighbookingapi-sc07.onrender.com/user/signup
        HTTP method: POST
        Req Body: email and password
        
        
    
