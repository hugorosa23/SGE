const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    cargo: {
      type: String,
      default: "admin",
    },
    termosAcademicos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TermosAcademicos",
      },
    ],
    curso: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Curso",
      },
    ],
    yearGroups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "YearGroup",
      },
    ],
    anosAcademicos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AnoAcademico",
      },
    ],
    nivelClasse: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NivelDeClasse",
      },
    ],
    professores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Professor",
      },
    ],
    estudante: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Estudante",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
