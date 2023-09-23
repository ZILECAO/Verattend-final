const Donate = artifacts.require("./contracts/Donate.sol");

module.exports = function (deployer) {
  deployer.deploy(Donate);
};
