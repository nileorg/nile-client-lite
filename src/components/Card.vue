<template>
  <div class="card" style="max-height: 250px; overflow: hidden;">
    <div class="card-header" :style="`background-image: url('${image}');`">
      <div class="card-title">{{title}}</div>
    </div>
    <div class="card-body">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    description: String,
    image: String,
  },
};
</script>

<style scoped>
.card {
    background-color: var(--white);
    border-radius: 10px;
    border: var(--border-lg);
    color: var(--black);
}

.card-header {
    height: 100px;
    border-radius: 10px 10px 0 0;
    border-bottom: var(--border-lg);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    position: relative;
}

.card-header .card-title {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 23px;
    color: white;
    font-weight: bold;
}

.card-body {
    padding: 15px;
}
</style>
