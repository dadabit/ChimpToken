//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");
var Token = artifacts.require("./ChimpToken.sol");
//var Hello = artifacts.require("./Hello.sol");

module.exports = function(deployer,network,accounts) {
//  deployer.deploy(ConvertLib);
//  deployer.link(ConvertLib, MetaCoin);
//  deployer.deploy(MetaCoin);
//  deployer.deploy(Hello);

deployer.deploy(Token);
    
};
