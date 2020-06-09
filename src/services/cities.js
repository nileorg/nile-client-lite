import hash from '@/hash.js';
import {
  Buffer,
} from 'ipfs';

export default async function fetchCities() {
  let ipfs;
  try {
    ipfs = await this.$ipfs;
    this.ipfsStatus = true;
  } catch (err) {
    this.ipfsStatus = false;
    return;
  }
  this.$store.commit('setHash', hash);
  const chunks = [];
  /* eslint-disable-next-line no-restricted-syntax */
  for await (const chunk of ipfs.cat(hash)) {
    chunks.push(chunk);
  }
  try {
    this.cities = JSON.parse(Buffer.concat(chunks).toString());
  } catch (err) {
    this.cities = [];
  }
}
