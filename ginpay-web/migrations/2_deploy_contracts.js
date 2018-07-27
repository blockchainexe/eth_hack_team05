var Ginpay = artifacts.require("./Ginpay.sol");
var Admin = "0x142a15c56308269c98b3da7a65285c729dd9266e"

module.exports = function(deployer) {
  deployer.deploy(Ginpay, Admin);
};
