<template>
  <div>
    <div
      class="section section--hero"
      id="home"
      :style="`background-image: url('${require('../assets/home_hero.jpg')}');`"
    >
      <div class="container">
        <div class="el-row">
          <div
            class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-12"
          >
            <h1>Ordine in download...</h1>
            <br/>
            <h3>
              Fai click qui sotto se il download non dovesse partire in
              automatico
            </h3>
            <br/>
            <button class="el-button el-button-sm" @click="download">
              Download
            </button>
          </div>
        </div>
      </div>
      <div class="earth-wrapper animation-target">
        <img alt="earth" src="../assets/earth.svg" class="earth rotating" />
      </div>
      <div class="hero-divider" style="width: 100vw">
        <img alt="divider" src="../assets/divider_grey.svg" class="divider" />
      </div>
    </div>
  </div>
</template>

<script>
import { jsPDF as JsPDF } from 'jspdf';

export default {
  name: 'Order',
  props: {
    orderHash: String,
  },
  mounted() {
    this.download();
  },
  methods: {
    download() {
      const doc = new JsPDF();
      doc.text(Buffer.from(this.orderHash, 'base64').toString(), 10, 10);
      doc.save('order.pdf');
    },
  },
};
</script>

<style scoped>
.section--hero {
  height: 100vh;
}
</style>
