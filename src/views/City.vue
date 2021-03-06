<template>
  <div>
    <div v-if="error || !cityData">404</div>
    <div v-else>
      <div
        class="section section--hero section--hero__sm"
        :style="{ backgroundImage: `url('${cityData.image}')` }"
      >
        <img @click="backToCitySelector" class="go-back" src="@/assets/go-back-left-arrow.svg" />
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
            >{{$t('tagFilterShops')}}</p>
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
            v-for="(shop, index) in shopsFiltered"
            :key="index"
            class="el-col el-col-6 el-col-xs-24"
            style="padding: 10px;"
          >
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
import fetchCities from '@/services/cities';
import fetchShops from '@/services/shops';

export default {
  name: 'City',
  props: {
    city: Object,
    cityLink: String,
    cityUid: String,
  },
  components: {
    Card,
  },
  data() {
    return {
      ipfsStatus: false,
      cities: [],
      shops: [],
      error: false,
      cityData: {},
      activeTags: [],
    };
  },
  computed: {
    tags() {
      let tags = [];
      this.shops.forEach((shop) => {
        tags = tags.concat(shop.tags);
      });
      return Array.from(new Set(tags));
    },
    shopsFiltered() {
      if (this.activeTags.length > 0) {
        return this.shops.filter((shop) => this.activeTags.every((r) => shop.tags.includes(r)));
      }
      return this.shops;
    },
  },
  async mounted() {
    if (this.cityUid) {
      await fetchCities.bind(this)();
      this.cityData = this.cities.find((city) => city.uid === this.cityUid);
    } else if (window.hash !== this.$store.state.hash) {
      this.backToCitySelector();
      return;
    } else if (this.city) {
      this.cityData = this.city;
    } else if (this.$store.state.city) {
      this.cityData = this.$store.state.city;
    }
    if (this.cityData && this.cityData.link) {
      fetchShops.bind(this)(this.cityData.link);
    } else {
      this.backToCitySelector();
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
    backToCitySelector() {
      this.$store.commit('setCity', null);
      this.$router.push({ name: 'Home' });
    },
    openShop(shop) {
      this.$store.commit('setShop', shop);
      this.$router.push({
        name: 'Shop',
        params: {
          shop,
          cityLink: this.cityData.link,
          cityUid: this.cityData.uid,
          shopLink: shop.link,
          shopUid: shop.uid,
        },
      });
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
