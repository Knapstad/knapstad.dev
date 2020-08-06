<template>
  <div>
    <vue-headful title="Knapstad.dev - Uker Igjen Til Jul" :description="description" />
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
  methods: {
    getData(data) {
      this.days = data.days;
      this.weeks = data.weeks;
    },
  },
  data() {
    return {
      days: '',
      weeks: '',
      description: 'Det er ' + this.weeks + 'igjen til jul',
    };
  },
};
</script>

<style></style>
