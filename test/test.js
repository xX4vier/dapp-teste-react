var Transactions = artifacts.require("./Transactions.sol");

contract("Transactions", function(accounts) {
    var electionInstance;

  it("initializes with 3 unidades", function() {
    return Transactions.deployed().then(function(instance) {
      return instance.unidadesCount();
    }).then(function(count) {
      assert.equal(count, 2);
    });
  });

  it("it initializes the units with the correct values", function() {
    return Transactions.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.unidades(1);
    }).then(function(unidades) {
      assert.equal(unidades[0], 1, "contains the correct id");
      assert.equal(unidades[1], "Secretaria do Estado", "contains the correct name");
      return electionInstance.unidades(2);
    }).then(function(unidades) {
      assert.equal(unidades[0], 2, "contains the correct id");
      assert.equal(unidades[1], "amigo de Gestao", "contains the correct name");
    });
  });

  it("inicia as 2 transações corretamente ", function() {
    return Transactions.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.transactions(1);
    }).then(function(transactions) {
      assert.equal(transactions[0], 1, "contains the correct id");
      assert.equal(transactions[1], "Secretaria do Estado", "contains the correct name");
      assert.equal(transactions[2], 200, "contains the correct value");
      assert.equal(transactions[3], 2022, "contains the correct date");
      return electionInstance.transactions(2);
    }).then(function(transactions) {
      assert.equal(transactions[0], 2, "contains the correct id");
      assert.equal(transactions[1], "amigo de Gestao", "contains the correct name");
      assert.equal(transactions[2], 300, "contains the correct value");
      assert.equal(transactions[3], 2022, "contains the correct date");
    });
  });
});

//Transactions.deployed().then(function(instance) { app = instance })