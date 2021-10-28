/////////////////////////////
// Import dependencies
/////////////////////////////

const { Mongoose } = require("mongoose")
const mongoose = require("./connection");
const Visions = require("./Visions");

/////////////////////////////
// seed code
/////////////////////////////


//save connection in variable

const db = mongoose.connection

db.on("open", () => {
    // array of starter visions
    const startVisions = [
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", description: "this is a future trip I want to take!", complete: false },
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", description: "this is a future trip I want to take!", complete: false },
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",description: "this is a future trip I want to take!", complete: false },
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", description: "this is a future trip I want to take!", complete: false },
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", description: "this is a future trip I want to take!", complete: false },
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",description: "this is a future trip I want to take!", complete: false },
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", description: "this is a future trip I want to take!", complete: false },
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", description: "this is a future trip I want to take!", complete: false },
        { title: "this is Malibu", image: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",description: "this is a future trip I want to take!", complete: false },
      ];

    // delete all visions
    Visions.deleteMany({})
    .then((data) => {
        // seed the starter visions
       Visions.create(startVisions).then((data) => {
            console.log(data)
            db.close()
        })
    })
})
