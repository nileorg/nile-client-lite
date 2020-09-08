<template>
  <nile-rise-layout>
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
            <p>{{ $t('aboutDescription') }}</p>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <h2>{{ $t('aboutFree') }}</h2>
              </div>
              <el-image src="https://via.placeholder.com/600" :fit="fit" />
              <p>{{ $t('aboutFreeDescription') }}</p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <h2>{{ $t('aboutDecentralized') }}</h2>
              </div>
              <el-image src="https://via.placeholder.com/600" :fit="fit" />
              <p>{{ $t('aboutDecentralizedDescription') }}</p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <h2>{{ $t('aboutLocal') }}</h2>
              </div>
              <el-image src="https://via.placeholder.com/600" :fit="fit" />
              <p>{{ $t('aboutLocalDescription') }}</p>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </nile-rise-layout>
</template>

<script>
import NileRiseLayout from '../layouts/NileRise.vue';

export default {
  name: 'About',
  components: {
    NileRiseLayout,
  },
};
</script>
r
