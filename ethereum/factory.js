import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0x2b334f4e299302658327265ecaB5168957b0447A'
);

export default instance;