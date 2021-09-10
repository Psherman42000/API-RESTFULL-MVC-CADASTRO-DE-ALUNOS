const fs = require('fs');
const path = require('path');
const dados_alunos = require('../data/dados_alunos.json');

function registro(aluno){
    dados_alunos.push(aluno);
    fs.writeFile(path.join(__dirname, '../data/dados_alunos.json'), JSON.stringify(dados_alunos, null, 4), err => {
        if(err) throw err;
    });
    return true;
};

module.exports = {registro};