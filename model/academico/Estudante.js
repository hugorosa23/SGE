const mongoose = require("mongoose");
const estudanteSchema = new mongoose.Schema(
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
    estudanteId: {
      type: String,
      required: true,
      default: function () {
        return (
          "EST" +
          Math.floor(100 + Math.random() * 900) +
          Date.now().toString().slice(2, 4) +
          this.nome
            .split(" ")
            .map(nome => nome[0])
            .join("")
            .toUpperCase()
        );
      },
    },
    cargo: {
      type: String,
      default: "estudante",
    },
    //Classes are from level 1 to 6
    //keep track of the class level the student is in
    nivelClasse: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NivelDeClasse",
      },
    ],
    atualNivelClasse: {
      type: String,
      default: function () {
        return this.nivelClasses[this.nivelClasses.length - 1];
      },
    },
    anoAcademico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AnoAcademico",
    },
    dataAdmissao: {
      type: Date,
      default: Date.now,
    },

    resultadoExame: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ResultadoExame",
      },
    ],

    curso: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Curso",
    },

    isPromotedToLevel200: {
      type: Boolean,
      default: false,
    },
    isPromotedToLevel300: {
      type: Boolean,
      default: false,
    },
    isPromotedToLevel400: {
      type: Boolean,
      default: false,
    },
    isGraduated: {
      type: Boolean,
      default: false,
    },
    isWithdrawn: {
      type: Boolean,
      default: false,
    },
    isSuspended: {
      type: Boolean,
      default: false,
    },
    prefectName: {
      type: String,
    },
    // behaviorReport: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "BehaviorReport",
    //   },
    // ],
    // financialReport: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "FinancialReport",
    //   },
    // ],
    //year group
    anoGraduacao: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//model
const Estudante = mongoose.model("Estudante", estudanteSchema);

module.exports = Estudante;
