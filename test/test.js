var Transactions = artifacts.require("./Transactions.sol");

contract("Transactions", function(accounts) {
    var electionInstance;

  it("initializes with 6 unidades", function() {
    return Transactions.deployed().then(function(instance) {
      return instance.unidadesCount();
    }).then(function(count) {
      assert.equal(count, 6);
    });
  });

  it("initializes with 3 unidades", function() {
    return Transactions.deployed().then(function(instance) {
      instance.addTransaction("Camara Municipal de Vila Velha", 10000, "10/02/2021");
      return instance.transactionsCount()
    }).then(function(count) {
      assert.equal(count, 7);
    });
  });

  it("it initializes the units with the correct values", function() {
    return Transactions.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.unidades(1);
    }).then(function(unidades) {
      assert.equal(unidades[0], 1, "contains the correct id");
      assert.equal(unidades[1], "Camara Municipal de Vila Velha", "contains the correct name");
      return electionInstance.unidades(2);
    }).then(function(unidades) {
      assert.equal(unidades[0], 2, "contains the correct id");
      assert.equal(unidades[1], "Secretaria Municipal de Comunicacao", "contains the correct name");
    });
  });

  it("inicia as 2 transações corretamente ", function() {
    return Transactions.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.transactions(1);
    }).then(function(transactions) {
      assert.equal(transactions[0], 1, "contains the correct id");
      assert.equal(transactions[1], "Camara Municipal de Vila Velha", "contains the correct name");
      assert.equal(transactions[2], 10000, "contains the correct value");
      assert.equal(transactions[3], "10/02/2021", "contains the correct date");
      return electionInstance.transactions(2);
    }).then(function(transactions) {
      assert.equal(transactions[0], 2, "contains the correct id");
      assert.equal(transactions[1], "Secretaria Municipal de Comunicacao", "contains the correct name");
      assert.equal(transactions[2], 20000, "contains the correct value");
      assert.equal(transactions[3], "15/03/2021", "contains the correct date");
    });
  });
});

//Transactions.deployed().then(function(instance) { app = instance })