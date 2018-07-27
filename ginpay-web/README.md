# Ginpay


## test contract

```
git clone <this repository>
cd test
```
#### default account information


```
contractAccount = "0xf0f0E093815225Ede790f54366820e4e22efC3Ab";
travelerAccount = "0x63b73b907b41c0cf24bbde16f21a5bca6ceff3f3";

// management account (contract owner)
fromAccount = "0x142a15c56308269c98B3da7a65285c729dd9266e"; 

// recommender account
toAccount = "0x893b83A643d43395D064C04170d82b8E71E9694e";
```

#### set your priv key,change fromAccount and infura accesstoken

```
// var accessToken = '';// Set your accessToken
// const privStr = ''; // Set your priv key
fromAccount = ""; // set your account with priv key
```

#### test contract

default

- deposit 1.0ETH to contract address
- reward 0.2ETH to traveler, 0.8 ETH to recommender

```
node test-ginpay-reward.js deposit
node test-ginpay-reward.js reward
node test-ginpay-reward.js recommend
node test-ginpay-reward.js ProofOfVisit
```