<template>
  <div id="app">
    <router-view/>
    <!-- bottom menu -->
    <div class="bottom-menu-bar">
      <md-bottom-bar md-sync-route >
        <md-bottom-bar-item to="/" exact md-label="" md-icon="Home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/list" md-label="" md-icon="List"></md-bottom-bar-item>
        <md-bottom-bar-item to="/options" md-label="" md-icon="Options"></md-bottom-bar-item>
      </md-bottom-bar>
    </div><!-- /bottom menu bar -->
  </div> <!-- /app -->     
</template>

<script>
export default {
  name: 'App',  
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
.md-bottom-bar.md-theme-default.md-type-fixed {
    position: absolute;
    bottom: 0;
    z-index: 9999;
}
.md-layout{
  padding: 5%;
}
</style>
