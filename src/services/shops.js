import {
  Buffer,
} from 'ipfs';

export default async function fetchShops(link) {
  let ipfs;
  try {
    ipfs = await this.$ipfs;
    this.ipfsStatus = true;
  } catch (err) {
    this.ipfsStatus = false;
    return;
  }
  const chunks = [];
  /* eslint-disable-next-line no-restricted-syntax */
  for await (const chunk of ipfs.cat(link)) {
    chunks.push(chunk);
  }
  try {
    this.shops = JSON.parse(Buffer.concat(chunks).toString());
  } catch (err) {
    this.shops = [];
  }
}
