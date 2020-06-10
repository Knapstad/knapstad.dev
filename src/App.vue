<template>
  <div id="app">
    <div id="nav">
      <a href="https://github.com/knapstad">Github<img class="external" src=icons8-external-link-32.svg> </a> |
      <a href="https://instagram.com/bendikbaker">Instagram <img class="external" src=icons8-external-link-32.svg></a>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:500px;
  height:500px;
  margin:0 auto;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-250px;
  margin-top:-250px;
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

img.external{
  width: 1em;
}
</style>
