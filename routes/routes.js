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

    if(executa.registrar(aluno))
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

router.put('/atualizar', (req,res) => {
    try{
        aluno = criarAluno();
        aluno.nome = req.body.nome;
        aluno.matricula = req.body.matricula;
        aluno.turma = req.body.turma;
    }catch(err){
        console.log(err)
        return res.status(400).send({error: "Solicitacao invalida"});
    }

    if(executa.atualizar(aluno))
        return res.send({message: "Cadastro de Aluno Atualizado"});
    
    return res.status(500).send({Error: "Erro ao Atualizar o Cadastro do Aluno"});
});

module.exports = router;