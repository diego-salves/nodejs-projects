const express = require("express");

const app = express();

app.get("/courses", (req, res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3"])
});

app.post("/courses", (req, res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
})

app.listen(3333);
