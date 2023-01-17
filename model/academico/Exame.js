const mongoose = require("mongoose");

const { Schema } = mongoose;

//exameSchema
const exameSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    disciplina: {
      type: Schema.Types.ObjectId,
      ref: "Disciplina",
      required: true,
    },
    curso: {
      type: Schema.Types.ObjectId,
      ref: "Curso",
      required: true,
    },
    passMark: {
      type: Number,
      required: true,
      default: 50,
    },
    totalMark: {
      type: Number,
      required: true,
      default: 100,
    },

    termoAcademico: {
      type: Schema.Types.ObjectId,
      ref: "TermoAcademico",
      required: true,
    },
    duracao: {
      type: String,
      required: true,
      default: "60 minutos",
    },
    dataExame: {
      type: Date,
      required: true,
      default: new Date(),
    },
    tempoExame: {
      type: String,
      required: true,
    },
    tipoExame: {
      type: String,
      required: true,
      default: "Quiz",
    },
    statusExame: {
      type: String,
      required: true,
      default: "pendente",
      enum: ["pendente", "correndo"],
    },
    questoes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Questionario",
      },
    ],
    nivelClasse: {
      type: Schema.Types.ObjectId,
      ref: "NivelDeClasse",
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Professor",
      required: true,
    },
    termoAcademico: {
      type: Schema.Types.ObjectId,
      ref: "TermoAcademico",
      required: true,
    },
    anoAcademico: {
      type: Schema.Types.ObjectId,
      ref: "AnoAcademico",
      required: true,
    },
  },
  { timestamps: true }
);

const Exame = mongoose.model("Exame", exameSchema);

module.exports = Exame;
