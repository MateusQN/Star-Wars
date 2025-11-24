var pontosModel = require("../models/pontosModel");

function cadastrar(req, res) {

    var pontuacaoFinal = req.body.pontuacaoFinalServer
    var fkUsuario = req.body.idUsuarioServer;

    

    pontosModel.cadastrar(fkUsuario, pontuacaoFinal).then(function(res){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listar(req, res) {
    pontosModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar, 
    listar 
}