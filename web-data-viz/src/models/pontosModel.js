var database = require("../database/config")


function cadastrar(fkUsuario, pontuacaoFinal) {
    var instrucao = `
        INSERT INTO pontuacao (fkUsuario, fkQuiz, pontuacaoFinal) VALUES ('${fkUsuario}','1' ,'${pontuacaoFinal}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);


    return database.executar(instrucao);
}

function listar() {
    var instrucao = `
        SELECT * FROM mostrarPatente;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};

