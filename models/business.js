import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    projectName: {
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
    category: {
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
    fundingRequired: {
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
    projectDescription: {
      type: String,
      required: true,
    },
    budget: {
      type: mongoose.Types.Decimal128, // Decimal128 is used for precise decimal numbers
      required: true,
      min: 0.01, // Minimum budget value
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export default mongoose.model("Business", businessSchema);
