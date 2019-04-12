<template>
  <div class="splashscreen-fluid">
    <h1>Relapp</h1>
    <h3>Just Relapp...</h3>
    <div class="logo">
      <img src="../assets/lotus-position.png">
    </div>
    <router-link to="/MainPage">
      <v-ons-button class="button">NEXT</v-ons-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-style: italic;
  font-weight: 100;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

h1 {
  font-size: 60px;
}
.logo {
  display: flex;
  justify-content: center;
  padding: 50px;
}
img {
  width: 200px;
  height: 200px;
}

.button {
  background: whitesmoke;
  margin-top: 20px;
  color: #e28c8d;
}
</style>
