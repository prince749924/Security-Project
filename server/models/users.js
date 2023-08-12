const mongoose = require("mongoose");
const passwordValidator = require('password-validator');

// Create a password schema with complexity requirements
const passwordSchema = new passwordValidator();
passwordSchema
   
  .has().uppercase() // Must have at least one uppercase letter
  .has().lowercase() // Must have at least one lowercase letter
   

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
      match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (password) => passwordSchema.validate(password),
        message: 'Password must meet complexity requirements: 8-12 characters, at least one uppercase, one lowercase, one digit, one special character.'
      }
    },
    userRole: {
      type: String,
      default: "user",
    },
    phoneNumber: {
      type: Number,
    },
    userImage: {
      type: String,
      default: "user.png",
    },
    verified: {
      type: Boolean, // Change to Boolean
      default: false, // Default value is a boolean
    },
    secretKey: {
      type: String,
      default: null,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
