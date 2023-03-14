CREATE TABLE users(
    userId int NOT NULL AUTO_INCREMENT,
    user VARCHAR(20) NOT NULL,
    pass VARCHAR(20) NOT NULL,
    saldo float NOT NULL,
    PRIMARY KEY(userId)
);

INSERT INTO users(user,pass,saldo) VALUES('sergio','senhasergio',600.00);
INSERT INTO users(user,pass,saldo) VALUES('camila','senhacamila',500.00);
INSERT INTO users(user,pass,saldo) VALUES('joao','senhajoao',300.00);


CREATE TABLE acoes(
    acoesId int NOT NULL AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    valor float NOT NULL,
    quantidade int NOT NULL,
    PRIMARY KEY(acoesId)
);

CREATE TABLE usersacoes(
    userId int NOT NULL,
    acoesId INT NOT NULL, 
    CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES users(userId),
    CONSTRAINT fk_acoes FOREIGN KEY (acoesId) REFERENCES acoes(acoesId)
);

INSERT INTO usersacoes (userId,acoesId) VALUES(1,1);
INSERT INTO usersacoes (userId,acoesId) VALUES(1,1);
INSERT INTO usersacoes (userId,acoesId) VALUES(2,2);
INSERT INTO usersacoes (userId,acoesId) VALUES(3,3);
INSERT INTO usersacoes (userId,acoesId) VALUES(1,2);

SELECT users.user,acoes.nome,count(*) AS quantidade FROM ((usersacoes
INNER JOIN users
ON  usersacoes.codCliente = users.codCliente)
INNER JOIN acoes
ON usersacoes.codAtivo = acoes.codAtivo)
GROUP BY user,nome





select codCliente,usersacoes.codAtivo,acoes.valor,acoes.nome, count(usersacoes.codAtivo) as quantidade from usersacoes
INNER JOIN acoes
ON usersacoes.codAtivo=acoes.codAtivo
where codCliente=1
GROUP BY codCliente,codAtivo