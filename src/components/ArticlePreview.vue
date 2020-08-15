<template>
  <div>
    <a :href="article.path" class="cardlink">
      <div class="cardbg">
        <h2>{{ article.title | capitalize }}</h2>
        <p class="date">Created on: {{ article.date }}</p>
        <p>{{ article.description | capitalize }}</p>
        <div class="readmore">Read more</div>
      </div>
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

div.readmore {
  width: 100%;
  border: 0;
  height: 40px;
  padding: 0;
  margin: auto;
  font-size: 20px;
  background: gray;
  text-decoration: none;
  color: initial;
  appearance: button;
  text-align: center;
  line-height: 40px;
}

.readmore:hover {
  background: lightgray;
}
</style>
