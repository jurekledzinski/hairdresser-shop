const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  opinion: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
