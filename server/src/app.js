"use strict";
const express = require("express");
const dotenv =  require("dotenv");
const cors = require("cors")
const app = express();
const PORT = 4040;

const dbConfig = require("./config/dbConnect.config");
const todoRoute = require('./routes/note.route')

dbConfig();
dotenv.config()

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/notes", todoRoute);

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listen to ${process.env.PORT || PORT}`);
})
