////////////////////////
// import dependencies
////////////////////////
//import the existing connected mongoose object from connection.js
const mongoose = require("./connection")

////////////////////////////
// Create our Visions model
///////////////////////////

// destructuring Schema and model from mongoose

const {Schema, model} = mongoose 

// make Visions Schema
const visionsSchema = new Schema (
    {
        title: String,
        image: String,
        description: String,
        complete: {type: Boolean, required: false, default:false},
        username: String
    }, {timestamps: true})

// make a Visions model

const Visions = model("Visions", visionsSchema)

////////////////////////////////
// export the visions model
///////////////////////////////

module.exports = Visions

