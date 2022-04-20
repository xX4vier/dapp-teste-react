//var Adoption = artifacts.require("Adoption");
var Transactions = artifacts.require("Transactions");

module.exports = function(deployer) {
  deployer.deploy(Transactions);
};
