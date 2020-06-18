
<template>
  <main>
      <vue-headful
            title="Google tag manager Version checker"
            description="Integrate Google Tag Manager changes with Microsoft Teams and Slack "
        />
    <div class="content">
      <VueShowdown :markdown="fileContent"></VueShowdown>
    </div>
  </main>
</template>

<script>
import mdFile from '@/assets/Atricles/GtmVersionChecker.md';

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
