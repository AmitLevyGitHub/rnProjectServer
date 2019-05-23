const mongoose = require("mongoose");

const dog = new mongoose.Schema({
  Name: String, //uniq name
  Owners: [{ type: String }]
});

const Dog = mongoose.model("Dog", dog);

module.exports = Dog;
