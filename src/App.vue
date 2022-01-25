<template>
  <div id="app">
    <nav>
      <router-link to="/">Paintings</router-link>
      <router-link to="/statues">Statues</router-link>
      <router-link to="/info">Info</router-link>
    </nav>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      state: 'Paintings'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav a {
  padding: 10px;
  background-color: brown;
  text-decoration: none;
  color: white;
}

nav a.router-link-exact-active {
  background-color: lightcoral;
}
</style>