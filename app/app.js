const express = require("express");
const morgan = require("morgan");

const app = express();

//Middlewares
app.use(morgan("dev"));


//Rotas
//Registro de Admin
app.post("/api/v1/admins/login", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O administrador foi conectado.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Login de Admin
app.post("/api/v1/admins/registrar", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"Um administrador foi registrado.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Apresenta todos os Admins
app.get("/api/v1/admins", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"Todos os Administradores.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Apresenta um único Admin
app.get("/api/v1/admins/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"Um único administrador.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Atualiza um Admin
app.put("/api/v1/admins/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O Administrador foi atualizado.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Deleta Admin
app.delete("/api/v1/admins/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O administrador foi deletado.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Admin suspendendo um professor
app.put("/api/v1/admins/suspend/professor/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O professor foi suspenso.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Admin tirando a suspensão de um professor
app.put("/api/v1/admins/unsuspend/professor/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O Administrador tirou a suspensão do professor.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Admin demitindo um professor
app.put("/api/v1/admins/demite/professor/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O professor foi demitido.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Admin readimitindo um professor
app.put("/api/v1/admins/readimite/professor/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O professor foi readmitido.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Admin publicando resultado dos exames
app.put("/api/v1/admins/publica/exame/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O administrador publicou os resultados dos exames.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});
//Admin removendo resultado dos exames
app.put("/api/v1/admins/naopublica/exame/:id", (req, res)=>{
    try {
        res.status(201).json({
            status:"Sucesso",
            data:"O administrador removeu os resultados dos exames.",
        })
    } catch (error) {
        res.json({
            status:"Falhou",
            error: error.message,
        })
    }
});

module.exports = app;