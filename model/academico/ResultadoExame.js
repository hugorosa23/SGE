const mongoose = require("mongoose");

const { Schema } = mongoose;

//exam result schema
const resultadoExameSchema = new Schema(
  {
    estudante: {
      type: Schema.Types.ObjectId,
      ref: "Estudante",
      required: true,
    },
    exame: {
      type: Schema.Types.ObjectId,
      ref: "Exame",
      required: true,
    },
    nota: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    passMark: {
      type: Number,
      required: true,
      default: 50,
    },
    //failed/Passed
    status: {
      type: String,
      required: true,
      enum: ["falhou", "passou"],
      default: "falhou",
    },
    //Excellent/Good/Poor
    remarks: {
      type: String,
      required: true,
      enum: ["Excelente", "Bom", "Ruim"],
      default: "Ruim",
    },
    posicao: {
      type: Number,
      required: true,
    },

    disciplina: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disciplina",
    },
    nivelClasse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NivelClasse",
    },
    termoAcademico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TermoAcademico",
      required: true,
    },
    anoAcademico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AnoAcademico",
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ResultadoExame = mongoose.model("ResultadoExame", resultadoExameSchema);

module.exports = ResultadoExame;
