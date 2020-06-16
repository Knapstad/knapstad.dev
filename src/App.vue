<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">
          <img class="nav" alt="Knapstad logo" src="@/assets/BlackLogoNoName.png" />
        </router-link>
        <a href="https://github.com/knapstad" class="navlink">
          Github
          <img class="external" src="icons8-external-link-32.svg" />
        </a> |
        <a href="https://instagram.com/bendikbaker" class="navlink">
          Instagram
          <img class="external" src="icons8-external-link-32.svg" />
        </a> |
        <router-link to="/gtmversionchecker" class="navlink">Gtm Version Checker</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -250px;
}

#nav {
  padding: 30px;
}

#nav a.navlink {
  position: relative;
  font-weight: bold;
  color: #2c3e50;
  transition: 0.3s;
  text-decoration: none;
}
#nav a.navlink:hover {
  font-weight: bold;
  color: #0b2740;
  text-decoration: none;
}
#nav a.navlink::before {
  content: '';
  color: '#0B2740';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform: scaleX(1);
  transition: all 0.2s ease-in-out 0.1s;
}

#nav a.navlink:hover::before {
  visibility: visible;
  transform: scaleX(0);
}
#nav a.router-link-exact-active {
  color: #42b983;
}
main img {
  box-shadow: 0px 1px 5px #000;
}
img.external {
  width: 1em;
}

.content {
  text-align: left;
}

img.nav {
  width: 3em;
  padding-right: 1em;
  position: relative;
  top: 1rem;
}
</style>
