<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Tp4 Corizzo Martin</h1>
      <NavBar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar 
  }
}
</script>

<style>

</style>
