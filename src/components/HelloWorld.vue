<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      I'm a developer and analyst based in Oslo Norway.
      <br />
      <a href="https://github.com/knapstad" target="_blank" rel="noopener">
        Check out my stuff at Github
        <img class="external" src="icons8-external-link-32.svg" /> </a
      >.
    </p>
  </div>
</template>

<script>
export default {
   /* eslint-disable */
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
