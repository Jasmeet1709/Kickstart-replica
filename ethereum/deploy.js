const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'Add your meta mask key words',
    'https://rinkeby.infura.io/v3/0e697c2d10f9428da44fbbfd613fb18f'
);

const web3 = new Web3(provider);

const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x'+ compiledFactory.bytecode ,arguments: ['Hello']})
        .send({from: accounts[0], gas:'1000000'});

    console.log('Contract deployed to ',result.options.address);
};
deploy();