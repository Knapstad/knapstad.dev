<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <ArticlePreview v-bind:article="article" />
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview.vue';

export default {
  name: 'Articles',
  components: { ArticlePreview },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'en tittel',
          description: 'en liten beskrivelse her da altså',
        },
        {
          id: 2,
          title: 'en tittel til',
          description: 'en liten beskrivelse her da min venn altså',
        },
        {
          id: 3,
          title: 'en tittel her ogsåp',
          description: 'en liten beskrivelse her og da altså',
        },
        {
          id: 4,
          title: 'en tittel og her',
          description:
            'en liten beskrivelse her daasd asd asd asdassad af aert yfd zf hsrthxgh s cgh srs ghsrt xghsth altså',
        },
      ],
    };
  },
};
</script>
<style scoped></style>
