-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

use star_wars;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nickname VARCHAR(45) UNIQUE,
email VARCHAR(45) UNIQUE,
senha VARCHAR(20)
);

select * from usuario;

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE pontuacao(
idPontuacao INT AUTO_INCREMENT,
fkUsuario INT,
fkQuiz INT,
CONSTRAINT pkComposta PRIMARY KEY (idPontuacao, fkUsuario, fkQuiz),
CONSTRAINT fkQuizUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
CONSTRAINT fkUsuarioQuiz FOREIGN KEY (fkQuiz) REFERENCES quiz (idQuiz),
pontuacaoFinal INT
);



insert into pontuacao values
(null, 1, 1, 1);





CREATE VIEW mostrarPatente AS
SELECT
    Atribuicao.idPontuacao,
    Atribuicao.fkUsuario,
    Atribuicao.Nivel_Atribuido AS patente_atributo,
    pa.descricao,
    pa.pontos_sabedoria,
    pa.pontos_coragem,
    pa.pontos_habilidade,
    pa.pontos_conhecimento,
    pa.pontos_conexao,
    Atribuicao.pontuacaoFinal AS Pontuacao_Usuario,
    pa.imagem
FROM
 
    (
        SELECT
            p.idPontuacao,
            p.fkUsuario,
            p.pontuacaoFinal,

            CASE
                WHEN p.pontuacaoFinal <= 2 THEN 'Youngling'
                WHEN p.pontuacaoFinal <= 4 THEN 'Padawan'
                WHEN p.pontuacaoFinal <= 6 THEN 'Cavaleiro Jedi'
                WHEN p.pontuacaoFinal <= 8 THEN 'Mestre Jedi'
                WHEN p.pontuacaoFinal > 8 THEN 'Grão-Mestre Jedi'
                ELSE 'Youngling'
            END AS Nivel_Atribuido
        FROM
            pontuacao p
        WHERE
            -- Puxa o último registro (a pontuação mais recente)
            p.idPontuacao = (SELECT MAX(idPontuacao) FROM pontuacao)
    ) AS Atribuicao
JOIN

    patente pa
ON
    pa.nivel = Atribuicao.Nivel_Atribuido;
    
    select * from mostrarPatente;
    
CREATE TABLE patente(
idPatente INT PRIMARY KEY AUTO_INCREMENT,
fkPontuacao INT,
CONSTRAINT fkPontosPatente FOREIGN KEY (fkPontuacao) REFERENCES pontuacao (idPontuacao), 
nivel VARCHAR(45),
descricao VARCHAR(350),
pontos_sabedoria INT,
pontos_coragem INT,
pontos_habilidade INT,
pontos_conhecimento INT,
pontos_conexao INT,
pontuacaoFinal INT,
imagem VARCHAR(45)
);

INSERT INTO patente (fkPontuacao, nivel, descricao, pontos_sabedoria, pontos_coragem, pontos_habilidade, pontos_conhecimento, pontos_conexao, pontuacaoFinal, imagem) VALUES
(1, 'Youngling', 'O Youngling é a semente da Ordem. Foco na descoberta e disciplina básica. Habilidade e Sabedoria são mínimas, limitadas ao treinamento em grupo. Definidos pelo potencial.', 1, 3, 2, 3, 3, 2, '../assets/imgs/yougling.jpeg'),
(1, 'Padawan', 'O Padawan é o aluno em campo. Habilidade e Conexão com a Força crescem rapidamente por meio da prática intensa. Sabedoria construída através da experiência prática e aplicação do Conhecimento. Definidos pelo crescimento.', 4, 6, 5, 6, 6, 4, '../assets/imgs/Padawan_Kenobi.png'),
(1, 'Cavaleiro Jedi', 'O Cavaleiro Jedi é o executor da Vontade da Força. Demonstra Sabedoria autônoma ao tomar decisões no calor do momento. Proficiente em Habilidade e Coragem comprovada em missões independentes. Definidos pelo serviço.', 7, 8, 8, 7, 8, 6, '../assets/imgs/anakin.jpg'),
(1, 'Mestre Jedi', 'O Mestre Jedi é o Guia e Filósofo da Ordem. Sabedoria e Conhecimento alcançados para treinar outros. Habilidade e Conexão com a Força de quase perfeição, usadas para resolver crises. Definidos pela orientação.', 9, 9, 9, 9, 9, 8, '../assets/imgs/mestre_jedi.jpeg'),
(1, 'Grão-Mestre Jedi', 'O Grão-Mestre é a Suprema Autoridade Espiritual e Intelectual. Representa o ideal máximo. Sabedoria e Conhecimento incomparáveis, e Conexão com a Força quase absoluta. Definidos pelo equilíbrio.', 10, 10, 10, 10, 10, 10, '../assets/imgs/Grao_mestre.png'); 





