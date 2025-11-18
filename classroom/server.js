const express = require("express");
const app = express();
const session = require("express-session");
const sessionOptions = {
    secret: "mysupersecretstring ",
    resave : false,
    saveUninitialized : true,

};
app.use(session(sessionOptions));





app.listen(3000,() =>{
    console.log("server is listening to 3000");
});


