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
            <h1>{{$t('title')}}</h1>
            <p>{{$t('subtitle')}}</p>
            <button
              class="el-button el-button-sm"
              @click="$router.push({ name: 'Landing' })"
            >
              {{$t('discoverMore')}}
            </button>
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
          <h4 class="city-selector-label">{{$t('citySelectorTitle')}}</h4>
          <input
            type="text"
            class="el-input city-selector-filter"
            :placeholder="$t('citySelectorFilter')"
            v-model="cityFilter"
          />
        </div>
        <carousel
          class="city-selector-carousel"
          :perPageCustom="[[0, 1], [768, 3], [1024, 4], [1240, 6]]"
          :paginationEnabled="false">
          <slide
            class="city-selector-carousel-item"
            v-for="(city, index) in filteredCities"
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
import fetchCities from '@/services/cities';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      ipfsStatus: false,
      cities: [],
      cityFilter: '',
    };
  },
  computed: {
    filteredCities() {
      if (this.cityFilter !== '') {
        return this.cities.filter((city) => city.name.toUpperCase().includes(this.cityFilter.toUpperCase()));
      }
      return this.cities;
    },
  },
  mounted() {
    if (this.$store.state.city && this.$store.state.city.link && this.$store.state.city.uid) {
      this.$router.push({
        name: 'City',
        params: {
          city: this.$store.state.city,
          cityLink: this.$store.state.city.link,
          cityUid: this.$store.state.city.uid,
        },
      });
    } else {
      fetchCities.bind(this)();
    }
  },
  methods: {
    openCity(city) {
      this.$store.commit('setCity', city);
      this.$router.push({
        name: 'City',
        params: {
          city,
          cityLink: this.$store.state.city.link,
          cityUid: this.$store.state.city.uid,
        },
      });
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
