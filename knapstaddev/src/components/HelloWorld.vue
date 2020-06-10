<template>


  <div class="hello">
  <vue-headful
            title="Knapstad"
            description="I make stuff in Python"
        />
    <h1>{{ msg }}</h1>
    <p>
      I'm a developer and analyst based in Oslo Norway.<br>
      <a href="https://github.com/knapstad" target="_blank" rel="noopener">Check out my stuff at Github</a>.
    </p>
  </div>
</template>

<script>
export default {
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
