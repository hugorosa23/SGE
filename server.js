require("dotenv").config();
const http = require("http");
require("./config/dbConnect");
const app = require("./app/app");

const PORT = process.env.PORT || 2020;

//Servidor
const server = http.createServer(app);
app.listen(PORT, console.log(`O servidor está rodando na porta ${PORT}.`));

//2jhFJc9neJ5onyiY