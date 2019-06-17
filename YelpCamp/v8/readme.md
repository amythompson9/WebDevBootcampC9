# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and configure mongoose
* Setup campground modeling
* Use campground model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show rroute/template

RESTFUL ROUTES

    Name    URL         Verb    Discription
_________________________________________________________
    INDEX   /dogs       GET     Display a list of all dogs
    NEW     /dogs/new   GET     Displays form to make a new dogs
    CREATE  /dogs       POST    Add new dog to DB
    SHOW    /dogs/:id   GET     Shows info about one dog
* Add description to our campground model
* Show db.collecction.drop()
* Add  show route/template


# Refactor Mongoose code
* Create a models directory
* Use module.exports
* Require everything correctly

# Add Seeds Files
* Add a a seeds.js file
* Run the seeds file every time the server starts

# Add the Comment model!
* Make our erros go away!
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

# Style Show Page
* Add a sidebar to show page
* Display comments nicely

# Finish Styling Show PAge
* Add public directory
* Add custom stylesheet

# Auth Pt 1 - Add User Model
* Install all packages needed for auth
* Define User Model

# Auth Pt 2 - Register
* Configure PAssport
* Add register routes
* Add register templates

# Auth Pt. 3 - Login
* Add Login routes
* add login template

# Auth Pt. 4 - Logout/NavBar
* Add logout route
* Prevent user from adding a commnet if not signed in
* Add links to nabar

# Auth Pt. 5 - Show/Hide Links
* Show/hide auth links correctly

# Refactor the Routes
* Use Express router to reorganize the routes

# Users + Comments
* Associate users and comments
* Save author's name to a comment automatically