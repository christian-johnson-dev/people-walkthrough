const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Contact", ContactSchema);
