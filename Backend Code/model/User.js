const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  images: {
    type: [],
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
