# DelocalFrontendTest

# Install & run

Use "npm install" command to install the project dependencies.
Use "npm run start" command to run the application.
The application will launch on port:3000

# Application

## Initial load up

On loading up the application will load up the first 10 palettes from the "http://www.colourlovers.com/api/palettes?numResults=10&result&format=json" api.

Last updated will be set to current time of loading the page.

Each palette contains the the username of the title, the user name of the creator, the date of creation, the number of views and votes on the left and the samples of the color collection on the right.

## Features

1. On scrolling event, if scrolling reaches the bottom of the page, the application will load the next 10 palettes from "http://www.colourlovers.com/api/palettes?numResults=10&resultOffset=10&format=json" with a resultOffset of 10.

Each update increases the offSet with 10.

Each update will set the last updated to current time of update.

2. On clicking one of the palettes the background of the page will be set to a gardient color mix from the colors of the clicked palette.



