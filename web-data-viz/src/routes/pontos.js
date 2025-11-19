var express = require("express");
var router = express.Router();

var pontosController = require("./controllers/pontosController");


router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    pontosController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    carroController.listar(req, res);
});

module.exports = router;

