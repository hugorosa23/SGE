const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProgramaSchema = new Schema(
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
      default: "4 anos",
    },
    // created automatically
    //CSFTY
    code: {
      type: String,
      default: function () {
        return (
          this.name
            .split(" ")
            .map(name => name[0])
            .join("")
            .toUpperCase() +
          Math.floor(10 + Math.random() * 90) +
          Math.floor(10 + Math.random() * 90)
        );
      },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    //we will push the teachers that are in charge of the program
    professores: [
      {
        type: Schema.Types.ObjectId,
        ref: "Professor",
      },
    ],
    estudantes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Estudante",
        default: [],
      },
    ],
    //we will push the subjects that are in the program when the program is created
    disciplinas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Disciplina",
        default: [],
      },
    ],
  },
  { timestamps: true }
);
const Programa = mongoose.model("Programa", ProgramaSchema);

module.exports = Programa;
