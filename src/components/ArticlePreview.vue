<template>
  <div class="cardbg">
    <a :href="article.path" class="cardlink">
      <h2>{{ article.title | capitalize }}</h2>
      <p class="date">Created on: {{ article.date }}</p>
      <p>{{ article.description | capitalize }}</p>
      <a class="readmore" v-bind:href="article.path">
        <div v-bind:href="article.path" class="readmore">Read more</div></a
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: ['article'],
};
</script>
<style scoped>
h2 {
  text-align: left;
  margin: 1px;
  padding-top: 8px;
  padding-left: 5px;
  padding-bottom: 0;
  font-size: 18 px;
}
p {
  text-align: left;
  margin-left: 2px;
  padding: 5px;
  padding-bottom: 5px;
}
p.date {
  margin-top: 1px;
  text-align: left;
  padding-top: 0;
  padding-left: 5px;
  padding-bottom: 3px;
  font-size: 10px;
  font-family: consolas;
  color: gray;
}
.cardbg {
  background: whitesmoke;
  text-align: left;
  border-radius: 2px;
  box-shadow: 2px 2px 5px #000;
  width: 100%;
  -webkit-margin-after: 1rem;
  margin-block-end: 1rem;
}
.cardlink {
  color: initial;
  text-decoration: none;
}
a.readmore {
  display: flex;
  width: 100%;
  border: 0;
  height: 40px;
  padding: 0;
  margin: 0;
  font-size: 20px;
  background: gray;
  text-decoration: none;
  color: initial;
  appearance: button;
  text-align: center;
}
div.readmore {
  margin: auto;
}
.readmore:hover {
  background: lightgray;
}
.readmore:focus {
  border: 2px solid;
  font-size: 23px;
  width: 99.9%;
  overflow: hidden;
}
</style>
