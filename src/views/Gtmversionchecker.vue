
<template>
  <main>
    <vue-headful
      title="Google tag manager Version checker"
      description="Integrate Google Tag Manager changes with Microsoft Teams and Slack "
    />
    <div class="content">
      <Gtm />
    </div>
  </main>
</template>

<script>
import Gtm from '@/assets/Atricles/GtmVersionChecker.md';

export default {
  components: { Gtm },
};
</script>
