<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col>
          <h1>{{ $t('about') }}</h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <p>Nile is a decentralized, forever free for everyone, local ecommerce platform.</p>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <h2>Free</h2>
            </div>
            <el-image src="https://via.placeholder.com/600" :fit="fit" />
            <p>
              Nile is completely free. No commission for the shop, nor for the customer. Forefer.
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <h2>Decentralized</h2>
            </div>
            <el-image src="https://via.placeholder.com/600" :fit="fit" />
            <p>
              Nile doesn't run on a server. It runs on a network controlled by its community.
              The shops directly connect to Nile network for selling products.
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <h2>Local</h2>
            </div>
            <el-image src="https://via.placeholder.com/600" :fit="fit" />
            <p>
              Search for shops in your city.
              Collect your order directly in the store or have it delivered to your place.
            </p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'About',
};
</script>
