"use strict"

const express = require("express");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
// require("./models/index.model");
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET", "PUT", "DELETE"]
    }
});

io.on("connection", (socket) => {

    console.log(`Client connected with ID: ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected with id: ${socket.id}`);

    });

    
    // custom rooms
    socket.on("join_room", room =>{
        socket.join(room);
    });

});

app.get("/", (req, res) => {
    res.status(200).send("Chat Server");
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
});