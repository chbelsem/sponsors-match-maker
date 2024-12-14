const mongoose = require("mongoose");

const investorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 255,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email validation
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    industry: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    website: {
      type: String,
      trim: true,
      maxlength: 255,
      match: /^(https?:\/\/)?([\w-]+)\.([a-z]{2,})(\/[\w-]*)*\/?$/, // URL validation
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
      match: /^\+?[0-9]{1,20}$/, // Basic phone validation
    },
    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    budget: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Minimum password length
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Investor = mongoose.model("Investor", investorSchema);

module.exports = Investor;
