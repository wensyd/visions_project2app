# Visions - Project 2
#### By Wensy DeSousa

## Project Summary

Vision is a vision board application. It is intended for the user to be able to interact with the corkboard. The vision board will allow the user to be able to create a picture vision board that will inspire them with future goals and dreams. They will be able to add new images, edit, delete and update the images, title and description of the vision. They will also be able to view all images on the main page which is the vision board. 

## Models

models/Visions.js

{
    title: String,
    image: String,
    description: String,
    complete: Boolean
}

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /visions | get | get all visions (index)|
| /visions/:id | get | get a particular vision (show)|
| /visions/new | get | return form to create a new vision (new)|
| / | post | get post request to /visions, create new and redirect to index (create)|
| /visions/:id/edit | get | edit a particular vision (edit)|
| /visions/:id | put | put request to /visions/:id (update)|
| /visions/:id | delete | deletes a particular vision (destroy)|

## User Stories

-user can view all pictures on main page (index).
-user can select picture and it redirects to show page for that particular picture. 
-user can edit picture, title, description of each vision.
-user can delete picture.
-user can update picture.
-user can go back to main page from show page.
-user can create new picture/file/vision. 
-user can mark the vision complete with checkbox.


## Challenges

- no challenges anticipated yet. Will update as I build. 

## List of Technologies

-html
-css
-jQuery
-JS
-Mongo
-Express
