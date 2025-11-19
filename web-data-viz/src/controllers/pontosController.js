var pontosModel = require("../models/pontosModel");


function cadastrar(req, res) {

    var pontuacaoSabedoria = req.body.pontuacaoSabedoria;
    var pontuacaoCoragem = req.body.pontuacaoCoragem;
    var pontuacaoHabilidade = req.body.pontuacaoHabilidade;
    var pontuacaoCompaixao = req.body.pontuacaoCompaixao;
    var pontuacaoInfluencia = req.body.pontuacaoInfluencia;

    if (pontuacaoSabedoria == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    if (pontuacaoCoragem == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    if (pontuacaoHabilidade == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    if (pontuacaoCompaixao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    if (pontuacaoInfluencia == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    pontosModel.cadastrar(pontuacaoSabedoria, pontuacaoCoragem, pontuacaoHabilidade, pontuacaoCompaixao, pontuacaoInfluencia).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}