const mongoose = require('mongoose');
//use object destructuring to assign Schema object to Schema variable
const { Schema } = mongoose;

const barsSchema = new Schema({
    yelpId: String,
    name: String,
    numberGoing: Number,
    usersGoing: [Number]
});

//initialize user model
module.exports = mongoose.model("bars", barsSchema);