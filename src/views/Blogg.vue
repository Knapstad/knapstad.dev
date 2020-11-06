<template>
  <div>
    <component :is="componentFile" />
  </div>
</template>

<script>
export default {
  props: ['data'],
  metaInfo() {
    return {
      title: 'Knapstad.dev - ',
      titleTemplate: `%s | ${this.data.title}`,
      meta: [{ name: 'description', content: this.data.description }],
    };
  },
  computed: {
    componentFile() {
      return () => import(`@/assets/articles/${this.data.path}.md`);
    },
  },
};
</script>

<style></style>
