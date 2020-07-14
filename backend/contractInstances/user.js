import web3 from '../web3';
import User from '../build/User.json';

const instance = new web3.eth.Contract(
    User.abi,
    '0xBdAc7e1dE12E6f7C834268037300490970655801'
);
export default instance;
