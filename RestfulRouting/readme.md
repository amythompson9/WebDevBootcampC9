#RESTful Routing
 - respresentational state transfer


##Introduction
* Define REST and explain WHY it matters
    - a pattern for defining our routes
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

BLOG

CREATE
READ    /allBlogs/
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id

TABLE OF 7 RESTful Routes

NAME    PATH            HTTP VERB   PURPOSE
Index   /dogs           GET         List all dogs
New     /dogs/new       GET         Show new dog form
Create  /dogs           POST        Create a new dog, then redirect somewhere
Show    /dogs/:id       GET         Show info about one specific dog
Edit    /dogs/:id/edit  GET         Show edit form for one dog
Update  /dogs/:id       PUT         Update a particular dog, then redirect somewhere
Destroy /dogs/:id       DELETE      Delete a particular dog, then redirect somewhere

#Blog Index
* Setup the Blog App
* Create the Blog Model
* Add INDEX route and template
* Add Simple Nav Bar