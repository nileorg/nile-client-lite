<template>
  <div>
    <div v-if="error || !shopData">404</div>
    <div v-else>
      <div
        class="section section--hero section--hero__sm"
        :style="{ backgroundImage: `url('${shopData.image}')` }"
      >
        <img @click="backToCity" class="go-back" src="@/assets/go-back-left-arrow.svg" />
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
            <carousel
              class="tag-carousel-available"
              :perPageCustom="[[0, 3], [768, 6], [1024, 7], [1240, 8]]"
              :paginationEnabled="false"
            >
              <slide v-for="(tag, index) in tags" :key="`tag-${index}`">
                <button
                  class="el-button el-button-sm tag-carousel-slide"
                  :class="{
                    'el-button--success': activeTags.includes(tag),
                    'el-button--primary': !activeTags.includes(tag)
                  }"
                  @click="() => toggleTag(tag)"
                >{{tag}}</button>
              </slide>
            </carousel>
          </div>
        </div>
        <hr />
        <div class="el-row">
          <div
            v-for="(product, index) in productsFiltered"
            :key="index"
            class="el-col el-col-6 el-col-xs-24"
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
      activeTags: [],
    };
  },
  computed: {
    tags() {
      let tags = [];
      this.products.forEach((shop) => {
        tags = tags.concat(shop.tags);
      });
      return Array.from(new Set(tags));
    },
    productsFiltered() {
      if (this.activeTags.length > 0) {
        return this.products.filter((shop) => shop.tags.some((r) => this.activeTags.includes(r)));
      }
      return this.products;
    },
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
    toggleTag(tag) {
      const index = this.activeTags.indexOf(tag);
      if (index >= 0) {
        this.activeTags.splice(index, 1);
      } else {
        this.activeTags.push(tag);
      }
    },
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
.tag-carousel-available {
  margin-top: 10px;
}
.tag-carousel-slide {
  width: 97%;
  margin-left: 3%;
}
</style>
