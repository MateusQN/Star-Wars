var pontosModel = require("../models/pontosModel");

function cadastrar(req, res) {

    var pontuacaoSabedoria = req.body.pontuacaoSabedoriaServer;
    var pontuacaoCoragem = req.body.pontuacaoCoragemServer;
    var pontuacaoHabilidade = req.body.pontuacaoHabilidadeServer;
    var pontuacaoCompaixao = req.body.pontuacaoCompaixaoServer;
    var pontuacaoInfluencia = req.body.pontuacaoInfluenciaServer;
    var fkUsuario = req.body.idUsuarioServer;

    

    pontosModel.cadastrar(fkUsuario, pontuacaoSabedoria, pontuacaoCoragem, pontuacaoHabilidade, pontuacaoCompaixao, pontuacaoInfluencia).then(function(res){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}