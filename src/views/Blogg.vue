<template>
  <div>
    <component :is="componentFile" />
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    componentFile() {
      return () => import(`@/assets/Atricles/${this.data.path}.md`);
    },
  },
};
// console.log(this.data.path);
console.log('What');
</script>

<style></style>
