var YELOToken = artifacts.require("./YELOToken.sol");

module.exports = function(deployer) {
  deployer.deploy(YELOToken, "Yelody", "YELO", 5000000000, 18);
};