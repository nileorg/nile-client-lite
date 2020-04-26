<template>
  <div>
    <div v-if="error || !cityData">404</div>
    <div v-else>
      <div
        class="section section--hero section--hero__sm"
        :style="{ backgroundImage: `url('${cityData.image}')` }"
      >
        <img @click="backToCitySelector" class="go-back" src="@/assets/go-back-left-arrow.svg"/>
        <div class="container">
          <div class="avatar-container">
            <img alt="vendor avatar" :src="cityData.logo" />
          </div>
        </div>
        <div class="hero-divider">
          <img alt="divider" src="@/assets/divider_grey.svg" class="divider" />
        </div>
      </div>
      <div class="container">
        <div class="el-row">
          <div class="el-col el-col-24 el-col-xs-24 city-selector">
            <h3>{{cityData.name}}</h3>
            <p>{{cityData.description}}</p>
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
          <div v-for="(shop, index) in shops" :key="index" class="el-col el-col-6" style="padding: 10px;">
            <Card
              :title="shop.name"
              :description="shop.description"
              :image="shop.image"
              @click.native="() => openShop(shop)"
            />
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
      cityData: {},
    };
  },
  mounted() {
    if (this.city) {
      this.cityData = this.city;
    } else if (this.$store.state.city) {
      this.cityData = this.$store.state.city;
    }
    if (this.cityData && this.cityData.link) {
      this.fetchShops(this.cityData.link);
    } else {
      this.backToCitySelector();
    }
  },
  methods: {
    backToCitySelector() {
      this.$store.commit('setCity', null);
      this.$router.push({ name: 'Home' });
    },
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
