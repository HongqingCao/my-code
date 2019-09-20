<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body{
  font-size: 100%;
  background:	#fff;
  font-family: 'Open Sans', sans-serif;
  margin:0;
  padding:0;
}
p{
  margin:0;
}
h1,h2,h3,h4,h5,h6,a{
  font-family: Bulter,QingKe,sans-serif,SimSun;
  font-weight:300;
  margin:0;
  text-decoration:none;
}
ul,label{
  margin:0;
  padding:0;
}
body a:hover{
  text-decoration:none;
}
#app {
  font-family: Bulter,QingKe,sans-serif,SimSun;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
