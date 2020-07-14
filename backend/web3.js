import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !=='undefined')
{
    web3 = new Web3(window.web3.currentProvider);
}
else
{
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/8ab7e0c205ae4595b266a9f48a6182d2'
    );
    web3 = new Web3(provider);
}

export default web3;
