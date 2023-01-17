const mongoose = require("mongoose");

const { Schema } = mongoose;

const nivelClasseSchema = new Schema(
  {
    //level100/200/300/400
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    //students will be added to the class level when they are registered
    estudantes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Estudante",
      },
    ],
    //optional.
    disciplina: [
      {
        type: Schema.Types.ObjectId,
        ref: "Disciplina",
      },
    ],
    professores: [
      {
        type: Schema.Types.ObjectId,
        ref: "Professor",
      },
    ],
  },
  { timestamps: true }
);

const NivelClasse = mongoose.model("NivelClasse", nivelClasseSchema);

module.exports = NivelClasse;
