const { Schema, model } = require("mongoose");

const HeroeSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    modified: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    resourceURI: {
        type: String,
        required: true,
    },
    teamColor: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = model("Heroe", HeroeSchema);