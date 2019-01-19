var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")
    
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema Setup

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
    {
        name: "Granite Hill", 
        image: "data:image/jpeg;base64,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",
        description: "This is a huge granite hill. No bathrooms. No wate. Beautiful granite."
    },
    function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("Newly created campground: ");
            console.log(campground);
        }
    });

app.get("/", function(req, res){
    res.render("landing");
});
//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
        //Get all campgrounds from DB
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log(err);
            } else {
                res.render("index", {campgrounds: allCampgrounds});
            }
        });
});
//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc}
   //Create a new campground and save to db
   Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
           res.redirect("/campgrounds");
       }
   });
});
//NEW - show form to create new campground 
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});
//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started")
});