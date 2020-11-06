<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <ArticlePreview v-bind:article="article" />
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview.vue';
import articles from '@/assets/articles/articles.json';

export default {
  name: 'Articles',
  components: { ArticlePreview },
  metaInfo() {
    return {
      title: 'Knapstad.dev - ',
      titleTemplate: `%s | Articles`,
      meta: [
        {
          name: 'description',
          content: `A list of my articles`,
        },
      ],
    };
  },
  data() {
    return {
      articles,
    };
  },
};
</script>
<style scoped></style>
