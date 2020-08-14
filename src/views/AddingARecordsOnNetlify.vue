<template>
  <main>
    <vue-headful
      title="Google tag manager Version checker"
      description="Integrate Google Tag Manager changes with Microsoft Teams and Slack "
    />
    <div class="content">
      <Netlify />
    </div>
  </main>
</template>

<script>
import Netlify from '@/assets/Atricles/AddingARecordsOnNetlify.md';

export default {
  components: { Netlify },
};
</script>
