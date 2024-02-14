// SASS stands for syntactically awesome style sheets
// its a preprocessor scripting language for the CSS.
// Allows for variables, nesting , mixins, inheritance.

// router.js file holds the pages PLUS the request to the backend in the form of a function
// loader.js file holds the function that we will put in the route file. they are functions that will LOAD BEFORE the page is rendered
// actions.js file holds the function that we will put in the route file. they are functions that will BE ACTIONED (DONE) when an event is triggered. in this case (the peoples' app) a form submit

// Loaders and Actions
// Actions are on the router.js file's Route element
// Loader are NOT on the router.js file file's Route element
// Lets make sure we do the following:

// add .env to our gitignore file
// create a .env file in the ROOT directory
// inside put in an enviornment variable called REACT_APP_URL=<your local backend server that is running>
// RESTART YOUR react application

// in react we do not need to install the dot env package. enviornment variables are allowed BUT we must add in the following prefix
// REACT_APP_

// For example the URL variable should be
// REACT_APP_URL