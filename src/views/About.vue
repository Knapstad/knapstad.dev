
<template>
  <div class="content">
    <VueShowdown :markdown="fileContent"></VueShowdown>
    <img src="..\assets\Atricles\readme-img\Cloud-Api-enable.png">
  </div>
</template>

<script>
import mdFile from '../assets/Atricles/GtmVersionChecker.md';

export default {
  name: 'VueMarkdown',
  data() {
    return {
      fileContent: '',
    };
  },
  mounted() {
    this.getMDFile();
  },
  methods: {
    getMDFile() {
      this.fileContent = mdFile;
    },
  },
};
</script>
