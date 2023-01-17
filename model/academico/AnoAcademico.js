const mongoose = require("mongoose");

const anoAcademico = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    anoInicio: {
      type: Date,
      required: true,
    },
    anoFim: {
      type: Date,
      required: true,
    },
    anoAtual: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    estudantes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Estudante",
      },
    ],
    professores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Professor",
      },
    ],
    //Finance
    //Librarian
    //......
  },
  {
    timestamps: true,
  }
);

//model
const AnoAcademico = mongoose.model("AnoAcademico", anoAcademico);

module.exports = AnoAcademico;
