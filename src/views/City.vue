<template>
  <div>
    <div v-if="error">404</div>
    <div v-else v-for="(shop, index) in shops" :key="index">
      <Card
        :title="shop.name"
        :description="shop.description"
        :image="shop.image"
        @click.native="() => openShop(shop)"
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
  name: 'City',
  props: {
    city: Object,
  },
  components: {
    Card,
  },
  data() {
    return {
      ipfsStatus: false,
      shops: [],
      error: false,
    };
  },
  mounted() {
    let city;
    if (this.city) {
      city = this.city;
    } else {
      city = this.$store.state.city;
    }
    if (city.link) {
      this.fetchShops(city.link);
    } else {
      this.error = true;
    }
  },
  methods: {
    openShop(shop) {
      this.$store.commit('setShop', shop);
      this.$router.push({ name: 'Shop', params: { shop } });
    },
    async fetchShops(link) {
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
    },
  },
};
</script>

<style scoped>
</style>
