"use strict";
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Le titre est obligatoire"],
        trim: true,
        maxlength: [40, "Le titre ne doit pas dépasser 40 caractères"]
    },
    description: {
        type: String,
        trim: true,
    }
},{
    timestamps: true
})

module.exports = mongoose.model("note", noteSchema);