const mongoose = require("mongoose");

const { Schema } = mongoose;

const disciplinaSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    professores: {
      type: Schema.Types.ObjectId,
      ref: "Professor",
    },
    termoAcademico: {
      type: Schema.Types.ObjectId,
      ref: "TermoAcademico",
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    duracao: {
      type: String,
      required: true,
      default: "3 meses",
    },
  },
  { timestamps: true }
);

const Disciplina = mongoose.model("Disciplina", disciplinaSchema);

module.exports = Disciplina;
