<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ decription }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'description'],
};
</script>
<style>
</style>