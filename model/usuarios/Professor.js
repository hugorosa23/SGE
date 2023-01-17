const mongoose = require("mongoose");
const professorSchema = new mongoose.Schema(
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
    dataAdmissao: {
      type: Date,
      default: Date.now,
    },
    funcionarioId: {
      type: String,
      required: true,
      default: function () {
        return (
          "PROF" +
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
    //if witdrawn, the teacher will not be able to login
    isWitdrawn: {
      type: Boolean,
      default: false,
    },
    //if suspended, the teacher can login but cannot perform any task
    isSuspended: {
      type: Boolean,
      default: false,
    },
    cargo: {
      type: String,
      default: "professor",
    },
    disciplina: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disciplina",
      // required: true,
    },
    applicationStatus: {
      type: String,
      enum: ["pendente", "aprovado", "rejeitado"],
      default: "pendente",
    },

    curso: {
      type: String,
    },
    //A teacher can teach in more than one class level
    nivelClasse: {
      type: String,
    },
    anoAcademico: {
      type: String,
    },
    examesCriados: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exames",
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      // required: true,
    },
    termoAcademico: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//model
const Professor = mongoose.model("Professor", professorSchema);

module.exports = Professor;
