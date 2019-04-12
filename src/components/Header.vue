<template>
  <div class="header">
    <h1>Relapp</h1>
    <div class="logo">
      <img src="../assets/lotus-position.png">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.header{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin:20px;
}
.header > *{
    margin-right: 50px;
}

img{
  width:100px;
}
h1{
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif
}
</style>
