const express = require("express");
const criarAluno = require("../models/Aluno");
const executa = require("../controllers/index");

var aluno;

const router = express.Router();

router.post('/registrar', (req, res) => {
    try{
        aluno = criarAluno();
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

router.delete('/remover', (req, res) => {
    try{
        aluno = criarAluno();
        aluno.matricula = req.body.matricula;
    }catch(err){
        console.log(err);
        return res.status(400).send({error: "Solicitacao Invalida"});
    }

    if(executa.remover(aluno.matricula))
        return res.send({message: "Aluno Excluido!"});

    return res.status(500).send({error: "Erro ao Remover Aluno"});
});

router.get('/', (req, res) => {
    res.send(executa.getAll());
});

module.exports = router;