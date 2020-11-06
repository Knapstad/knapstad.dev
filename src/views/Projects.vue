<template>
  <div>
    <div v-for="project in projects" :key="project.id">
      <ArticlePreview v-bind:article="project" />
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview.vue';
import projects from '@/assets/projects/projects.json';

export default {
  name: 'Projects',
  components: { ArticlePreview },
  metaInfo() {
    return {
      title: 'Knapstad.dev - ',
      titleTemplate: `%s | Projects`,
      meta: [
        {
          name: 'description',
          content: `A list of my projects`,
        },
      ],
    };
  },
  data() {
    return {
      projects,
    };
  },
};
</script>
<style scoped></style>
