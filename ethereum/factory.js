import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0x9EB2109c0DF31eD30fedaA8b763b1E3136954AFE'
);

export default instance;