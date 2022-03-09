const mongoose = require("./connection");

const { Schema, model } = mongoose; // Object Destructuring

// Make fruits schema
const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
});

// Make fruit model
const Fruit = model("Fruit", fruitSchema);

module.exports = Fruit;