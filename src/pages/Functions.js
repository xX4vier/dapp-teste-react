//import TransactionsJSON from '../build/contracts/Transactions.json';
import Web3 from 'web3';


/* var TransactionsJSON = require("../build/contracts/Transactions.json"); */
//var contract = require('@truffle/contract');

   
    export const load = async () => {

            const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')
            const accounts = await web3.eth.requestAccounts();
            return (accounts[0])
    }
 








/* TransactionsJSON.setProvider(provider);

 */

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

// Função que recebe a conta atual utilizada pelo usuário ao se conectar

/* const loadAccount = async () => {
    const {ethereum} = window
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const addressAccount = accounts[0];
    return addressAccount;
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
//}

