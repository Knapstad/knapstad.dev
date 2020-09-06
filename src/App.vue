<template>
  <div id="app" :class="{ frontpage: $route.path == '/' }">
    <div id="nav">
      <nav>
        <router-link to="/">
          <img class="nav" alt="Knapstad logo" src="@/assets/BlackLogoNoName.png" />
        </router-link>
        <a href="https://github.com/knapstad" class="navlink">
          Github
          <img class="external" src="@/assets/icons8-external-link-32.svg" />
        </a>
        |
        <a href="https://instagram.com/bendikbaker" class="navlink">
          Instagram
          <img class="external" src="@/assets/icons8-external-link-32.svg" />
        </a>
        |
        <router-link to="/articles" class="navlink">Articles</router-link>
      </nav>
    </div>
    <transition name="page">
      <router-view />
    </transition>
  </div>
</template>
<script>
document.documentElement.style.setProperty('--screen-width', window.innerWidth);

window.addEventListener('resize', function () {
  document.documentElement.style.setProperty(
    '--screen-width',
    '' + (100 + (900 - window.innerWidth) * 0.12) + '%',
  );
  console.log('resize');
});

export default {};
</script>
<style>
html {
  overflow: auto;
}
.row {
  display: flex;
}
.column {
  flex: 50%;
}
#app {
  width: calc(100% - 3px);
  height: auto;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 150%;
}
#nav {
  margin-bottom: 2rem;
  width: auto;
  font-size: 13px;
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
section img {
  box-shadow: 0px 1px 5px #000;
  max-width: 100%;
}
main img {
  box-shadow: 0px 1px 5px #000;
  max-width: 100%;
}
img.external {
  width: 1em;
}
section {
  text-align: left;
}
pre {
  overflow-x: auto;
  background: lightgrey;
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
@media only screen and (min-width: 900px) {
  #app {
    width: var(--screen-width);
    min-width: 650px;
    margin: 0 auto;
    top: 0;
    transition: 0.3s ease-in-out;
    padding-left: calc(100vw - 100%);
  }
  #app.frontpage {
    top: 50%;
    margin-top: 10%;
    transition: 0.3s ease-in-out;
  }
  #nav {
    font-size: 18px;
  }
  .page-enter-active,
  .page-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0, 0, 1, 1);
    overflow: hidden;
  }

  .page-enter,
  .page-leave-active {
    opacity: 0;
    transform: translate(2em, 2em);
    transition-duration: 0.1s;
  }
  code {
    background-color: #eee;
    border: 0.1px solid #999;
    display: block;
    padding: 10px;
    font-family: Consolas, monaco, monospace;
  }
}
@media only screen and (min-width: 1300px) {
  #app {
    width: 40%;
    min-width: 650px;
    margin: 0 auto;
    top: 0;
    transition: 0.3s ease-in-out;
    padding-left: calc(100vw - 100%);
  }
  #nav {
    font-size: 18px;
  }
  .page-enter-active,
  .page-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0, 0, 1, 1);
    overflow: hidden;
  }

  .page-enter,
  .page-leave-active {
    opacity: 0;
    transform: translate(2em, 2em);
    transition-duration: 0.1s;
  }
  code {
    background-color: #eee;
    border: 0.1px solid #999;
    display: block;
    padding: 10px;
    font-family: Consolas, monaco, monospace;
  }
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}
</style>
