require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require('./route/contactRoute');

const app = express();
const PORT = process.env.PORT || 4000;


//creating the middleware
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

app.listen(PORT, console.log(`Server Listening To Port 4000`));