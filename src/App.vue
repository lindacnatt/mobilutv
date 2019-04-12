<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to your relaxation app"/>-->
    <!--<SplashScreen/>
    <MainPage/>-->
    <router-view></router-view>
  </div>
</template>

<script>
//import SplashScreen from './components/SplashScreen.vue'
//import MainPage from './components/MainPage.vue'

export default {
  name: 'app',
  components: {
    //SplashScreen,
    //MainPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFEFB;
  margin-top: 30px;
}
body{
  background:  #5eb4dd;

}
</style>
