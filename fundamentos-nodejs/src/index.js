const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "Hello World!"});
});

//port where the aplication runs
app.listen(3333);