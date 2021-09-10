const express = require("express");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/aluno', routes);

app.listen(3000);
console.log("API Is Running...");