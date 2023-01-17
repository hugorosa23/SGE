const mongoose = require("mongoose");

const { Schema } = mongoose;

//questionSchema
const questaoSchema = new Schema(
  {
    questao: {
      type: String,
      required: true,
    },
    opcaoA: {
      type: String,
      required: true,
    },
    opcaoB: {
      type: String,
      required: true,
    },
    opcaoC: {
      type: String,
      required: true,
    },
    opcaoD: {
      type: String,
      required: true,
    },
    opcaoE: {
      type: String,
      required: true,
    },
    respostaCorreta: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Professor",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Questao = mongoose.model("Questao", questaoSchema);

module.exports = Questao;
