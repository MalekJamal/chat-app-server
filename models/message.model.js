"use strict";

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message: {
        text: {
            type: String,
            required: true
        },
    },
    users: Array,
    sender: {
        type: mongooze.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});


module.exports = mongoose.model("Messages", messageSchema);