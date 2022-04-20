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

    // Mapeia as unidades gestoras criando um array:

    mapping(uint => Unidade) public unidades;

    //uint [] public unidadesGestoras;

    // Cria um contador para as unidades gestoras existentes:

    uint public unidadesCount = 0;

    // Modelo de uma transação- id, orgão que recebeu e valorSuplementado

    struct Transaction {
        uint id;
        string name;
        uint valorSuplementado;
        uint date;
    }

    // Mapeia as transações

    mapping(uint => Transaction) public transactions;

    
    // Cria um contador para as transações já realizadas

    uint public transactionsCount = 0;

    // Função que adiciona uma unidade gestora:

    function addUnidade (string memory _name) private {
        
        require(owner == msg.sender,"Acesso negado");
        unidadesCount ++;
        unidades[unidadesCount] = Unidade(unidadesCount, _name); 
    }

    // Função que adiciona uma transação:

    function addTransaction (string memory _name, uint _valorSuplementado, uint _date) private {
        require(owner == msg.sender,"Acesso negado");
        transactionsCount ++;
        transactions[transactionsCount] = Transaction(transactionsCount, _name, _valorSuplementado, _date);
    }

    // Função que percorre o array com as transações existentes no contrato pois a função mapping faz apenas uma por vez e consome muito

    function getTransactions () public view {
        
        for(uint i=0; i<transactionsCount; i++){
                transactions[i];
        }
    }

    function getUnidades () public view {


      //  return Transactions.deployed().then(function(instance) {
     // electionInstance = instance;
     // return electionInstance.unidades(1);
        //string memory nomes = [string];

        //Transactions.deployed().then(function(instance) { 
        //    app = instance })
        //for: i=1; i<transactionsCount;i++
        //app.unidades(i).then(function(c) { unidade = c; })

        //nomes[i] = unidade[2].toString()
        // return nomes
        for(uint i=1; i<unidadesCount; i++){
                transactions[i];
        }
    }

    //Para teste, popula o contrato com duas transações

   constructor () public {

        owner = msg.sender;
        addTransaction("Secretaria do Estado", 200, 2022); // ambos os valores passados estarão no input - aqui estamos populando manualmente
        addTransaction("amigo de Gestao", 300, 2022);
        addUnidade("Secretaria do Estado");
        addUnidade("amigo de Gestao");
    }
}

