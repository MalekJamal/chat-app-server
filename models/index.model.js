"use strict";

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to Db successfully");
}).catch((error) => {
    console.log(error);
});


module.exports = mongoose;