require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name rebel rural slow gloom another army giggle'; 
let testAccounts = [
"0x6424ec1c313a0b9ec14bb64de2b99dc6891047fc72af856921fed3e88bed1101",
"0xb1e19e07a54f2e48c3f4c6bfcd635dcd5c5136283b33e216326a5b7ca6c576f7",
"0x21b30d65a2684026a46a20fe5a7ef12e24da1c208a1f4a0e0fd1105489f51799",
"0x507e4f38bc840f4a03c7c8d9767a6e981af61f32f3a9bad58d764b5cdae9a688",
"0x53aea7a2786f64af7ac2e35192cea654de83800c1e61e21289529aea518f224a",
"0x32121f151a788164c605f3c06c7d3bf19eeb54b659be974fb2a3616553cec8f7",
"0x8f8e8dff0cc97fc1afe27255fe393ac7719a7079aa0747eee90197445aab259f",
"0x27b1d7286418ccfcb4ee97488d9220cdc5220934a48fcdbd97839a88f4eda58f",
"0xa9acf21df2fcc42f3f1fc973f35862c44f842f5f48a6852da7dd547a8c7bacbf",
"0x41a0acb116be5d0355d7a5ed4d2163132db48b199243a593507327a0aa09a30b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

