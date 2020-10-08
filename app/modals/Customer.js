const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      // will the value of this attribute automatically apply to the items
      required: true,
      type: String,
    },
    email: {
      // will the value of this attribute automatically apply to the items
      required: true,
      type: String,
      unique: true,
    },
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model('Customer', schema);
