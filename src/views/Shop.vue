<template>
  <div>
    <div v-if="error || !shopData">404</div>
    <div v-else>
      <div
        class="section section--hero section--hero__sm"
        :style="{ backgroundImage: `url('${shopData.image}')` }"
      >
        <img @click="backToCity" class="go-back" src="@/assets/go-back-left-arrow.svg"/>
        <div class="container">
          <div class="avatar-container">
            <img alt="vendor avatar" :src="shopData.logo" />
          </div>
        </div>
        <div class="hero-divider">
          <img alt="divider" src="@/assets/divider_grey.svg" class="divider" />
        </div>
      </div>
      <div class="container">
        <div class="el-row">
          <div class="el-col el-col-24 el-col-xs-24 city-selector">
            <h3>{{shopData.name}}</h3>
            <p>{{shopData.description}}</p>
          </div>
        </div>
        <hr />
        <div class="el-row">
          <div class="el-col el-col-24">
            <p
              style="margin: 0; font-size: 13px;"
            >Clicca sui tag per filtrare i negozi, riclicca per disabilitare</p>
          </div>
        </div>
        <hr />
        <div class="el-row">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="el-col el-col-6"
            style="padding: 10px;"
          >
            <Card :title="product.name" :description="product.description" :image="product.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { Buffer } from 'ipfs';

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
      shopData: {},
      error: false,
    };
  },
  mounted() {
    if (this.shop) {
      this.shopData = this.shop;
    } else {
      this.shopData = this.$store.state.shop;
    }
    if (this.shopData.link) {
      this.fetchProducts(this.shopData.link);
    } else {
      this.error = true;
    }
  },
  methods: {
    backToCity() {
      this.$store.commit('setShop', null);
      this.$router.push({ name: 'City' });
    },
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
