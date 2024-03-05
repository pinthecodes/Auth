const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption")

const userSchema =  new mongoose.Schema({
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      },
      createdDate:{
          type:Date,
          default: Date.now
      }
})


userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]})
const User = mongoose.model("User", userSchema)
module.exports = User;