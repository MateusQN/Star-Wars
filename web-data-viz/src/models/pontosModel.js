var database = require("../database/config")


function cadastrar(fkUsuario, pontosSabedoria, pontosCoragem,pontosHabilidade, pontosCompaixao, pontosInfluencia) {
    var instrucao = `
        INSERT INTO pontuacao (fkUsuario, fkQuiz, sabedoria, coragem, habilidade, compaixao, influencia) VALUES ('${fkUsuario}','1' ,'${pontosSabedoria}', '${pontosCoragem}', '${pontosHabilidade}','${pontosCompaixao}', '${pontosInfluencia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

     console.log(pontosSabedoria);
     console.log(pontosCoragem);
     console.log(pontosHabilidade);
     console.log(pontosCompaixao);
     console.log(pontosInfluencia);
    return database.executar(instrucao);
    
}

module.exports = {
    cadastrar
};

