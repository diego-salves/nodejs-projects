const express = require("express");

const app = express();

app.get("/courses", (req, res) => {
    const query = request.query;
    console.log(query);
    return res.json(["Curso 1", "Curso 2", "Curso 3"])
});

app.post("/courses", (req, res) => {
    const body = request.body;
    console.log(body);
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
    const { id } = request.params;
    console.log(params);
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 2", "Curso 4"]);
});

app.listen(3333);

/**
 * Tipos de parametros: 
 * 
 * Route Params => Identificar um recurso, editar/deletar/buscar recurso
 * Query Params => Paginação, filtros, ordenação
 * Body Params => Dados para criação/edição de um recurso
 */