const fs = require('fs');
const path = require('path');

function requireDadosAlunos(){
    return require('../data/dados_alunos.json');
};

function registro(aluno){
    const dadosAlunos = requireDadosAlunos();
    dadosAlunos.alunos.push(aluno);
    fs.writeFile(path.join(__dirname, '../data/dados_alunos.json'), JSON.stringify(dadosAlunos, null, 4), err => {
        if(err) console.log(err);
    });
    return true;
};

function remover(matricula){
    dadosAlunos = requireDadosAlunos();
    dadosAlunos.alunos = dadosAlunos.alunos.filter(item => String(item.matricula) !== String(matricula));
    fs.writeFile(path.join(__dirname, '../data/dados_alunos.json'), JSON.stringify(dadosAlunos, null, 4), err => {
        if(err) throw err;
    });
    return true;
}

module.exports = {registro, remover};