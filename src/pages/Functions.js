import TransactionsJSON from 'contracts/Transactions.json'
import Web3 from 'web3';
var contract = require('@truffle/contract');


/* var TransactionsJSON = require("../build/contracts/Transactions.json"); */


   
    export const load = async () => {

            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
            const accounts = await web3.eth.requestAccounts();
            const addressAccount = accounts[0]      

            const theContract = contract(TransactionsJSON);
            theContract.setProvider(web3.eth.currentProvider);
            const todoContract = await theContract.deployed();
            

            const unidades = await loadUnidades(todoContract, addressAccount);
            const transacoes = await loadTransacoes(todoContract, addressAccount);

            return [addressAccount, unidades, transacoes, todoContract] 
    }
 
    const loadUnidades = async (todoContract, addressAccount) => {
        const unitsCount = await todoContract.unidadesCount()
        const unidades = [];
        for (var i = 1; i <= unitsCount; i++) {
            const unidade = await todoContract.unidades(i);
            unidades.push(unidade);
        }
        return unidades
        // retorna uma vetor de vetores array = [[id,nome],[id,nome],[id,nome]]
    }

    const loadTransacoes = async (todoContract, addressAccount) => {
        const transacCount = await todoContract.transactionsCount()
        const transacoes = [];
        for (var i = 1; i <= transacCount; i++) {
            const transacao = await todoContract.transactions(i);
            transacoes.push(transacao);
        }
        return transacoes
        // retorna uma vetor de vetores array = [[id,nome],[id,nome],[id,nome]]
    }


    export const addTransacoes = async (todoContract, addressAccount, vetor) => {

    
        for (var i = 0; i <= vetor.lenght; i++) {
                todoContract.addTransaction(vetor[i][0], vetor[i][1], vetor[i][2])
        }

        return console.log("Sucesso")
        // retorna uma vetor de vetores array = [[id,nome],[id,nome],[id,nome]]
    }



// Função utilizada dentro do useEffect para puxar os dados: executa as outras funções instanciadas aqui
//const load = async () => {
    //await loadWeb3();
    //const addressAccount = account;
    //const { todoContract, unidades } = await loadContract(addressAccount);
    //return { addressAccount, todoContract, unidades };
//};


//função que retorna um vetor de unidades gestoras (struct id e nome)
/* const loadTasks = async (todoContract, addressAccount) => {
    const unitsCount = await todoContract.unidadesCount
    const unidades = [];
    for (var i = 0; i < unitsCount; i++) {
        const unidade = await todoContract.tasks(addressAccount, i);
        unidades.push(unidade);
    }
    return unidades */
//};

/* const loadContract = async (addressAccount) => {
    const theContract = contract(TransactionsJSON);
    theContract.setProvider(web3.eth.currentProvider);
    const todoContract = await theContract.deployed();
    const unidades = await loadTasks(todoContract, addressAccount);

    return { todoContract, unidades }
};
 */

//Função que carrega WEB3 no browser
/* 
const loadWeb3 = async () => {
    
        // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
        var provider = new Web3.providers.HttpProvider("http://localhost:7545");
    } else {
        var provider = new Web3.providers.HttpProvider("http://localhost:7545");
    }
}
 */
