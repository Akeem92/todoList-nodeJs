const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todosSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: Number,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    date_create: {
        type: Date,
        required: true,
        default: Date.now,
    },
    date_update: {
        type: Date,
        required: false,
    },
});

module.exports = mongoose.model("Todos", todosSchema);
