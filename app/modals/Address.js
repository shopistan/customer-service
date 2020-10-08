const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    street: {
      // will the value of this attribute automatically apply to the items
      required: true,
      type: String,
    },
    city: {
      // will the value of this attribute automatically apply to the items
      required: true,
      type: String,
    },
    country: {
      // will the value of this attribute automatically apply to the items
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model('Address', schema);
