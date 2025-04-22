const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  buyersId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  sellersId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
