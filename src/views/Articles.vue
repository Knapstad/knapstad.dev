<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <ArticlePreview v-bind:article="article" />
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview.vue';
import articles from '@/assets/Atricles/articles.json';

export default {
  name: 'Articles',
  components: { ArticlePreview },
  data() {
    return {
      articles,
    };
  },
};
</script>
<style scoped></style>
