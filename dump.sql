CREATE DATABASE teste;

USE teste;

CREATE TABLE IF NOT EXISTS solicitacoes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INTEGER NOT NULL,
    solicitante VARCHAR(255) NOT NULL,
    situacao VARCHAR(255),
    aprovador VARCHAR(255) DEFAULT NULL,
    observacao TEXT DEFAULT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS usuarios(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    login VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    perfil VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nome_completo, login, senha, perfil) VALUES (
	'Usuário Solicitante',
    'solicitante',
    '123',
    'solicitante'
);

INSERT INTO usuarios (nome_completo, login, senha, perfil) VALUES (
	'Usuário Aprovador',
    'aprovador',
    '123',
    'almoxarife'
);

INSERT INTO usuarios (nome_completo, login, senha, perfil) VALUES (
	'Usuário Administrativo',
    'admin',
    '123',
    'admin'
);