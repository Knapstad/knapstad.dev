<template>
  <div>
    <ChristmasCounter date="day" @dateObject="getData($event)" />
    <router-link to="/ukerigjentiljul">
      <p>Lurer du på hvor mange uker det er til jul?</p>
    </router-link>
  </div>
</template>

<script>
import ChristmasCounter from '@/components/ChristmasCounter.vue';

export default {
  name: 'Dager igjen til jul',
  components: {
    ChristmasCounter,
  },
  metaInfo() {
    return {
      title: 'Knapstad.dev - ',
      titleTemplate: `%s | ${this.title}`,
      meta: [
        {
          name: 'description',
          content: `Lurer du på hvor mange dager det er til jul? Det er ${this.days} dager til jul`,
        },
      ],
    };
  },
  methods: {
    getData(data) {
      this.days = data.days;
      this.weeks = data.weeks;
      this.title = 'Knapstad.dev - ' + this.days + ' Dager Igjen Til Jul';
    },
  },
  data() {
    return {
      days: '',
      weeks: '',
      title: '',
    };
  },
};
</script>

<style></style>
