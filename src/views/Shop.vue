<template>
  <div>
  <div v-for="(product, index) in products" :key="index">
    <Card
      :title="product.name"
      :description="product.description"
      :image="product.image"
    />
  </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import {
  Buffer,
} from 'ipfs';

export default {
  name: 'Shop',
  props: {
    shop: Object,
  },
  components: {
    Card,
  },
  data() {
    return {
      ipfsStatus: false,
      products: [],
    };
  },
  mounted() {
    let shop;
    if (this.shop) {
      shop = this.shop;
    } else {
      shop = this.$store.state.shop;
    }
    if (shop.link) {
      this.fetchProducts(shop.link);
    } else {
      this.error = true;
    }
  },
  methods: {
    async fetchProducts(link) {
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
        this.products = JSON.parse(Buffer.concat(chunks).toString());
      } catch (err) {
        this.products = [];
      }
    },
  },
};
</script>

<style scoped>
</style>
