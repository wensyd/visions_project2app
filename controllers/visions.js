////////////////////////
// import dependencies
////////////////////////

const express = require("express")// express for router function 
const Visions = require("../models/Visions.js")// vision model


////////////////////////////
// create router 
////////////////////////////

const router = express.Router()

////////////////////////////
// Router Middleware
////////////////////////////

// router.use((req, res, next)=> {
//     // check if logged in
//     if (req.session.loggedIn){
//         // send to routes
//         next()
//     } else {
//         res.redirect("/user/login")
//     }
// });



////////////////////////
// Visions Routes
////////////////////////

//index route  get /fruits

router.get("/", (req, res) => {
    // find all the visions
    Visions.find({})
    .then((visions) => {
        // render the index template with the visions
        res.render("visions/index.liquid", {visions})
    })

      //error handling 

      .catch((error) => {
          res.json({error});
      });

    });

    // new route
router.get("/new", (req, res) => {
    res.render("visions/new.liquid");
  });

  // create - post request - /fruits
// router.post("/", (req, res) => {

//     // convert the checkbox property to true or false
//     req.body.readyToEat = req.body.readyToEat === "on" ? true : false

//      // add the username to req.body, to track user
//      req.body.username = req.session.username
     
//     // create the new fruit
//     Fruit.create(req.body)
//     .then((fruit) => {
//         // redirect the user back to the index route
//         res.redirect("/fruits")
//     })
//     // error handling
//     .catch((error) => {
//         res.json({error})
//     })

// })

// edit route - get request - /fruits/:id/edit
// router.get("/:id/edit", (req, res) => {
//     // get the id from params
//     const id = req.params.id

//     // get the fruit with the matching id
//     Fruit.findById(id)
//     .then((fruit) => {
//         // render the edit page template with the fruit data
//         res.render("fruits/edit.liquid", { fruit })
//     })
//     // error handling
//     .catch((error) => {
//         res.json({error})
//     })
// })

// update route - put request - "/fruits/:id"
// router.put("/:id", (req, res) => {
    // get the id from params
    // const id = req.params.id
    
    // convert the checkbox property to true or false
    // req.body.readyToEat = req.body.readyToEat === "on" ? true : false

    // update the item with the matching id
//     Fruit.findByIdAndUpdate(id, req.body, {new: true})
//     .then((fruit) => {
//         // redirect user back to index
//         res.redirect("/fruits")
//     })
//      // error handling
//      .catch((error) => {
//         res.json({error})
//     })
// })

//destroy route - delete request -/ fruits/:id

// router.delete("/:id", (req, res)=> {
//     // grab the id from params
//     const id = req.params.id
//     // delete the fruit
//     Fruit.findByIdAndRemove(id)
//     .then((fruit) => {
//         // redirect user back to index
//         res.redirect("/fruits")
//     })
//      // error handling
//      .catch((error) => {
//         res.json({error})
//     })
// })
    
    // show route - get - /fruits/:id

    router.get("/:id", (req, res)=> {
        //get the id from params
        const id = req.params.id

        // get that particular fruit from the database
        Visions.findById(id)
        .then((visions) => {
            // render the show template with the fruit
            res.render("visions/show.liquid", {visions})
        })
        // error handling
        .catch((error) => {
            res.json({error})
        })
    })
 


//////////////////////
// export the router
//////////////////////

module.exports = router