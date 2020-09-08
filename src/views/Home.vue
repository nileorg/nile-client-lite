<template>
  <nile-rise-layout>
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
  </nile-rise-layout>
</template>

<script>
import Card from '@/components/Card.vue';
import fetchCities from '@/services/cities';
import NileRiseLayout from '../layouts/NileRise.vue';

export default {
  name: 'Home',
  components: {
    Card,
    NileRiseLayout,
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
    if (this.$store.state.city && this.$store.state.city.link) {
      this.$router.push({
        name: 'City',
        params: {
          city: this.$store.state.city,
          cityLink: this.$store.state.city.link,
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
