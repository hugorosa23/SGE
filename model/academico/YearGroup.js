const mongoose = require("mongoose");

const yearGroupSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    anoAcademico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AnoAcademico",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//model
const YearGroup = mongoose.model("YearGroup", yearGroupSchema);

module.exports = YearGroup;
