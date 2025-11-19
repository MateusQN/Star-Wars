var database = require("../database/config")


function cadastrar(pontosSabedoria, pontosCoragem,pontosHabilidade, pontosCompaixao, pontosInfluencia) {
    var instrucao = `
        INSERT INTO quiz (sabedoria, coragem, habilidade, compaixao, influencia) VALUES ('${pontosSabedoria}, ${pontosCoragem}, ${pontosHabilidade},${pontosCompaixao}, ${pontosInfluencia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};

