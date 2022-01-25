const { Schema, model } = require("mongoose");

const HeroeSchema = Schema({
    color: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = model("Heroe", HeroeSchema);