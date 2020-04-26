<template>
  <div class="home">
    <div
      class="section section--hero"
      id="home"
      :style="`background-image: url('${require('../assets/home_hero.jpg')}');`"
    >
      <div class="container">
        <div class="el-row">
          <div class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-12">
            <h1>{{$t('message')}}</h1>
            <p>description</p>
          </div>
        </div>
      </div>
      <div class="earth-wrapper animation-target">
        <img alt="earth" src="../assets/earth.svg" class="earth rotating" />
      </div>
      <div class="hero-divider" style="width: 100vw;">
        <img alt="divider" src="../assets/divider_grey.svg" class="divider" />
      </div>
    </div>
    <div class="el-row" style="background-color: #f5f8fa;">
      <div class="el-col el-col-24 el-col-xs-24 city-selector">
        <div style="padding-top: 30px; padding-left: 30px; padding-right: 30px;">
          <h4 class="city-selector-label">Per iniziare seleziona la tua città</h4>
          <input
            type="text"
            class="el-input city-selector-filter"
            placeholder="Ricerca la tua città"
          />
        </div>
        <carousel
          class="city-selector-carousel"
          :perPageCustom="[[0, 1], [768, 3], [1024, 4], [1240, 6]]"
          :paginationEnabled="false">
          <slide
            class="city-selector-carousel-item"
            v-for="(city, index) in cities"
            :key="index"
            >
            <Card
              :key="`card-${index}`"
              :title="city.name"
              :description="city.description"
              :image="city.image"
              @click.native="() => openCity(city)"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import {
  Buffer,
} from 'ipfs';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      ipfsStatus: false,
      cities: [],
    };
  },
  mounted() {
    if (this.$store.state.city && this.$store.state.city.link) {
      this.$router.push({ name: 'City', params: { city: this.$store.state.city } });
    } else {
      this.fetchCities();
    }
  },
  methods: {
    openCity(city) {
      this.$store.commit('setCity', city);
      this.$router.push({ name: 'City', params: { city } });
    },
    async fetchCities() {
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
      for await (const chunk of ipfs.cat('QmdXs9HiRC1C1PQymtebbsPdsSdtpbGMght52qbKwctaRo')) {
        chunks.push(chunk);
      }
      try {
        this.cities = JSON.parse(Buffer.concat(chunks).toString());
      } catch (err) {
        this.cities = [];
      }
    },
  },
};
</script>

<style scoped>
.city-selector-label {
  display: inline;
}
.city-selector-filter {
  float: right;
}

.city-selector-carousel {
  width: 100vw;
  margin-top: 20px;
}

@media only screen and (max-width: 520px) {
  .city-selector {
    text-align: center;
  }

  .city-selector-label {
    display: block;
  }

  .city-selector-filter {
    float: inherit;
  }

  .glide__track,
  .glide__slides {
    overflow: visible;
  }
}
</style>
