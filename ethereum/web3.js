import Web3  from 'web3';

let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    // we are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}else {
    // we are on the server Or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/0e697c2d10f9428da44fbbfd613fb18f'
    );
    web3 = new Web3(provider);
}

export default web3;