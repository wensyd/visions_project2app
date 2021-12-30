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

router.use((req, res, next)=> {
    // check if logged in
    if (req.session.loggedIn){
        // send to routes
        next()
    } else {
        res.redirect("/user/login")
    }
});



////////////////////////
// Visions Routes
////////////////////////

//index route  get /visions

router.get("/", (req, res) => {
    // find all the visions
    Visions.find({username: req.session.username})
    .then((visions) => {
        // render the index template with the visions
        res.render("visions/index.liquid", {visions})
    })

      //error handling 

      .catch((error) => {
          res.json({error});
      });

    });

    //about route
    router.get("/about", (req, res) => {
        // find all the visions
            res.render("visions/about.liquid")
        });

    // new route
router.get("/new", (req, res) => {
    res.render("visions/new.liquid");
  });

  // create - post request - /visions
router.post("/", (req, res) => {

    // convert the checkbox property to true or false
    req.body.complete = req.body.complete === "on" ? true : false

     // add the username to req.body, to track user
     req.body.username = req.session.username
     
    // create the new vision
    Visions.create(req.body)
    .then((visions) => {
        // redirect the user back to the index route
        res.redirect("/visions")
    })
    // console.log(req.body)

    // error handling
    .catch((error) => {
        res.json({error})
    })

})

// edit route - get request - /visions/:id/edit
router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get the visions with the matching id
    Visions.findById(id)
    .then((visions) => {
        // render the edit page template with the visions data
        res.render("visions/edit.liquid", { visions })
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// update route - put request - "/visions/:id"
router.put("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id
    
    // convert the checkbox property to true or false
    req.body.complete = req.body.complete === "on" ? true : false

    // update the item with the matching id
   Visions.findByIdAndUpdate(id, req.body, {new: true})
    .then((visions) => {
        // redirect user back to index
        res.redirect("/visions")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
})

//destroy route - delete request -/ visions/:id

router.delete("/:id", (req, res)=> {
    // grab the id from params
    const id = req.params.id
    // delete the visions
    Visions.findByIdAndRemove(id)
    .then((visions) => {
        // redirect user back to index
        res.redirect("/visions")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
})
    
    // show route - get - /visions/:id

    router.get("/:id", (req, res)=> {
        //get the id from params
        const id = req.params.id

        // get that particular visions from the database
        Visions.findById(id)
        .then((visions) => {
            // render the show template with the visions
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