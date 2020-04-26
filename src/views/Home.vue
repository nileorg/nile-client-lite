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
        <vue-glide class="city-selector-carousel" :key="carouselKey" :perView="carouselPerView" :gap="carouselGap">
          <vue-glide-slide v-for="i in 10" :key="i">
            <Card
              title="prova"
              description="test"
              image="http://ipfs.castignoli.it/ipfs/QmQgXab3TQ1CjQAmP2DcmH7MwQhYvJkaUwVrEtRdcc247p"
            />
          </vue-glide-slide>
        </vue-glide>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import {
  bindOptions as bindCarouselOptions,
  getDefaults as getCarouselDefaults,
} from '@/utilities/carousel';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    const carouselDefaults = getCarouselDefaults();
    return Object.assign(carouselDefaults, {});
  },
  mounted() {
    bindCarouselOptions(this);
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
  display: inline-block;
  padding-left: 30px;
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
