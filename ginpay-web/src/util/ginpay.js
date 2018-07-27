// TODO 整形してフロントから呼び出す
const config = {};
// const utility = require('./utility.js')(config);
const Web3 = require('web3');
const assert = require('assert');
const TestRPC = require('ethereumjs-testrpc');
const sha256 = require('js-sha256').sha256;
const async = require('async');
const BigNumber = require('bignumber.js');
const HDWalletProvider = require('truffle-hdwallet-provider');
const solc = require('solc');
var Tx = require('ethereumjs-tx');
var accessToken = 'kuNyJnh8ioOWvViwNx26';// Set your accessToken
const privStr = ''; // Set your priv key
const provider = new Web3.providers.HttpProvider(
  "https://rinkeby.infura.io/" + accessToken
)
const web3 = new Web3(provider);

var abi = [{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orderFills","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"traveler","type":"address"},{"name":"recommender","type":"address"},{"name":"place","type":"uint256"}],"name":"recommend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"tokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"admin_","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orders","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"traveler","type":"address"},{"name":"recommender","type":"address"},{"name":"travelerReward","type":"uint256"},{"name":"recommenderReward","type":"uint256"}],"name":"reward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"admin_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"traveler","type":"address"},{"indexed":false,"name":"recommender","type":"address"},{"indexed":false,"name":"place","type":"uint256"}],"name":"Recommend","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"traveler","type":"address"},{"indexed":false,"name":"recommender","type":"address"},{"indexed":false,"name":"place","type":"uint256"},{"indexed":false,"name":"proof","type":"uint256"}],"name":"ProofOfVisit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"traveler","type":"address"},{"indexed":false,"name":"recommender","type":"address"},{"indexed":false,"name":"travelerReward","type":"uint256"},{"indexed":false,"name":"recommenderReward","type":"uint256"}],"name":"Reward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Deposit","type":"event"}]
const contractAccount = "0xf0f0E093815225Ede790f54366820e4e22efC3Ab";
const contract = web3.eth.contract(abi).at(contractAccount);

function setTransaction(data, fromAccount, toAccount, value){
  // アドレスの何個目かのトランザクションかをnonceを作成
  var count = web3.eth.getTransactionCount(fromAccount);
  var gasPrice = web3.eth.gasPrice * 2;
  var gasLimit = 4700000;
  console.log(gasPrice);
  // トランザクションのフォーマットに沿って、gasや宛先など、detaも当てはめる
  var rawTransaction = {
    "from": fromAccount,
    "nonce": web3.toHex(count),
    "gasPrice": web3.toHex(gasPrice),
    "gasLimit": web3.toHex(gasLimit),
    "to": toAccount,
    "value": value,
    "data": data,
    "chainId": 0x04 // rinkeby network
  };

  return rawTransaction;
}

function sendTransaction(rawTx){
  var signedTx = signTx(rawTx);
  web3.eth.sendRawTransaction('0x' + signedTx.toString('hex'), function(err, hash) {
    if (!err)
      console.log(hash);
    else
      console.log(err);
  });
}

function execBalanceOf(from_account, to_account, value) {
  var data = contract.balanceOf.getData();
  console.log(data);
  var rawTx = setTransaction(data, from_account, to_account, value);
  sendTransaction(rawTx);
}

function execDepositEth(from_account, to_account, value){
  // データと言われる実行メソッドを指定するためのバイナリ(MethodIDと言われるもの)を作成
  var data = contract.deposit.getData();
  console.log(data);
  var rawTx = setTransaction(data, from_account, to_account, value);
  sendTransaction(rawTx);
}

function execReward(from_account, to_account, value, traveler, recommender, travelerReward, recommenderReward){
  // データと言われる実行メソッドを指定するためのバイナリ(MethodIDと言われるもの)を作成
  var data = contract.reward.getData(traveler, recommender, travelerReward, recommenderReward);
  console.log(data);
  var rawTx = setTransaction(data, from_account, to_account, value);
  sendTransaction(rawTx);
}

function signTx(rawTx){
  // 秘密鍵署名
  var privKey = new Buffer(privStr, 'hex');
  var tx = new Tx(rawTx);
  tx.sign(privKey);


  var serializedTx = tx.serialize();
  return serializedTx;
}


var fromAccount = "0x142a15c56308269c98B3da7a65285c729dd9266e";
//traveler
var travelerAccount = "0x63b73b907b41c0cf24bbde16f21a5bca6ceff3f3";
//recommender
var toAccount = "0x893b83A643d43395D064C04170d82b8E71E9694e";

console.log(process.argv[2]);

if(process.argv[2] === "deposit"){
  execDepositEth(fromAccount, contractAccount, 1e+17);
}else if(process.argv[2] === "reward"){
  execReward(fromAccount, contractAccount, 0, travelerAccount, toAccount, 2e+16, 8e+16)
}else{
  console.log("command:deposit or reward");
}



var travelerBalance = web3.eth.getBalance(fromAccount) / 1e+18
console.log("traveler account");
console.log(travelerBalance.toString(10));
var recommenderBalance = web3.eth.getBalance(toAccount) / 1e+18
console.log("recommender account");



console.log(recommenderBalance.toString(10));