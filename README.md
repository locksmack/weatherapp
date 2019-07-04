# Lachlan's Weather Application

Created for Service Victoria's Coding Exercise, 'Lachlan's Weather Application' is a React application showing current weather conditions across Australia's capital cities.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the terminal, navigate to the project folder and run

`npm install`

to install dependant packages.

### Running and deploying the application
There are 2 methods of running the application:

`npm start`

Runs the application in development mode.

`npm run build`

Builds a production-ready version into the `build` folder. Production code requires a web server to run.


## TODO
This project is not nearly as polished as hoped due to a planned trip to Vanuatu half way through the strict delivery window. Hopefully the assessors will appreciate the need to sit on a beach for a week! :) Several improvements should be done:

* Caching of API responses to avoid multiple calls when toggling between cities
* Improved styling
* Test cases written
* Error handling of API response
* Use of geolocation
* Remember user's city selection between sessions (via cookies or localstorage)
* Selectable temperature units (only metric at the moment)