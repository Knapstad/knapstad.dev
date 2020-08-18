<template>
  <div>
    <ChristmasCounter date="week" @dateObject="getData($event)" />
    <router-link to="/dagerigjentiljul">
      <p>Lurer du på hvor mange dager det er til jul?</p>
    </router-link>
  </div>
</template>

<script>
import ChristmasCounter from '@/components/ChristmasCounter.vue';

export default {
  name: 'Uker igjen til jul',
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
          content: `Lurer du på hvor mange dager det er til jul? Det er ${this.weeks} til jul`,
        },
      ],
    };
  },
  methods: {
    getData(data) {
      this.days = data.days;
      this.weeks = data.weeks;
      this.title = 'Knapstad.dev - ' + this.weeks + ' Uker Igjen Til Jul';
    },
  },
  data() {
    return {
      days: '',
      weeks: '',
      description: 'Det er ' + this.weeks + 'igjen til jul',
      title: '',
    };
  },
};
</script>

<style></style>
