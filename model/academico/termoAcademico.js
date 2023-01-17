const mongoose = require("mongoose");

const { Schema } = mongoose;

const anoAcademicoSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    duracao: {
      type: String,
      required: true,
      default: "3 meses",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

const TermoAcademico = mongoose.model("TermoAcademico", anoAcademicoSchema);

module.exports = TermoAcademico;
