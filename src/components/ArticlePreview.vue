<template>
  <div class="cardbg">
    <h2>{{ article.title | capitalize }}</h2>
    <p>{{ article.description | capitalize }}</p>
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
  padding: 2px;
}
p {
  text-align: left;
  margin-left: 2px;
  padding-bottom: 5px;
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
</style>
