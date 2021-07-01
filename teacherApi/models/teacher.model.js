const mongoose = require("mongoose");

const teachers = new mongoose.model("teachers", {
  name: {
    type: String,
    trim: true,
    required: [true, "Teacher Name is Required"],
    minlenght: 3,
  },
  salary:{
    type: Number,
    trim: true,
    min:3000,
    max:6000
    
  },
  class: {
    type: String,
    trim: true,
    enum:['A','B','C','D']
  },
});

module.exports = teachers;
