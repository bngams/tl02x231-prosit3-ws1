const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sensor = new Schema(
    {
        id: {
            type: String
        },
        name: String, // String is shorthand for {type: String},
        pollutionMetrics: [{ value: Number }]
    },
    { collection: "sensors" } // specify data collection in mongoose
);

module.exports = mongoose.model("sensor", sensor);