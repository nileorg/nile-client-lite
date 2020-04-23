<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('./assets/styles/theme.css');
@import url('./assets/styles/variables.css');
@import url('./assets/styles/general.css');
@import url('./assets/styles/animation.css');
@import url('./assets/styles/layout.css');
@import url('./assets/styles/section.css');
@import url('./assets/styles/buttons.css');
@import url('./assets/styles/inputs.css');
@import url('./assets/styles/hero.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
