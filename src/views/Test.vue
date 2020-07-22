<template>
  <div class="home">
    <EventPreview v-bind:event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventPreview from '@/components/EventPreview.vue';

export default {
  name: 'Test',
  components: {
    EventPreview,
  },
  data() {
    return {
      event: {
        name: 'navn',
        winner: 'meg',
      },
    };
  },
};
</script>
