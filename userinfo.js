const express = require("express");
// const { url } = require("inspector");
const mongoose = require("mongoose");

// Starting Express.
const app = express();

//----------------------------------------------------------------------------------------------------------------------//

// Connecting Application With DataBase.

const url = "mongodb://localhost/userinfoDB";

mongoose.connect(url);

// Connection Holder :- it will hold the connection.
const con = mongoose.connection

// This will notify us when we are Successfully Connected with DataBase.
con.on("open",function(){
    console.log("Database Connected Successfully.");
});

 app.use(express.json())

/*--------------------------------------------------------------------------------------------------------------------- */

// Routing (specify all files responsible for all routes in CRUD Project.)

const allroutes = require("../Userinfo Project/routes")

// Adding Middleware :- Basically it tells that for all the userinfo request you have to send request to allroutes.

app.use("/routes",allroutes)




app.listen(9000,function(){
    console.log("Server is Up and Running at Port 9000.")
})