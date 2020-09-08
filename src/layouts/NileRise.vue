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
          </div>
          <el-row>
            <el-col>
              <p class="links">
                <el-link type="primary" href="/#/about">About</el-link>
              </p>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="earth-wrapper animation-target">
        <img alt="earth" src="../assets/earth.svg" class="earth rotating" />
      </div>
      <div class="hero-divider" style="width: 100vw;">
        <img alt="divider" src="../assets/divider_grey.svg" class="divider" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .links a {
    font-size: 200%;
  }
</style>
