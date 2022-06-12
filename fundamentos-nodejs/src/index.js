const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "Nodemon test"});
});

//port where the aplication runs
app.listen(3333);

