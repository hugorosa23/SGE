const mongoose = require("mongoose");
const dbConnect = async () => {
    try {
        console.log(process.env);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Banco de Dados conectado com sucesso.")
    } catch (error) {
        console.log("Falha ao conectar Banco de Dados.");
    }
};

dbConnect();