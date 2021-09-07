require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember coin gesture neck flat giant'; 
let testAccounts = [
"0x8bb13978505b3a2e42ce60675231b0b7880865b8faf13b80501cda2f615c401d",
"0xdef5b161066f9bc7161093e7df0d11a1005fe3f0fdaac89d91214dc7f0f29558",
"0x19ab1c4a013992c6480c36870296a4957d1c733bb9e1596d1432d17096bff7a2",
"0x153ae88f44b224c63364721deb76b02db72c0ab28b205b3de608c26b3d010bc6",
"0xc1e5c3eff22dab3d1d3f83d4c5ca9dc86207f3487641716dee030f8889027313",
"0xca6a36d04a93091e0e316a6e9c271e85f5a8bcc97cf5353e36014818b3319cc6",
"0x39ddf7b04fe3e29e47cbcc21651df0d62883392b4c044dc6f905c038dd4bea8f",
"0x998a8259e5fc4cdb075d15327189b49864e51fa51d00a008846d3f9c2d21f56d",
"0x46cba2ad3ed4d8aba825e5017e2f98b7096ccd3f8fd62eeca341ebf556a9734e",
"0x4fbe960aae10e92accbf8d7f3267bdbe117cb19198d0d7065cf146d10bf259ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

