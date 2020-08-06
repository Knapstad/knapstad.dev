<template>
  <ChristmasCounter date="week" @dateObject="getData($event)" />
</template>

<script>
import ChristmasCounter from '@/components/ChristmasCounter.vue';

export default {
  name: 'Dager igjen til jul',
  components: {
    ChristmasCounter,
  },
  methods: {
    getData(data) {
      this.days = data.days,
      this.weeks = data.weeks,
    },
  },
  data(){
    return{
      days: '',
      weeks: '',
    }
  },
};
</script>

<style></style>
