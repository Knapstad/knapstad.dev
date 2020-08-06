<template>
  <div class="counter">
    <div v-if="(returnDateJson('12/24/2020').days / 1) >> 0 < 50">
      <p>Oj oj oj nå er det ikke lenge igjen til jul!</p>
      <p>
        Det er bare <strong>{{ (returnDateJson('12/24/2020').days / 1) >> 0 }}</strong> dager igjen!
      </p>
    </div>
    <div v-else>
      <p>
        Det er <strong>{{ (returnDateJson('12/24/2020').days / 1) >> 0 }}</strong> dager igjen til
        jul.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    returnDateJson: function(date) {
      let today = new Date();
      let calcDate = new Date(date);
      let difference = calcDate.getTime() - today.getTime();
      if (difference < 0) {
        return -1;
      }
      let dateObject = {
        days: difference / (1000 * 60 * 60 * 24),
        weeks: difference / (1000 * 60 * 60 * 24) / 7,
      };
      return dateObject;
    },
  },
  props: ['date'],
};
</script>

<style>
.counter {
  background: whitesmoke;
  text-align: center;
  border-radius: 1px;
  box-shadow: 2px 2px 5px #000;
  width: 100%;
  /* -webkit-margin-after: 1rem; */
  padding: 0.5rem;
}
</style>
