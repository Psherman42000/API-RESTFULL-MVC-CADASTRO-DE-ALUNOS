const express = require("express");
const aluno = require("../models/Aluno");
const executa = require("../controllers/index");

const router = express.Router();

router.post('/registra', (req, res) => {
    try{
        aluno.nome = req.body.nome;
        aluno.matricula = req.body.matricula;
        aluno.turma = req.body.turma;
    }catch(err){
        console.log(err);
        return res.status(400).send({error: "Solicitacao Invalida"});
    }

    if(executa.registro(aluno))
        return res.send({message: "Aluno Registrado!"});

    return res.status(500).send({error: "Erro ao registrar Aluno"});
});

module.exports = router;