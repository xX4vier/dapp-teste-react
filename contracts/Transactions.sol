// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22;

contract Transactions {

    // Registra o login de ADM
    address private owner;

     // Modelo de uma unidade gestora - id e nome

     struct Unidade {
        uint id;
        string name;
    }

    mapping(uint => Unidade) public unidades;   // Mapeia as unidades gestoras criando um array:
    uint public unidadesCount = 0; // Cria um contador para as unidades gestoras existentes:

    // Modelo de uma transação- id, orgão que recebeu e valorSuplementado

    struct Transaction {
        uint id;
        string name;
        uint valorSuplementado;
        string date;
    }
    mapping(uint => Transaction) public transactions;     // Mapeia as transações
    uint public transactionsCount = 0; // Cria um contador para as transações já realizadas
    
    // Função que adiciona uma unidade gestora:

    function addUnidade (string memory _name) private {
        
        require(owner == msg.sender,"Acesso negado");
        unidadesCount ++;
        unidades[unidadesCount] = Unidade(unidadesCount, _name); 
    }

    // Função que adiciona uma transação:

    function addTransaction (string memory _name, uint _valorSuplementado, string memory _date) private {
        require(owner == msg.sender,"Acesso negado");
        transactionsCount ++;
        transactions[transactionsCount] = Transaction(transactionsCount, _name, _valorSuplementado, _date);
    }

    //Para teste, popula o contrato com duas transações

   constructor () public {

        owner = msg.sender;
        addTransaction("Camara Municipal de Vila Velha", 10000, "10/02/2021"); // ambos os valores passados estarão no input - aqui estamos populando manualmente
        addTransaction("Secretaria Municipal de Comunicacao", 20000, "15/03/2021");
        addTransaction("Procuradoria Geral", 3000, "10/05/2021");
        addTransaction("Sec. Mun. de Controle e Transparencia", 50000, "29/09/2021");
        addTransaction("Sec. Mun. Financas", 250000, "01/12/2021");
        addTransaction("Sec. Mun. de Educacao", 380000, "13/12/2021");
        addUnidade("Camara Municipal de Vila Velha");
        addUnidade("Secretaria Municipal de Comunicacao");
        addUnidade("Procuradoria Geral");
        addUnidade("Sec. Mun. de Controle e Transparencia");
        addUnidade("Sec. Mun. Financas");
        addUnidade("Sec. Mun. de Educacao");
    }
}

