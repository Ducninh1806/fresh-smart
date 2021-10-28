<template>
  <div id="app">
    <div class="home home-4">
        <div id="all">
          <Header />
          <router-view />
          <Footer/>
        </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  },
  created() {
    const user = localStorage.getItem('user');
    console.log('123', user)
  },
  watch: {
    '$route.path' (newPath) {
      console.log('path new', newPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
